<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contributor extends Model
{
    public function type()
    {
        return $this->belongsTo('App\ContributorType');
    }
}
