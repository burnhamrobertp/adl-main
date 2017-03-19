<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contributors extends Model
{
    public function type()
    {
        return $this->belongsTo('App\ContributorTypes');
    }
}
