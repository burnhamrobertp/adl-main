<?php

namespace App\Models\Data;

use App\Models\Enum\UserRoles;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    protected $fillable = [
        'role_id', 'display', 'avatar', 'email', 'password',
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

    /**
     * Checks that the user has a specified role
     *
     * Used primarily (exclusively?) in the CheckRole middleware
     *
     * @param string $role
     * @return bool
     * @throws \Exception
     */
    public function hasRole(string $role)
    {
        $userRole = $this->role()->first();

        $hasRole = false;
        switch (strtolower($role)) {
            case 'user':
                $hasRole = $hasRole || $userRole->name === UserRoles::USER;
            case 'contributor':
                $hasRole = $hasRole || $userRole->name === UserRoles::CONTRIBUTOR;
            case 'moderator':
                $hasRole = $hasRole || $userRole->name === UserRoles::MODERATOR;
            case 'administrator':
                $hasRole = $hasRole || $userRole->name === UserRoles::ADMINISTRATOR;
                break;
            default:
                throw new \Exception(
                    __('role.invalid', [
                        'role' => $role,
                        'valid_roles' => implode(', ', UserRoles::all())
                    ])
                );
        }

        return $hasRole;
    }
}
