ALTER TABLE `mapping` ADD `parent` VARCHAR(255) NULL DEFAULT NULL AFTER `channel_id`, ADD `attributes` MEDIUMTEXT NULL DEFAULT NULL AFTER `parent`;
