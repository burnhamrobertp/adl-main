<?php

use Illuminate\Database\Seeder;

class SettingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('settings')->insert([
            ['name' => 'Birthright'],
            ['name' => 'Dark Sun'],
            ['name' => 'Dragonlance'],
            ['name' => 'Eberron'],
            ['name' => 'Forgotten Realms'],
            ['name' => 'Al-qadim'],
            ['name' => 'Kara-tur'],
            ['name' => 'Greyhawk'],
            ['name' => 'Kingdoms of Kalamar'],
            ['name' => 'Lankhmar'],
            ['name' => 'Mystara'],
            ['name' => 'Nentir Vale'],
            ['name' => 'Planescape'],
            ['name' => 'Ravenloft'],
            ['name' => 'Rokugan/Oriental Adventures'],
            ['name' => 'Spelljammer'],
            ['name' => 'Wilderlands of High Fantasy'],
        ]);
    }
}
