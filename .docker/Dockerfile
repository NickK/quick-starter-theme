FROM php:7.1.8-apache

COPY . /var/www/html
COPY .docker/vhosts.conf /etc/apache2/sites-available/000-default.conf

RUN apt-get update && apt-get install -y nano libmcrypt-dev mysql-client && docker-php-ext-install mysqli mcrypt pdo_mysql
RUN chown -R www-data:www-data /var/www/html/ && a2enmod rewrite
