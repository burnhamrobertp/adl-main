<?php

namespace App\Providers;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\ServiceProvider;

/**
 * Hooks into the db infrastructure and logs queries.
 *
 * @since 5/27/17
 **/
class QueryLogServiceProvider extends ServiceProvider
{
    public function boot()
    {
        DB::listen(function($query) {
            \Log::debug($query->sql);
            if (!empty($query->bindings))
            {
                \Log::debug('Bound values: ' . implode(', ', $query->bindings));
            }
        });
    }

    public function register()
    {

    }
}