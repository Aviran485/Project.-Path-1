-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: פברואר 12, 2025 בזמן 04:07 PM
-- גרסת שרת: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `stray_dogs_db`
--

-- --------------------------------------------------------

--
-- מבנה טבלה עבור טבלה `reports`
--

CREATE TABLE `reports` (
  `id` int(11) NOT NULL,
  `location` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `image_url` varchar(500) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- הוצאת מידע עבור טבלה `reports`
--

INSERT INTO `reports` (`id`, `location`, `description`, `image_url`, `created_at`) VALUES
(1, 'Central Park', 'A lost golden retriever near the fountain.', NULL, '2025-02-06 01:42:25'),
(2, 'Downtown Street', 'A small puppy wandering alone.', 'https://example.com/dog2.jpg', '2025-02-06 01:42:25'),
(3, 'Near Bus Station', 'A stray dog looking for food.', 'https://example.com/dog3.jpg', '2025-02-06 01:42:25'),
(4, 'City Park', 'A brown dog sitting near a bench.', 'https://example.com/dog.jpg', '2025-02-06 01:52:20'),
(5, 'Epstein island', 'A pink dog.', 'https://example.com/dogpink.jpg', '2025-02-11 01:18:03');

--
-- Indexes for dumped tables
--

--
-- אינדקסים לטבלה `reports`
--
ALTER TABLE `reports`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `reports`
--
ALTER TABLE `reports`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
