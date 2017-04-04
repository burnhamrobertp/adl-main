<?php

namespace App\Models\Data;

use Illuminate\Database\Eloquent\Model;

class CreatureType extends Model
{
    public $timestamps = false;

    public function creatures()
    {
        return $this->hasMany('App\Models\Data\Creature');
    }
}
