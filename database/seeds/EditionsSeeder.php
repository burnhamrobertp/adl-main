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
            ['name' => '1e'],
            ['name' => 'AD&D'],
            ['name' => '3e'],
            ['name' => '3.5e'],
            ['name' => '4e'],
            ['name' => '5e'],
        ]);
    }
}
