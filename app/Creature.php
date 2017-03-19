<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Creature extends Model
{
    public function type()
    {
        return $this->belongsTo('App\CreatureType');
    }
}
