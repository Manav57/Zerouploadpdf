-- Conversion history for signed-in users
CREATE TABLE `conversion` (
  `id` text PRIMARY KEY NOT NULL,
  `user_id` text NOT NULL,
  `format` text NOT NULL,
  `status` text DEFAULT 'ok' NOT NULL,
  `input_name` text,
  `input_size` integer,
  `pages` integer,
  `created_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL,
  FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE cascade
);

CREATE INDEX `conversion_userId_idx` ON `conversion` (`user_id`);
CREATE INDEX `conversion_createdAt_idx` ON `conversion` (`created_at`);