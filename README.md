# Adventure Lookup
Adventure Lookup's new main repository.  The entire site will live here.

## Style Guide
#### PHP
Style should generally conform to PSR-1 and PSR-2 standards.
#### Javascript / React
Follow the AirBNB React style guide, found [here](https://github.com/airbnb/javascript/tree/master/react).

## Setup Development Environment

To conveniently setup a local development system, you can either use the artisan php server (and a local mysql 
instance) or - preferably - laravel homestead. Refer to laravel documentation on getting homestead working on 
your local system. 
 
After you've configured homestead and you have the application running in a local VM, copy .env.example to 
.env. Add a local hosts entry for `vagrant.adventurelookup.com` and point it towards the ip address in the 
homestead.yaml.
 
You'll also most likely want to install composer and php on your local system so that you can conveniently
run composer and artisan commands (like to run migrations or seed the application for testing).

### Front End Dependencies

Use yarn to install front end dependencies, instead of npm. Use webpack for building.

### Migrations

Migrations are accomplished through Laravel migrations. Use `php artisan migrate` to create the base table
structure. Use `php artisan migrate --seed` to run both migrations and seeding simultaneously. Refer to
laravel documentation or the artisan CLI help for more migration help.

### Seeding

Seeding is accomplished through Laravel seeders. Use `php artisan seed` to seed the database.
