<?php

use Illuminate\Database\Seeder;

class ModuleRatingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\ModuleRating::class, 400)->create();
    }
}
