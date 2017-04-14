<?php

use Illuminate\Database\Seeder;

class ModulesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();

        factory(App\Models\Data\Module::class, 40)
            ->create()
            ->each(function ($m) use ($faker) {
                if ($faker->boolean(75)) {
                    $contributors = \App\Models\Data\Contributor::all()
                        ->pluck('id')
                        ->random($faker->numberBetween(1, 10))
                        ->toArray();
                    $m->contributors()->attach($contributors);
                }

                if ($faker->boolean(75)) {
                    $creatures = \App\Models\Data\Creature::all()
                        ->pluck('id')
                        ->random($faker->numberBetween(1, 10))
                        ->toArray();
                    $m->creatures()->attach($creatures);
                }

                if ($faker->boolean(75)) {
                    $items = \App\Models\Data\Item::all()
                        ->pluck('id')
                        ->random($faker->numberBetween(1, 10))
                        ->toArray();
                    $m->items()->attach($items);
                }
            });
    }
}
