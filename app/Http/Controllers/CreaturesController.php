<?php

namespace App\Http\Controllers;

use App\Models\Data\Creature;
use App\Models\Data\CreatureType;
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

        return response()->json($sorted->values()->all());
    }

    /**
     * Fetches a specific Creature by id
     *
     * @param Creature $creature
     * @return \Illuminate\Http\Response
     */
    public function get(Creature $creature)
    {
        return response()->json($creature);
    }

    /**
     * Searches for creatures
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function search(Request $request)
    {
        $params = $request->input('params');
        $byName = Creature::where('name', 'LIKE', "%{$params['search']}%")
            ->orderBy('name')->with('creatureType')->get();
        $byType = CreatureType::where('name', '=', "{$params['search']}")
            ->with('creatures')->first();

        $return = $byType ? $byName->merge($byType->creatures) : $byName;
        $return = array_merge($return->sortBy('name')->toArray());

        return response()->json($return);
    }

    /**
     * Store a newly created Creature
     *
     * @param  \Illuminate\Http\Request $request
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
     * @param  \Illuminate\Http\Request $request
     * @param  Creature $creature
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
     * @param  Creature $creature
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
