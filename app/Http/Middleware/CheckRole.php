<?php

namespace App\Http\Middleware;

use Closure;

class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, string $role)
    {
        if (!$request->user())
            return response()->json(['message' => __('auth.login')], 401);

        if (!$request->user()->hasRole($role)) {
            return response()->json(['message' => __('auth.unauthorized')], 403);
        }

        return $next($request);
    }
}
