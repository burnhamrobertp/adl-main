<?php

use Illuminate\Database\Seeder;

class ItemsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('items')->insert([
            ['name' => 'Pole (10ft)'],
            ['name' => 'Deck of Many Things'],
            ['name' => 'Driftglobe'],
            ['name' => 'Immovable Rod'],
            ['name' => 'Machine of Lum the Mad'],
            ['name' => 'Rod of Lordly Might'],
            ['name' => 'Belt of Giant Strength'],
            ['name' => 'Bag of Devouring'],
            ['name' => 'Amulet of Inescapable Location'],
            ['name' => 'Bag of Holding'],
            ['name' => 'Darkskull'],
            ['name' => 'Cubic Gate'],
            ['name' => 'The Orbs of Dragonkind'],
            ['name' => 'The Moaning Diamond'],
            ['name' => 'The Saint’s Mace'],
            ['name' => 'The Shadowstaff'],
            ['name' => 'The Shield of the Sun'],
            ['name' => 'Sphere of Annihilation'],
            ['name' => 'Philosopher’s Stone'],
            ['name' => 'Scarab of Death'],
            ['name' => 'Necklace of Strangulation'],
            ['name' => 'Gauntlet of Rust'],
            ['name' => 'Portable Hole'],
            ['name' => 'Sustaining Spoon'],
            ['name' => 'Well of Many Worlds'],
            ['name' => 'Frost Brand'],
            ['name' => 'Holy Avenger'],
            ['name' => 'Shifter’s Sorrow'],
            ['name' => 'Shatterspike'],
            ['name' => 'Oathbow'],
            ['name' => 'Banded Mail of Luck'],
            ['name' => 'Breastplate of Command'],
            ['name' => 'Plate Armor of the Deep'],
            ['name' => 'Darkwood Buckler'],
            ['name' => 'Lion’s Shield'],
            ['name' => 'Spined Shield'],
            ['name' => 'Robe of Powerlessness'],
            ['name' => 'Incense of Obsession'],
            ['name' => 'Helm of Opposite Alignment'],
        ]);
    }
}
