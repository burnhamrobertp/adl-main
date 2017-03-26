<?php

use Illuminate\Database\Seeder;

class CreatureTypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('creature_types')->insert([
            // 3e 3.5e
            [ 'name' => 'Aberration' ],
            [ 'name' => 'Animal' ],
            [ 'name' => 'Beast' ],
            [ 'name' => 'Construct' ],
            [ 'name' => 'Deathless' ],
            [ 'name' => 'Dragon' ],
            [ 'name' => 'Elemental' ],
            [ 'name' => 'Fey' ],
            [ 'name' => 'Giant' ],
            [ 'name' => 'Humanoid' ],
            [ 'name' => 'Magical Beast' ],
            [ 'name' => 'Monstrous humanoid' ],
            [ 'name' => 'Ooze' ],
            [ 'name' => 'Outsider' ],
            [ 'name' => 'Planetouched' ],
            [ 'name' => 'Plant' ],
            [ 'name' => 'Shapechanger' ],
            [ 'name' => 'Undead' ],
            [ 'name' => 'Vermin' ],
            // 4e
            [ 'name' => 'Animate' ],
            // 5e
            [ 'name' => 'Celestial' ],
            [ 'name' => 'Monstrosity' ],
        ]);
    }
}
