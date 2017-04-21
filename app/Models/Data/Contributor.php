<?php

namespace App\Models\Data;

use Illuminate\Database\Eloquent\Model;

class Contributor extends Model
{
    public function type()
    {
        return $this->belongsTo('App\Models\Data\ContributorType');
    }

    public function modules()
    {
        return $this->belongsToMany('App\Models\Data\Module');
    }
}
