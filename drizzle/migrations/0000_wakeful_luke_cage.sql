CREATE TABLE `events_table` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userid` varchar(255),
	`img` varchar(255),
	`name` varchar(255) NOT NULL,
	`time` varchar(255) NOT NULL,
	`location` varchar(20) NOT NULL,
	`description` varchar(20) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `events_table_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `user_registeration` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`mobile` varchar(20) NOT NULL,
	`password` varchar(255),
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `user_registeration_id` PRIMARY KEY(`id`)
);
