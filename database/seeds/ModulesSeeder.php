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
        factory(App\Models\Data\Module::class, 40)
            ->create()
            ->each(function ($m) {
                $numContributors = random_int(0, 4);
                for ($i=0; $i<$numContributors; $i++) {
                    $c = \App\Models\Data\Contributor::all()->random();

                    $m->contributors()->attach($c, ['order' => random_int(1, 5)]);
                }
            });
    }
}
