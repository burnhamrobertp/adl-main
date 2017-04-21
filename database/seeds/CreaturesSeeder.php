<?php

use Illuminate\Database\Seeder;

class CreaturesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $types = \App\Models\Data\CreatureType::all()->keyBy('name');
        DB::table('creatures')->insert([
            ['name' => 'Orc', 'creature_type_id' => $types['Humanoid']['id']],
            ['name' => 'Kobold', 'creature_type_id' => $types['Humanoid']['id']],
            ['name' => 'Goblin', 'creature_type_id' => $types['Humanoid']['id']],
            ['name' => 'Gnoll', 'creature_type_id' => $types['Humanoid']['id']],
            ['name' => 'Hobgoblin', 'creature_type_id' => $types['Humanoid']['id']],
            ['name' => 'Beholder', 'creature_type_id' => $types['Aberration']['id']],
            ['name' => 'Black Pudding', 'creature_type_id' => $types['Ooze']['id']],
            ['name' => 'Mind Flayer', 'creature_type_id' => $types['Aberration']['id']],
            ['name' => 'Drow', 'creature_type_id' => $types['Humanoid']['id']],
            ['name' => 'Wyrmling', 'creature_type_id' => $types['Dragon']['id']],
            ['name' => 'Bulette', 'creature_type_id' => $types['Monstrosity']['id']],
            ['name' => 'Hill Giant', 'creature_type_id' => $types['Giant']['id']],
            ['name' => 'Stone Giant', 'creature_type_id' => $types['Giant']['id']],
            ['name' => 'Frost Giant', 'creature_type_id' => $types['Giant']['id']],
            ['name' => 'Storm Giant', 'creature_type_id' => $types['Giant']['id']],
            ['name' => 'Kuo-Toa', 'creature_type_id' => $types['Humanoid']['id']],
            ['name' => 'Lich', 'creature_type_id' => $types['Undead']['id']],
            ['name' => 'Slaad', 'creature_type_id' => $types['Aberration']['id']],
            ['name' => 'Umber Hulk', 'creature_type_id' => $types['Monstrosity']['id']],
            ['name' => 'Arcanamite', 'creature_type_id' => $types['Monstrosity']['id']],
            ['name' => 'Warhorse', 'creature_type_id' => $types['Beast']['id']],
            ['name' => 'Gazer', 'creature_type_id' => $types['Aberration']['id']],
            ['name' => 'Skin Bat', 'creature_type_id' => $types['Undead']['id']],
            ['name' => 'Deva', 'creature_type_id' => $types['Celestial']['id']],
            ['name' => 'Unicorn', 'creature_type_id' => $types['Celestial']['id']],
            ['name' => 'Pegasus', 'creature_type_id' => $types['Celestial']['id']],
            ['name' => 'Eye Golem', 'creature_type_id' => $types['Construct']['id']],
            ['name' => 'Homunculus', 'creature_type_id' => $types['Construct']['id']],
            ['name' => 'Flesh Golem', 'creature_type_id' => $types['Construct']['id']],
            ['name' => 'Myr', 'creature_type_id' => $types['Construct']['id']],
            ['name' => 'Stone Golem', 'creature_type_id' => $types['Construct']['id']],
            ['name' => 'Azer', 'creature_type_id' => $types['Elemental']['id']],
            ['name' => 'Djinni', 'creature_type_id' => $types['Elemental']['id']],
            ['name' => 'Gargoyl', 'creature_type_id' => $types['Elemental']['id']],
            ['name' => 'Salamander', 'creature_type_id' => $types['Elemental']['id']],
            ['name' => 'Spark', 'creature_type_id' => $types['Elemental']['id']],
            ['name' => 'Water Elemental', 'creature_type_id' => $types['Elemental']['id']],
            ['name' => 'Annis Hag', 'creature_type_id' => $types['Fey']['id']],
            ['name' => 'Boggle', 'creature_type_id' => $types['Fey']['id']],
            ['name' => 'Cactid', 'creature_type_id' => $types['Plant']['id']],
            ['name' => 'Dragonleaf Tree', 'creature_type_id' => $types['Plant']['id']],
            ['name' => 'Myconid', 'creature_type_id' => $types['Plant']['id']],
            ['name' => 'Vegepygmy', 'creature_type_id' => $types['Plant']['id']],
            ['name' => 'Baneling', 'creature_type_id' => $types['Fiend']['id']],
            ['name' => 'Night Hag', 'creature_type_id' => $types['Fiend']['id']],
            ['name' => 'Hell Hound', 'creature_type_id' => $types['Fiend']['id']],
            ['name' => 'Ink Devil', 'creature_type_id' => $types['Fiend']['id']],
            ['name' => 'Rakshasa', 'creature_type_id' => $types['Fiend']['id']],
            ['name' => 'Rakshasa', 'creature_type_id' => $types['Fiend']['id']],
            ['name' => 'Coral Drake', 'creature_type_id' => $types['Dragon']['id']],
            ['name' => 'Ash Drake', 'creature_type_id' => $types['Dragon']['id']],
            ['name' => 'Dragon Turtle', 'creature_type_id' => $types['Dragon']['id']],
            ['name' => 'Luck Dragon', 'creature_type_id' => $types['Dragon']['id']],
            ['name' => 'Pseudodragon', 'creature_type_id' => $types['Dragon']['id']],
            ['name' => 'Star Drake', 'creature_type_id' => $types['Dragon']['id']],
        ]);
        // Uniques
        DB::table('creatures')->insert([
            ['name' => 'River King', 'unique' => true, 'creature_type_id' => $types['Fey']['id']],
            ['name' => 'Sarastra', 'unique' => true, 'creature_type_id' => $types['Fey']['id']],
            ['name' => 'Kalarel', 'unique' => true, 'creature_type_id' => $types['Humanoid']['id']],
            ['name' => 'Balor', 'unique' => true, 'creature_type_id' => $types['Fiend']['id']],
            ['name' => 'Akyishigal', 'unique' => true, 'creature_type_id' => $types['Fiend']['id']],
            ['name' => 'Alquam', 'unique' => true, 'creature_type_id' => $types['Fiend']['id']],
            ['name' => 'Zmey', 'unique' => true, 'creature_type_id' => $types['Dragon']['id']],
        ]);
    }
}
