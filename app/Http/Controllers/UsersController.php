<?php

namespace App\Http\Controllers;

use App\Models\Data\User;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    /**
     * Fetches all Users
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sorted = User::all()->sortBy('order');

        return $sorted->values()->all();
    }

    /**
     * Fetches the specified user
     *
     * @param User $user
     * @return \Illuminate\Http\Response
     */
    public function get(User $user)
    {
        return response()->json($user);
    }

    /**
     * Store a newly created User
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = new User();
        $user->name = $request->name;
        $success = $user->save();

        return response()->json([
            'success' => $success
        ]);
    }

    /**
     * Update the specified User in storage
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        $user->name = $request->name;
        $success = $user->save();

        return response()->json([
            'success' => $success
        ]);
    }

    /**
     * Remove the specified User from storage
     *
     * @param  User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $success = $user->delete();

        return response()->json([
            'success' => $success
        ]);
    }
}
