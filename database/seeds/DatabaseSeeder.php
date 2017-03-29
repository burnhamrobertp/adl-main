<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(ContributorTypesSeeder::class);
        $this->call(CreatureTypesSeeder::class);
        $this->call(EditionsSeeder::class);
        $this->call(PublishersSeeder::class);
        $this->call(SettingsSeeder::class);
        $this->call(UsersSeeder::class);
        $this->call(ModulesSeeder::class);
    }
}
