<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CreatureType extends Model
{
    public $timestamps = false;

    public function creatures()
    {
        return $this->hasMany('App\Creature');
    }
}
