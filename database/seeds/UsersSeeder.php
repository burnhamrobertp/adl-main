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

        $adminId = \App\Models\Data\Role::where('name', 'Administrator')->get()->first()->id;

        DB::table('users')->insert([
            [
                'role_id' => $adminId,
                'display' => 'Test User',
                'avatar' => md5(strtolower(trim('test@adl.com'))),
                'email' => 'test@adl.com',
                'password' => bcrypt('secret'),
                'remember_token' => str_random(10),
                'verified' => 1
            ]
        ]);
    }
}
