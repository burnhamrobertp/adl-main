<?php

namespace App\Http\Controllers;

use App\Models\Data\ModuleLength;
use Illuminate\Http\Request;

class ModuleLengthsController extends Controller
{
    /**
     * Fetches all ModuleLengths
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ModuleLength::all()->values()->all();
    }

    /**
     * Fetches a specific ModuleLength by id
     *
     * @param ModuleLength $moduleLength
     * @return \Illuminate\Http\Response
     */
    public function get(ModuleLength $moduleLength)
    {
        return $moduleLength;
    }

    /**
     * Store a newly created ModuleLength
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $moduleLength = new ModuleLength();
        $moduleLength->name = $request->name;
        $success = $moduleLength->save();

        return response()->json([
            'success' => $success
        ]);
    }

    /**
     * Update the specified ModuleLength in storage
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  ModuleLength  $moduleLength
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ModuleLength $moduleLength)
    {
        $moduleLength->name = $request->name;
        $success = $moduleLength->save();

        return response()->json([
            'success' => $success
        ]);
    }

    /**
     * Remove the specified ModuleLength from storage
     *
     * @param  ModuleLength  $moduleLength
     * @return \Illuminate\Http\Response
     */
    public function destroy(ModuleLength $moduleLength)
    {
        $success = $moduleLength->delete();

        return response()->json([
            'success' => $success
        ]);
    }
}
