<?php

namespace App\Models\Data;

use Illuminate\Database\Eloquent\Model;

class Creature extends Model
{
    public function creatureType()
    {
        return $this->belongsTo('App\Models\Data\CreatureType');
    }

    public function modules()
    {
        return $this->belongsToMany('App\Models\Data\Module');
    }
}
