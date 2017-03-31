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

    public function length()
    {
        return $this->belongsTo('App\ModuleLength');
    }

    public function ratings()
    {
        return $this->hasMany('App\ModuleRating');
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
