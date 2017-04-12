<?php

namespace App\Models\Data;

use Illuminate\Database\Eloquent\Model;

class Module extends Model
{
    public function contributors()
    {
        return $this->belongsToMany('App\Models\Data\Contributor');
    }

    public function edition()
    {
        return $this->belongsTo('App\Models\Data\Edition');
    }

    public function length()
    {
        return $this->belongsTo('App\Models\Data\ModuleLength');
    }

    public function publisher()
    {
        return $this->belongsTo('App\Models\Data\Publisher');
    }

    public function setting()
    {
        return $this->belongsTo('App\Models\Data\Setting');
    }

    public function ratings()
    {
        return $this->hasMany('App\Models\Data\ModuleRating');
    }

    /**
     * Average ModuleRatings as aggregate
     *
     * @return mixed
     */
    public function avgRating()
    {
        return $this->ratings()
            ->selectRaw('avg(rating) as aggregate, module_id')
            ->groupBy('module_id');
    }

    /**
     * Fetches the avgRating attribute directly
     *
     * @return int|null
     */
    public function getAvgRatingAttribute()
    {
        if ( ! array_key_exists('avgRating', $this->relations)) {
            $this->load('avgRating');
        }

        $relation = $this->getRelation('avgRating')->first();

        return ($relation) ? $relation->aggregate : null;
    }
}
