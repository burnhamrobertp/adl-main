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

    public function role()
    {
        return $this->belongsTo('App\Models\Data\Role');
    }

    public function ratings()
    {
        return $this->hasMany('App\Models\Data\ModuleRating');
    }
}
