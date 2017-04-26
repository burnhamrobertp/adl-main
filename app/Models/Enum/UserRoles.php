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
}