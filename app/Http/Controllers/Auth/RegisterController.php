<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Data\User;
use App\Models\Enum\UserRoles;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Jrean\UserVerification\Traits\VerifiesUsers;
use Jrean\UserVerification\Facades\UserVerification;

class RegisterController extends Controller
{
    use RegistersUsers, VerifiesUsers;

    /**
     * Create a new controller instance
     */
    public function __construct()
    {
        $this->middleware('guest', ['except' => ['getVerification', 'getVerificationError']]);
    }

    /**
     * Verifies a user's e-mail address
     *
     * @param Request $request
     * @param string $code
     * @return \Illuminate\Http\Response
     */
    public function verify(Request $request, string $code)
    {
        return $this->getVerification($request, $code);
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
            'role_id' => UserRoles::CONTRIBUTOR,
            'display' => substr($data['email'], 0, strpos($data['email'], '@')),
            'avatar' => md5(strtolower(trim($data['email']))),
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);
    }

    /**
     * Send the user their verification e-mail
     * @param Request $request
     * @param User $user
     * @return \Illuminate\Http\JsonResponse
     */
    protected function registered(Request $request, User $user)
    {
        UserVerification::generate($user);
        UserVerification::send($user, 'AdventureLookup E-mail Verification');

        return response()->json($user);
    }
}
