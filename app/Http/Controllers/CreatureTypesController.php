<?php

namespace App\Http\Controllers;

use App\Models\Data\CreatureType;
use Illuminate\Http\Request;

class CreatureTypesController extends Controller
{
    /**
     * Fetches all CreatureTypes
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sorted = CreatureType::all()->sortBy('order');

        return $sorted->values()->all();
    }

    /**
     * Fetches a specific CreatureType by id
     *
     * @param CreatureType $creatureType
     * @return \Illuminate\Http\Response
     */
    public function get(CreatureType $creatureType)
    {
        return $creatureType;
    }

    /**
     * Store a newly created CreatureType
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $creatureType = new CreatureType();
        $creatureType->name = $request->name;
        $success = $creatureType->save();

        return response()->json([
            'success' => $success
        ]);
    }

    /**
     * Update the specified CreatureType in storage
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  CreatureType  $creatureType
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CreatureType $creatureType)
    {
        $creatureType->name = $request->name;
        $success = $creatureType->save();

        return response()->json([
            'success' => $success
        ]);
    }

    /**
     * Remove the specified CreatureType from storage
     *
     * @param  CreatureType  $creatureType
     * @return \Illuminate\Http\Response
     */
    public function destroy(CreatureType $creatureType)
    {
        $success = $creatureType->delete();

        return response()->json([
            'success' => $success
        ]);
    }
}
