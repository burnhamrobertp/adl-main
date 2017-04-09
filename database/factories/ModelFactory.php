<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\Models\Data\User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
    ];
});

$factory->define(App\Models\Data\Module::class, function (Faker\Generator $faker) {
    $hasLevels = $faker->boolean();
    $minLevel = $hasLevels ? $faker->numberBetween(1, 7) : null;
    $maxLevel = $hasLevels ? $faker->numberBetween($minLevel, $minLevel+$faker->numberBetween(1, 10)) : null;

    return [
        'edition_id' => function() {
            return App\Models\Data\Edition::all()->random()->id;
        },
        'publisher_id' => function() {
            return App\Models\Data\Publisher::all()->random()->id;
        },
        'setting_id' => function() {
            return App\Models\Data\Setting::all()->random()->id;
        },
        'length_id' => function() {
            return App\Models\Data\ModuleLength::all()->random()->id;
        },
        'name' => $faker->company,
        'min_level' => $minLevel,
        'max_level' => $maxLevel,
        'summary' => $faker->boolean() ? $faker->realText() : null,
        'description' => $faker->boolean() ? $faker->realText(1000) : null,
        'created_at' => $faker->unixTime,
        'updated_at' => $faker->unixTime
    ];
});

$factory->define(App\Models\Data\ModuleRating::class, function (Faker\Generator $faker) {
    return [
        'user_id' => function() {
            return App\Models\Data\User::all()->random()->id;
        },
        'module_id' => function() {
            return App\Models\Data\Module::all()->random()->id;
        },
        'rating' => $faker->biasedNumberBetween(1, 10),
        'created_at' => $faker->unixTime,
        'updated_at' => $faker->unixTime
    ];
});