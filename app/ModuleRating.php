<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ModuleRating extends Model
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
