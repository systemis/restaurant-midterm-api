SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Create table `products`.
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `content` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `pices` text COLLATE utf8_unicode_ci DEFAULT NULL, 
  `price` float DEFAULT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Fake data for `products` table.
--

INSERT INTO `products` (`id`, `name`, `content`, `pices`, `price`, `image`, `created_at`, `updated_at`) VALUES
(1, 'Cơm siếu mại', 'Bánh mỳ kẹp thịt heo Việt Nam', '[]', 69000, 'http://at06.chonweb.vn/wp-content/uploads/2019/08/VietnameseMeatballsXiuMaiandBanhMi-1-1.jpeg', '2016-10-26 03:00:16', '2021-07-02 04:21:18');

