<?php

namespace App\Providers;

use App\Models\Data\Contributor;
use App\Models\Data\ContributorType;
use App\Models\Data\Creature;
use App\Models\Data\CreatureType;
use App\Models\Data\Edition;
use App\Models\Data\Item;
use App\Models\Data\Module;
use App\Models\Data\ModuleLength;
use App\Models\Data\Publisher;
use App\Models\Data\Setting;
use App\Policies\RolePolicy;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        Contributor::class => RolePolicy::class,
        ContributorType::class => RolePolicy::class,
        Creature::class => RolePolicy::class,
        CreatureType::class => RolePolicy::class,
        Edition::class => RolePolicy::class,
        Item::class => RolePolicy::class,
        Module::class => RolePolicy::class,
        ModuleLength::class => RolePolicy::class,
        Publisher::class => RolePolicy::class,
        Setting::class => RolePolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        //
    }
}
