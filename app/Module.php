<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Module extends Model
{
    public function edition()
    {
        return $this->belongsTo('App\Edition');
    }

    public function publisher()
    {
        return $this->belongsTo('App\Publisher');
    }

    public function setting()
    {
        return $this->belongsTo('App\Setting');
    }

    public function ratings()
    {
        return $this->hasMany('App\ModuleRating');
    }
}
