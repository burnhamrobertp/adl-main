<?php

namespace App\Http\Controllers;

use App\Models\Data\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(Request $request)
    {
        return response()->json($request->user());
    }

    public function sendVerificationEmail(User $user)
    {
        UserVerification::generate($user);
        UserVerification::send($user, 'AdventureLookup E-mail Verification');
    }
}
