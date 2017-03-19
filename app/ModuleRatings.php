<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ModuleRatings extends Model
{
    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function module()
    {
        return $this->belongsTo('App\Module');
    }
}
