<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Data\User;
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

    protected function authenticated(Request $request, User $user)
    {
        $token = $this->generateToken($request);
        $request->session()->put('jwt', $token);

        return response()->json([
            'id' => $user->id,
            'token' => (string) $token,
            'email' => $user->email,
            'display' => $user->display
        ]);
    }

    protected function generateToken(Request $request)
    {
        return (new Builder())->setIssuer(config('app.url'))
            ->setAudience(config('app.url'))
            //->setId('4f1g23a12aa', true)
            ->setIssuedAt(time())
            ->setNotBefore(time() + 60)
            ->setExpiration(time() + 3600)
            ->set('uid', 1)
            ->setSubject($request->input($this->username()))
            ->getToken();
    }
}
