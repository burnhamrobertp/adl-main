<?php

namespace App\Http\Controllers\Auth;

use App\Models\Data\User;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;

class LoginController extends AuthController
{
    use AuthenticatesUsers {
        logout as performLogout;
    }

    /**
     * Create a new controller instance
     */
    public function __construct()
    {
        $this->middleware('guest', ['except' => 'logout']);
    }

    /**
     * Logout but don't redirect
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout(Request $request) {
        $this->performLogout($request);

        return response()->json(['success' => true]);
    }

    /**
     * After a user is authenticated, generate a json response with a JWT
     *
     * @param Request $request
     * @param User $user
     * @return \Illuminate\Http\JsonResponse
     */
    protected function authenticated(Request $request, User $user)
    {
        $token = $this->generateToken($request);
        $request->session()->put('jwt', $token);

        return response()->json($user);
    }
}
