#!/bin/sh
action=$1
args=("$@")
bold=$(tput bold)
underline=$(tput sgr 0 1)
reset=$(tput sgr0)

red=$(tput setaf 1)
green=$(tput setaf 76)
white=$(tput setaf 7)
tan=$(tput setaf 202)
blue=$(tput setaf 25)
#
# Headers and Logging
#

#set -x
underline() { printf "${underline}${bold}%s${reset}\n" "$@"
}
h1() { printf "\n${underline}${bold}${blue}%s${reset}\n" "$@"
}
h2() { printf "\n${underline}${bold}${white}%s${reset}\n" "$@"
}
debug() { printf "${white}%s${reset}\n" "$@"
}
info() { printf "${white}➜ %s${reset}\n" "$@"
}
success() { printf "${green}✔ %s${reset}\n" "$@"
}
error() { printf "${red}✖ %s${reset}\n" "$@"
}
warn() { printf "${tan}➜ %s${reset}\n" "$@"
}
bold() { printf "${bold}%s${reset}\n" "$@"
}
note() { printf "\n${underline}${bold}${blue}Note:${reset} ${blue}%s${reset}\n" "$@"
}

HOST_IP="127.0.0.1"

# if [[ -z $HOST_IP ]];
# then
#   error "Please transfer localhost ip parameters. eg: sh install.sh 192.168.1.100"
#   exit
# fi

# 

function check_docker {
	if ! docker --version &> /dev/null
	then
		error "Need to install docker(17.06.0+) first and run this script again."
		exit 1
	fi

	# docker has been installed and check its version
	if [[ $(docker --version) =~ (([0-9]+)\.([0-9]+)([\.0-9]*)) ]]
	then
		docker_version=${BASH_REMATCH[1]}
		docker_version_part1=${BASH_REMATCH[2]}
		docker_version_part2=${BASH_REMATCH[3]}

		note "docker version: $docker_version"
		# the version of docker does not meet the requirement
		if [ "$docker_version_part1" -lt 17 ] || ([ "$docker_version_part1" -eq 17 ] && [ "$docker_version_part2" -lt 6 ])
		then
			error "Need to upgrade docker package to 17.06.0+."
			exit 1
		fi
	else
		error "Failed to parse docker version."
		exit 1
	fi
}

function check_dockercompose {
  
	if [! docker compose version] &> /dev/null || [! docker-compose --version] &> /dev/null
	then
		error "Need to install docker-compose(1.18.0+) or a docker-compose-plugin (https://docs.docker.com/compose/)by yourself first and run this script again."
		exit 1
	fi

	# either docker compose plugin has been installed
	if docker compose version &> /dev/null
	then
		note "$(docker compose version)"
		DOCKER_COMPOSE="docker compose"

	# or docker-compose has been installed, check its version
	elif [[ $(docker-compose --version) =~ (([0-9]+)\.([0-9]+)([\.0-9]*)) ]]
	then
		docker_compose_version=${BASH_REMATCH[1]}
		docker_compose_version_part1=${BASH_REMATCH[2]}
		docker_compose_version_part2=${BASH_REMATCH[3]}

		note "docker-compose version: $docker_compose_version"
		# the version of docker-compose does not meet the requirement
		if [ "$docker_compose_version_part1" -lt 1 ] || ([ "$docker_compose_version_part1" -eq 1 ] && [ "$docker_compose_version_part2" -lt 18 ])
		then
			error "Need to upgrade docker-compose package to 1.18.0+."
			exit 1
		fi
	else
		error "Failed to parse docker-compose version."
		exit 1
	fi
}

check_docker
check_dockercompose

DIR_NAME=$(dirname $(readlink -f "$0"))
DATA_DIR_NAME="/data"
MYSQL_DATA_DIR=$DIR_NAME$DATA_DIR_NAME
export MYSQL_DATA_DIR=$MYSQL_DATA_DIR

function install(){
  info "Start install gops docker project"
  # 创建gops-db数据目录
  if [ ! -d $MYSQL_DATA_DIR ];then
    mkdir $MYSQL_DATA_DIR
    success "create gops-db data directory success"
  else
  note "gops-db data directory exist."
  fi


  docker-compose up -d

  # 等待gops-db启动
  note "wait gops-db start ....."
  sleep 30

  # 初始化用户和数据库
  info "initialize default user password and default database schemas"
  mysql -h$HOST_IP  -uroot  -P13306 -e "show databases" | grep -q jupiter
  if [ $? -eq 1 ];then
  mysql -h$HOST_IP -uroot  -P13306 < ./sql/schema.sql
  mysql -h$HOST_IP -uroot -P13306  < ./sql/privileges.sql
  fi

  nohup ./mars/client/mars-client start -a 0.0.0.0 -p 9000 -c mars/client/config.yml >> mars/client/output.log 2>&1 &

  if [ $? -eq 0 ];then
    success "start mars client success"
    else
    error "start mars client fail, please manual operation nohup ./mars/client/mars-client start -a 0.0.0.0 -p 9000 -c mars/client/config.yml >> mars/client/output.log 2>&1 &"
  fi
  success "Install Gops success"
}

function usage() {
  echo "$(gettext 'Gops Deployment Management Script')"
  echo
  echo "Usage: "
  echo "  ./gops.sh [COMMAND] [ARGS...]"
  echo
  echo "Installation Commands: "
  echo "  install           $(gettext 'Install gops')"
  echo
  echo "Management Commands: "
  echo "  start             $(gettext 'Start   gops docker containers')"
  echo "  stop              $(gettext 'Stop    gops docker containers')"
  echo "  rm                $(gettext 'rm      gops docker containers')"
  echo
}

function main() {
  case "${action}" in
  install )
    install
    ;;
  start )
    docker-compose start
    ;;
  stop )
    docker-compose stop
    ;;
  rm )
    docker-compose rm
    ;;
  -h )
    usage
    ;;
  help )
    usage
    ;;
  *)
    usage
    ;;
  esac
}

main "$@"
