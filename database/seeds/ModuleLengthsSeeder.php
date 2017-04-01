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
            ['name' => 'Short'],
            ['name' => 'Moderate'],
            ['name' => 'Long'],
            ['name' => 'Epic'],
        ]);
    }
}
