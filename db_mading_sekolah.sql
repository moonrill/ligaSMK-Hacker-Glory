-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 17 Des 2023 pada 15.48
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_mading_sekolah`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `icon` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `categories`
--

INSERT INTO `categories` (`id`, `name`, `icon`) VALUES
(1, 'Teknologi', 'icons/Teknologi-icon.png');

-- --------------------------------------------------------

--
-- Struktur dari tabel `madings`
--

CREATE TABLE `madings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `author_id` char(36) NOT NULL,
  `accepted_by` char(36) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `thumbnail` varchar(255) NOT NULL,
  `status` enum('pending','accepted','rejected') NOT NULL DEFAULT 'pending',
  `post_schedule` datetime NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `madings_categories`
--

CREATE TABLE `madings_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `mading_id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2023_12_11_030621_create_users_table', 1),
(2, '2023_12_11_041756_create_views_table', 1),
(3, '2023_12_12_141137_create_categories_table', 1),
(4, '2023_12_12_141138_create_madings_table', 1),
(5, '2023_12_12_141139_create_mading_categories_table', 1),
(6, '2023_12_17_135114_create_saved_madings_table', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `saved_madings`
--

CREATE TABLE `saved_madings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `mading_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` char(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` char(36) NOT NULL,
  `username` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('admin','guru','pengurus_osis','pengurus_eskul','member') NOT NULL DEFAULT 'member',
  `profile_picture` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `role`, `profile_picture`, `created_at`, `updated_at`) VALUES
('9adeec72-8e75-4ddf-8502-3ae40246ff91', 'bwilderman', 'mgleichner@example.com', '$2y$12$hmLOoPKUC7j4XQ6/FL7uy.ceyQsvs.zeInHUo7P8IP2.x/pZ0dIr6', 'admin', NULL, '2023-12-17 07:13:23', '2023-12-17 07:13:23'),
('9adeec73-40e6-479d-a970-a20cf1cb37c2', 'jaden.daniel', 'will.federico@example.net', '$2y$12$zDhhPUwySbbojFl1lLgLwucn0xfJ69gIw/n/nlLwBTazAznIrjysy', 'guru', NULL, '2023-12-17 07:13:23', '2023-12-17 07:13:23'),
('9adeec73-4272-4170-bb0b-9d56d1823987', 'felicita.ritchie', 'yvonne.towne@example.com', '$2y$12$GcFc0nLZsRr6vxt34m9.cOHAdXsKKQB8/S.8LkEKOP77EXR.UV362', 'guru', NULL, '2023-12-17 07:13:23', '2023-12-17 07:13:23'),
('9adeec73-4336-45ad-b7ec-02bced0de4ad', 'sandra.klein', 'berniece57@example.org', '$2y$12$X6YaP6x.PXm0qGaeBuCVIeV77WpxLu79YJCanP3FzwEY.NDUUuoLS', 'admin', NULL, '2023-12-17 07:13:23', '2023-12-17 07:13:23'),
('9adeec73-4523-447c-920b-71bc25282161', 'dubuque.luther', 'lorenzo.dicki@example.net', '$2y$12$lFjzFfi10/G4muYzMFI.YeQEq81U8Rj8gq4nZHT61cd83Oi0OdwrG', 'guru', NULL, '2023-12-17 07:13:23', '2023-12-17 07:13:23'),
('9adeec73-463e-42d3-9189-3637bbc88247', 'swilderman', 'deon.dickinson@example.net', '$2y$12$6zj1eiEpTdQXvAlDuBv9Y.CWz104x.Xk0H/tX08R6RIm0hieZkPj.', 'guru', NULL, '2023-12-17 07:13:23', '2023-12-17 07:13:23'),
('9adeec73-470a-400d-8cb9-3ac8acda5c0f', 'devante68', 'nikko83@example.com', '$2y$12$AOtqrQV6RqNQbYjYKkblTexOIK0DJeQz.zuO85iYjzSE7OZTIbgZW', 'member', NULL, '2023-12-17 07:13:23', '2023-12-17 07:13:23'),
('9adeec73-47c1-4e73-9804-5803a7784002', 'ryann60', 'haylee15@example.org', '$2y$12$m4PrXquXJbgs/5PRvQitwe37Z2/ewyV1dxb2tZYx.oY8uIc.ti8R6', 'guru', NULL, '2023-12-17 07:13:23', '2023-12-17 07:13:23'),
('9adeec73-486c-4ae9-9173-8103a0b0c47d', 'cade.boyle', 'delbert46@example.org', '$2y$12$LiPNSl5Ywdqts8JunuNX5u19Qj1315ZfReYUFNu15iLhcC8Dy1dKu', 'guru', NULL, '2023-12-17 07:13:23', '2023-12-17 07:13:23'),
('9adeec73-4919-4da6-ba95-cf0e2f9bc546', 'lconroy', 'gottlieb.tara@example.com', '$2y$12$7s878XMREM9bXmBJikxtw.GeZXtZIGh74anxdl5/cvLwHnzNj8TVq', 'pengurus_eskul', NULL, '2023-12-17 07:13:23', '2023-12-17 07:13:23');

-- --------------------------------------------------------

--
-- Struktur dari tabel `views`
--

CREATE TABLE `views` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `viewable_type` varchar(255) NOT NULL,
  `viewable_id` bigint(20) UNSIGNED NOT NULL,
  `visitor` text DEFAULT NULL,
  `collection` varchar(255) DEFAULT NULL,
  `viewed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `categories_name_unique` (`name`);

--
-- Indeks untuk tabel `madings`
--
ALTER TABLE `madings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `madings_author_id_foreign` (`author_id`),
  ADD KEY `madings_accepted_by_foreign` (`accepted_by`);

--
-- Indeks untuk tabel `madings_categories`
--
ALTER TABLE `madings_categories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `madings_categories_mading_id_foreign` (`mading_id`),
  ADD KEY `madings_categories_category_id_foreign` (`category_id`);

--
-- Indeks untuk tabel `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `saved_madings`
--
ALTER TABLE `saved_madings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `saved_madings_mading_id_foreign` (`mading_id`),
  ADD KEY `saved_madings_user_id_foreign` (`user_id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indeks untuk tabel `views`
--
ALTER TABLE `views`
  ADD PRIMARY KEY (`id`),
  ADD KEY `views_viewable_type_viewable_id_index` (`viewable_type`,`viewable_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `madings`
--
ALTER TABLE `madings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `madings_categories`
--
ALTER TABLE `madings_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `saved_madings`
--
ALTER TABLE `saved_madings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `views`
--
ALTER TABLE `views`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `madings`
--
ALTER TABLE `madings`
  ADD CONSTRAINT `madings_accepted_by_foreign` FOREIGN KEY (`accepted_by`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `madings_author_id_foreign` FOREIGN KEY (`author_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `madings_categories`
--
ALTER TABLE `madings_categories`
  ADD CONSTRAINT `madings_categories_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `madings_categories_mading_id_foreign` FOREIGN KEY (`mading_id`) REFERENCES `madings` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `saved_madings`
--
ALTER TABLE `saved_madings`
  ADD CONSTRAINT `saved_madings_mading_id_foreign` FOREIGN KEY (`mading_id`) REFERENCES `madings` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `saved_madings_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
