<?php

use Illuminate\Database\Seeder;

class ModuleLengthsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('module_lengths')->insert([
            ['name' => 'Short', 'order' => 1],
            ['name' => 'Moderate', 'order' => 2],
            ['name' => 'Long', 'order' => 3],
            ['name' => 'Epic', 'order' => 4],
        ]);
    }
}
