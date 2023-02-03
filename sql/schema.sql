create database mars
  DEFAULT CHARACTER SET utf8
  DEFAULT COLLATE utf8_general_ci;
USE mars;

CREATE TABLE `build_server` (
  `id` int NOT NULL AUTO_INCREMENT,
  `hostname` varchar(255) DEFAULT NULL,
  `ip` varchar(160) DEFAULT NULL,
  `port` varchar(20) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;

INSERT INTO `mars`.`build_server`
(`id`,
`hostname`,
`ip`,
`port`)
VALUES
(1,
"localhost",
"127.0.0.1",
"9000");

create database jupiter
  DEFAULT CHARACTER SET utf8
  DEFAULT COLLATE utf8_general_ci;

create database saturn
  DEFAULT CHARACTER SET utf8
  DEFAULT COLLATE utf8_general_ci;

USE jupiter;

CREATE TABLE `platform` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;

CREATE TABLE `point` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `common` varchar(255) DEFAULT NULL,
  `platform_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;

INSERT INTO `jupiter`.`platform`
(`id`,
`name`,
`created_at`)
VALUES
(1,
"部署系统",
now());

INSERT INTO `jupiter`.`platform`
(`id`,
`name`,
`created_at`)
VALUES
(2,
"组权限管理",
now());

INSERT INTO `jupiter`.`point`
(`id`,
`name`,
`common`,
`platform_id`)
VALUES
(1,
"task-create",
"允许创建编辑部署任务",
1);
INSERT INTO `jupiter`.`point`
(`id`,
`name`,
`common`,
`platform_id`)
VALUES
(2,
"task-delete",
"允许删除部署任务",
1);

INSERT INTO `jupiter`.`point`
(`id`,
`name`,
`common`,
`platform_id`)
VALUES
(3,
"build-tool-create",
"允许创建编辑构建工具",
1);

INSERT INTO `jupiter`.`point`
(`id`,
`name`,
`common`,
`platform_id`)
VALUES
(4,
"build-tool-delete",
"允许删除编译工具",
1);

INSERT INTO `jupiter`.`point`
(`id`,
`name`,
`common`,
`platform_id`)
VALUES
(5,
"cluster-create",
"允许创建编辑集群",
1);

INSERT INTO `jupiter`.`point`
(`id`,
`name`,
`common`,
`platform_id`)
VALUES
(6,
"cluster-delete",
"允许删除集群",
1);

INSERT INTO `jupiter`.`point`
(`id`,
`name`,
`common`,
`platform_id`)
VALUES
(7,
"user-create",
"允许增删改用户",
2);

INSERT INTO `jupiter`.`point`
(`id`,
`name`,
`common`,
`platform_id`)
VALUES
(8,
"group-create",
"允许增删改组权限",
2);

INSERT INTO `jupiter`.`point`
(`id`,
`name`,
`common`,
`platform_id`)
VALUES
(9,
"node-create",
"允许创建节点",
1);

INSERT INTO `jupiter`.`point`
(`id`,
`name`,
`common`,
`platform_id`)
VALUES
(10,
"node-delete",
"允许删除节点",
1);

