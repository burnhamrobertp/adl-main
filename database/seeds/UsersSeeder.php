<?php

use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Models\Data\User::class, 10)->create();

        DB::table('users')->insert([
            ['display' => 'Test User', 'email' => 'test@adl.com', 'password' => bcrypt('secret'), 'remember_token' => str_random(10)]
        ]);
    }
}
