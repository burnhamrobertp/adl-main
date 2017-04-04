<?php

namespace App\Http\Controllers;

use App\Models\Data\Creature;
use Illuminate\Http\Request;

class CreaturesController extends Controller
{
    /**
     * Fetches all Creatures
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sorted = Creature::all()->sortBy('order');

        return $sorted->values()->all();
    }

    /**
     * Fetches a specific Creature by id
     *
     * @param \App\Creature $creature
     * @return \Illuminate\Http\Response
     */
    public function get(Creature $creature)
    {
        return $creature;
    }

    /**
     * Store a newly created Creature
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $creature = new Creature();
        $creature->name = $request->name;
        $success = $creature->save();

        return response()->json([
            'success' => $success
        ]);
    }

    /**
     * Update the specified Creature in storage
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Creature  $creature
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Creature $creature)
    {
        $creature->name = $request->name;
        $success = $creature->save();

        return response()->json([
            'success' => $success
        ]);
    }

    /**
     * Remove the specified Creature from storage
     *
     * @param  \App\Creature  $creature
     * @return \Illuminate\Http\Response
     */
    public function destroy(Creature $creature)
    {
        $success = $creature->delete();

        return response()->json([
            'success' => $success
        ]);
    }
}
