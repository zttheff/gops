#!/bin/sh
# set -x
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

HOST_IP=$1

if [[ -z $HOST_IP ]];
then
  error "Please transfer localhost ip parameters. eg: sh install.sh 192.168.1.100"
  exit
fi

# 
DIR_NAME=$(dirname $(readlink -f "$0"))
DATA_DIR_NAME="/data"
MYSQL_DATA_DIR=$DIR_NAME$DATA_DIR_NAME
echo $DATA_DIR

# 创建gops-db数据目录
if [ -d $MYSQL_DATA_DIR ];then
mkdir $MYSQL_DATA_DIR
success "create gops-db data directory success"
else
note "gops-db data directory exist."
fi

export MYSQL_DATA_DIR=$MYSQL_DATA_DIR
docker-compose up -d

# 等待gops-db启动
note "wait gops-db start ....."
sleep 6

# 初始化用户和数据库
info "initialize default user password and default database schemas"
mysql -h$HOST_IP -P13306 < ./makefile/db/schema.sql
mysql -h$HOST_IP -P13306 < ./makefile/db/privileges.sql