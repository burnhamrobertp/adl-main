<?php

namespace App\Models\Data;

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

    protected $appends = ['token'];

    public function ratings()
    {
        return $this->hasMany('App\Models\Data\ModuleRating');
    }

    /**
     * Fetches the JWT for an authenticated user
     *
     * @return string
     */
    public function getTokenAttribute(): string
    {
        return session('jwt');
    }
}
