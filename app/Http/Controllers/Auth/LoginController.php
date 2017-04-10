<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Lcobucci\JWT\Builder;

class LoginController extends Controller
{
    use AuthenticatesUsers;

    /**
     * Create a new controller instance
     */
    public function __construct()
    {
        $this->middleware('guest', ['except' => 'logout']);
    }

    protected function validateLogin(Request $request)
    {
        $this->validate($request, [
            $this->username() => 'required', 'password' => 'required',
        ]);
    }

    /**
     * Attempts login, returns token(s) if successful
     *
     * @param Request $request
     */
    public function login(Request $request)
    {
        $this->validateLogin($request);

        $success = $this->attemptLogin($request);

        if ($success) {
            $token = $this->generateToken($request);
        } else {

        }
    }

    protected function generateToken(Request $request)
    {
    }
}
