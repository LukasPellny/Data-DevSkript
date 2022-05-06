CREATE TABLE `Name` (
  `name_id` int(11) NOT NULL,
  `database_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `user_name` (`user_name`);

ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

INSERT INTO `users` (`user_id`, `user_name`) VALUES
  (1, 'name'),
  (2, 'name'),
  (3, 'name');