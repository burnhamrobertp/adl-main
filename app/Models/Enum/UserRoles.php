<?php

namespace App\Models\Enum;


use MabeEnum\Enum;

class UserRoles extends Enum
{
    const UNUSED = '';
    const USER = 'User';
    const CONTRIBUTOR = 'Contributor';
    const MODERATOR = 'Moderator';
    const ADMINISTRATOR = 'Administrator';

    public static function all()
    {
        return array_slice(self::getValues(), 1);
    }

}