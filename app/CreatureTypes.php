<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CreatureTypes extends Model
{
    public function creatures()
    {
        return $this->hasMany('App\Creatures');
    }
}
