CREATE TABLE `user_registeration` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`mobile` varchar(20) NOT NULL,
	`password` varchar(255),
	`confirmpassword` varchar(255),
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `user_registeration_id` PRIMARY KEY(`id`)
);
