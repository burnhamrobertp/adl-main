<?php

namespace App\Models\Data;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    public function modules()
    {
        return $this->belongsToMany('App\Models\Data\Module');
    }
}
