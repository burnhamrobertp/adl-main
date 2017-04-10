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
        factory(App\Models\Data\ModuleRating::class, 400)->create();
    }
}
