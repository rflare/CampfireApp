DROP TABLE IF EXISTS `posts`;
CREATE TABLE `posts` (
    `id` int NOT NULL AUTO_INCREMENT,
    `text` text DEFAULT NULL,
    `name` char(30) DEFAULT NULL,
    `timeMillis` bigint(20) DEFAULT NULL,
    PRIMARY KEY (id)
  
)
