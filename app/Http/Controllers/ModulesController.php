<?php

namespace App\Http\Controllers;

use App\Module;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;

class ModulesController extends Controller
{
    /**
     * Fetches all Modules
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Filters array
        $f = Input::all();

        $sorted = Module::with('edition', 'publisher', 'setting', 'length', 'avgRating');

        if (isset($f['min_level'])) {
            $sorted->where('min_level', '>=', $f['min_level']);
        }

        if (isset($f['max_level'])) {
            $sorted->where('max_level', '<=', $f['max_level']);
        }

        if (isset($f['editions'])) {
            $sorted->whereIn('edition_id', $f['editions']);
        }

        if (isset($f['module_lengths'])) {
            $sorted->whereIn('length_id', $f['module_lengths']);
        }

        return $sorted->get()->sortBy('order')->values()->all();
    }

    /**
     * Fetches a specific Module by id
     *
     * @param \App\Module $module
     * @return \Illuminate\Http\Response
     */
    public function get(Module $module)
    {
        return $module->with('edition', 'publisher', 'setting', 'length', 'avgRating')->find($module->id);
    }

    /**
     * Store a newly created Module
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $module = new Module();
        $module->name = $request->name;
        $success = $module->save();

        return response()->json([
            'success' => $success
        ]);
    }

    /**
     * Update the specified Module in storage
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Module  $module
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Module $module)
    {
        $module->name = $request->name;
        $success = $module->save();

        return response()->json([
            'success' => $success
        ]);
    }

    /**
     * Remove the specified Module from storage
     *
     * @param  \App\Module  $module
     * @return \Illuminate\Http\Response
     */
    public function destroy(Module $module)
    {
        $success = $module->delete();

        return response()->json([
            'success' => $success
        ]);
    }
}
