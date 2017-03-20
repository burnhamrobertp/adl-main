<?php

use Illuminate\Database\Seeder;

class EditionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('editions')->insert([
            ['name' => '1e', 'order' => 1],
            ['name' => 'AD&D', 'order' => 2],
            ['name' => '3e', 'order' => 3],
            ['name' => '3.5e', 'order' => 4],
            ['name' => '4e', 'order' => 5],
            ['name' => '5e', 'order' => 6],
        ]);
    }
}
