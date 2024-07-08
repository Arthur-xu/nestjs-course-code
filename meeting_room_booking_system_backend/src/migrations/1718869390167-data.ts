import { MigrationInterface, QueryRunner } from "typeorm";

export class Data1718869390167 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("INSERT INTO `booking`(`id`,`startTime`,`endTime`,`status`,`note`,`userId`,`roomId`,`createTime`,`updateTime`) VALUES (1,'2023-09-29 10:54:01','2023-09-29 11:54:01','审批通过','',1,3,'2023-09-29 03:06:54.088220','2023-11-17 01:58:53.000000'),(2,'2023-09-29 10:54:02','2023-09-29 11:54:02','审批驳回','',2,6,'2023-09-29 03:06:54.088220','2023-10-21 03:42:53.000000'),(3,'2023-09-29 11:54:02','2023-09-29 12:54:02','已解除','',2,3,'2023-09-29 03:06:54.088220','2023-11-19 01:10:49.741279'),(4,'2023-09-29 10:54:02','2023-09-29 11:54:02','审批通过','',1,6,'2023-09-29 03:06:54.088220','2023-11-19 02:30:58.000000'),(5,'2023-09-29 10:54:02','2023-09-29 11:54:02','审批通过','',8,11,'2023-09-29 03:06:54.088220','2023-11-19 02:30:58.000000'),(6,'2023-09-29 10:54:02','2023-09-29 11:54:02','已解除','',9,11,'2023-09-29 03:06:54.088220','2024-01-01 01:23:53.000000'),(7,'2023-09-29 10:54:02','2023-09-29 11:54:02','审批通过','',9,3,'2023-09-29 03:06:54.088220','2024-01-01 01:10:14.279639'),(8,'2023-09-29 10:54:02','2023-09-29 11:54:02','审批通过','',9,6,'2023-09-29 03:06:54.088220','2024-01-01 01:19:23.388907'),(13,'2023-12-31 09:40:59','2023-12-31 09:57:39','申请中','',1,11,'2023-12-31 04:34:38.917720','2024-01-01 01:08:53.884596'),(14,'2023-12-31 09:42:39','2023-12-31 10:14:19','申请中','',1,6,'2023-12-31 04:35:06.508185','2024-01-01 01:08:04.023433'),(15,'2024-01-01 11:00:00','2024-01-01 12:00:00','申请中','',1,3,'2024-01-01 02:43:26.920016','2024-01-01 02:43:26.920016'),(16,'2024-01-01 13:00:00','2024-01-01 14:00:00','申请中','',1,3,'2024-01-01 02:45:47.758012','2024-01-01 02:45:47.758012'),(17,'2024-01-01 15:00:00','2024-01-01 16:00:00','申请中','',1,3,'2024-01-01 02:46:39.654219','2024-01-01 02:46:39.654219');")
        await queryRunner.query("INSERT INTO `users` VALUES (1,'guang','e10adc3949ba59abbe56e057f20f883e','神说要有光','xxxx@xx.com',NULL,NULL,1,0,'2023-07-25 02:25:03.379725','2023-09-12 03:40:40.000000'),(2,'guang2','e10adc3949ba59abbe56e057f20f883e','神说要有光2','1024195375@qq.com',NULL,NULL,1,0,'2023-07-26 01:39:33.456072','2023-09-12 03:57:06.000000'),(8,'zhangsan','e3ceb5881a0a1fdaad01296d7554868d','张三','1024195375@qq.com','uploads/1694845395657-974488092-headpic1.png','13233323333',1,1,'2023-07-26 03:19:06.523236','2023-09-16 06:59:32.000000'),(9,'lisi','1a100d2c0dab19c4430e7d73762b3423','里斯','yy@yy.com','xxx.png',NULL,1,0,'2023-07-26 03:19:06.553169','2023-08-02 13:05:53.000000'),(10,'dongdong','1a100d2c0dab19c4430e7d73762b3423','东东555','1024195375@qq.com','uploads/1692775078275-227950493-headpic2.png',NULL,1,0,'2023-08-12 15:41:10.537642','2023-09-12 04:01:41.000000'),(11,'gang','96e79218965eb72c92a549dd5a330112','小刚','1024195375@qq.com',NULL,NULL,1,0,'2023-08-12 23:54:38.856096','2023-09-12 03:50:45.000000'),(12,'xiaohong','96e79218965eb72c92a549dd5a330112','小红','1024195375@qq.com',NULL,NULL,0,0,'2023-08-13 00:00:53.802850','2023-09-12 03:54:32.846920'),(13,'xiaodong','96e79218965eb72c92a549dd5a330112','东东','1024195375@qq.com',NULL,NULL,1,0,'2023-08-13 00:01:52.641836','2023-09-12 03:53:09.000000');")
        await queryRunner.query("INSERT INTO `meeting_room` VALUES (3,'天王星33',30,'三层东','白板，电视','',0,'2023-09-16 08:10:25.319000','2023-09-16 08:10:25.319000'),(6,'aa',10,'bb','','',0,'2023-09-16 16:11:31.532151','2023-09-16 16:11:31.532151'),(11,'xxx',0,'xxx','xxx','xxx',0,'2023-09-28 00:27:28.529606','2023-09-28 00:27:28.529606'),(12,'aaa',0,'xxx','xxx','xxx',0,'2023-09-28 00:28:09.291785','2023-09-28 00:28:09.291785');")
        await queryRunner.query("INSERT INTO `permissions` VALUES (7,'ccc','访问 ccc 接口'),(8,'ddd','访问 ddd 接口');")
        await queryRunner.query("INSERT INTO `roles` VALUES (7,'管理员'),(8,'普通用户');")
        await queryRunner.query("INSERT INTO `role_permissions` VALUES (7,7),(7,8),(8,7);")
        await queryRunner.query("INSERT INTO `user_roles` VALUES (8,7),(9,8);")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("TRUNCATE TABLE booking");
    }

}