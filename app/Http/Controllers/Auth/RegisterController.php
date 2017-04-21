<?php

namespace App\Http\Controllers\Auth;

use App\Models\Data\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;

class RegisterController extends AuthController
{
    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|min:6|confirmed',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return User
     */
    protected function create(array $data)
    {
        return User::create([
            'display' => substr($data['email'], 0, strpos($data['email'], '@')),
            'avatar' => md5(strtolower(trim($data['email']))),
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);
    }

    protected function registered(Request $request, User $user)
    {
        $token = $this->generateToken($request);
        $request->session()->put('jwt', $token);

        return response()->json($user);
    }
}
