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
        factory(App\User::class, 10)->create();

        DB::table('users')->insert([
            ['name' => 'Test User', 'email' => 'test@adl.com', 'password' => bcrypt('secret'), 'remember_token' => str_random(10)]
        ]);
    }
}
