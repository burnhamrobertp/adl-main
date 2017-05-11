<?php

namespace App\Models\Data;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    public function users()
    {
        return $this->hasMany('App\Models\Data\User');
    }
}
