<?php

namespace App\Models\Data;

use Illuminate\Database\Eloquent\Model;

class ModuleRating extends Model
{
    public function user()
    {
        return $this->belongsTo('App\Models\Data\User');
    }

    public function module()
    {
        return $this->belongsTo('App\Models\Data\Module');
    }
}
