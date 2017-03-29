<?php

use Illuminate\Database\Seeder;

class PublishersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        DB::table('publishers')->insert([
            ['name' => 'TSR', 'created_at' => $faker->dateTime, 'updated_at' => $faker->dateTime],
            ['name' => 'WotC', 'created_at' => $faker->dateTime, 'updated_at' => $faker->dateTime],
            ['name' => 'Paizo', 'created_at' => $faker->dateTime, 'updated_at' => $faker->dateTime],
            ['name' => "Judges' Guild", 'created_at' => $faker->dateTime, 'updated_at' => $faker->dateTime],
            ['name' => 'KenzerCo', 'created_at' => $faker->dateTime, 'updated_at' => $faker->dateTime],
            ['name' => 'Other', 'created_at' => $faker->dateTime, 'updated_at' => $faker->dateTime],
        ]);
    }
}
