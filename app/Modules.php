<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Modules extends Model
{
    public function edition()
    {
        return $this->belongsTo('App\Editions');
    }

    public function publisher()
    {
        return $this->belongsTo('App\Publishers');
    }

    public function setting()
    {
        return $this->belongsTo('App\Settings');
    }

    public function ratings()
    {
        return $this->hasMany('App\ModuleRatings');
    }
}
