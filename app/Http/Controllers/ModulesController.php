<?php

namespace App\Http\Controllers;

use App\Models\Data\Module;
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

        $modules = Module::with('edition', 'publisher', 'setting', 'length', 'avgRating');

        if (isset($f['minLevel'])) {
            $modules->where('min_level', '>=', $f['minLevel']);
        }

        if (isset($f['maxLevel'])) {
            $modules->where('max_level', '<=', $f['maxLevel']);
        }

        if (isset($f['setting'])) {
            $modules->where('setting_id', $f['setting']);
        }

        if (isset($f['editions'])) {
            $modules->whereIn('edition_id', $f['editions']);
        }

        if (isset($f['moduleLengths'])) {
            $modules->whereIn('length_id', $f['moduleLengths']);
        }

        return $modules->get()->sortBy('name')->values()->all();
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
