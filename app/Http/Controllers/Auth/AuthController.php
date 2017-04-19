<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Lcobucci\JWT\Builder;

class AuthController extends Controller
{
    /**
     * Build the JWT used for authenticating API requests
     *
     * @param Request $request
     * @return \Lcobucci\JWT\Token
     */
    protected function generateToken(Request $request)
    {
        return (new Builder())->setIssuer(config('app.url'))
            ->setAudience(config('app.url'))
            //->setId('4f1g23a12aa', true)
            ->setIssuedAt(time())
            ->setNotBefore(time() + 60)
            ->setExpiration(time() + 3600)
            ->set('uid', 1)
            ->setSubject($request->input('email'))
            ->getToken();
    }
}