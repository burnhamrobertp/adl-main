<?php

namespace App\Models\Data;

use App\Models\Enum\UserRoles;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    protected $fillable = [
        'display', 'avatar', 'email', 'password',
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    public function role()
    {
        return $this->belongsTo('App\Models\Data\Role');
    }

    public function ratings()
    {
        return $this->hasMany('App\Models\Data\ModuleRating');
    }

    public function hasRole(string $role)
    {
        $userRole = $this->role()->first();

        $hasRole = false;
        switch($role) {
            case 'User':
                $hasRole = $hasRole || $userRole->name === UserRoles::USER;
            case 'Contributor':
                $hasRole = $hasRole || $userRole->name === UserRoles::CONTRIBUTOR;
            case 'Moderator':
                $hasRole = $hasRole || $userRole->name === UserRoles::MODERATOR;
            case 'Administrator':
                $hasRole = $hasRole || $userRole->name === UserRoles::ADMINISTRATOR;
                break;
            default:
                throw new \Exception('');
        }

        return $hasRole;
    }
}
