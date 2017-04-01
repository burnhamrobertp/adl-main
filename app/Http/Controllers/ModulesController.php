<?php

namespace App\Http\Controllers;

use App\Module;
use Illuminate\Http\Request;

class ModulesController extends Controller
{
    /**
     * Fetches all Modules
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sorted = Module::with('edition', 'publisher', 'setting', 'length')->get()->sortBy('order');

        return $sorted->values()->all();
    }

    /**
     * Fetches a specific Module by id
     *
     * @param \App\Module $module
     * @return \Illuminate\Http\Response
     */
    public function get(Module $module)
    {
        return $module;
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
