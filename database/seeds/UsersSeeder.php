<?php

use Illuminate\Database\Seeder;
use App\Models\Enum\UserRoles;

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
            [
                'role_id' => UserRoles::ADMINISTRATOR()->getOrdinal(),
                'display' => 'Test Administrator',
                'avatar' => md5(strtolower(trim('administrator@adl.com'))),
                'email' => 'administrator@adl.com',
                'password' => bcrypt('secret'),
                'remember_token' => '',
                'verified' => 1
            ],
            [
                'role_id' => UserRoles::MODERATOR()->getOrdinal(),
                'display' => 'Test Moderator',
                'avatar' => md5(strtolower(trim('moderator@adl.com'))),
                'email' => 'moderator@adl.com',
                'password' => bcrypt('secret'),
                'remember_token' => '',
                'verified' => 1
            ],
            [
                'role_id' => UserRoles::CONTRIBUTOR()->getOrdinal(),
                'display' => 'Test Contributor',
                'avatar' => md5(strtolower(trim('contributor@adl.com'))),
                'email' => 'contributor@adl.com',
                'password' => bcrypt('secret'),
                'remember_token' => '',
                'verified' => 1
            ],
            [
                'role_id' => UserRoles::USER()->getOrdinal(),
                'display' => 'Test User',
                'avatar' => md5(strtolower(trim('user@adl.com'))),
                'email' => 'user@adl.com',
                'password' => bcrypt('secret'),
                'remember_token' => '',
                'verified' => 1
            ],
        ]);
    }
}
