<?php

namespace App\Http\Controllers;

use App\Models\Data\User;
use Illuminate\Http\Request;
use Jrean\UserVerification\UserVerification;

class ProfileController extends Controller
{
    /**
     * Fetch the authenticated user's user information
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        $user = null;
        if ($request->user())
            $user = $request->user()->with('ratings', 'role')->find($request->user()->id);

        return response()->json($user);
    }

    public function update(Request $request, User $user)
    {

    }

    public function sendVerificationEmail(Request $request)
    {
        UserVerification::generate($request->user());
        UserVerification::send($request->user(), 'AdventureLookup E-mail Verification');
    }
}
