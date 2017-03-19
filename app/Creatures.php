<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Creatures extends Model
{
    public function type()
    {
        return $this->belongsTo('App\CreatureTypes');
    }//
}
