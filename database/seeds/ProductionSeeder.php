<?php

use Illuminate\Database\Seeder;

class ProductionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(RolesSeeder::class);
        $this->call(ContributorTypesSeeder::class);
        $this->call(CreatureTypesSeeder::class);
        $this->call(CreaturesSeeder::class);
        $this->call(ItemsSeeder::class);
        $this->call(ModuleLengthsSeeder::class);
        $this->call(EditionsSeeder::class);
        $this->call(PublishersSeeder::class);
        $this->call(SettingsSeeder::class);
    }
}
