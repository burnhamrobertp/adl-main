<?php

use Illuminate\Database\Seeder;
use App\Models\Enum\UserRoles;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = [];
        foreach(UserRoles::getEnumerators() as $role) {
            $roles[] = ['id' => $role->getOrdinal(), 'name' => $role->getValue()];
        }

        DB::table('roles')->insert($roles);
    }
}
