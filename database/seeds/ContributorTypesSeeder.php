<?php

use Illuminate\Database\Seeder;

class ContributorTypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('contributor_types')->insert([
            [ 'name' => 'Author', 'default_order' => 1 ],
            [ 'name' => 'Illustrator', 'default_order' => 2 ],
        ]);
    }
}
