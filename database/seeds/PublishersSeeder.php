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
        DB::table('publishers')->insert([
            ['name' => 'TSR'],
            ['name' => 'WotC'],
            ['name' => 'Paizo'],
            ['name' => "Judges' Guild"],
            ['name' => 'KenzerCo'],
            ['name' => 'Other'],
        ]);
    }
}
