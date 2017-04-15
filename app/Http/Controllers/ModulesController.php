<?php

namespace App\Http\Controllers;

use App\Models\Data\Module;
use App\Models\ModuleListFilter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;

class ModulesController extends Controller
{
    /**
     * Fetches all Modules
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, ModuleListFilter $moduleListFilter)
    {
        $this->validate($request, $moduleListFilter->rules());

        // Filters array
        $f = Input::all();

        $modules = Module::with('edition', 'publisher', 'setting', 'length', 'avgRating');
        $modules = $moduleListFilter->filter($modules, $f);

        return response()->json(
            $modules->get()->sortBy('name')->values()->all()
        );
    }

    /**
     * Fetches a specific Module by id
     *
     * @param Module $module
     * @return \Illuminate\Http\Response
     */
    public function get(Module $module)
    {
        return $module->with('avgRating', 'contributors', 'creatures', 'edition', 'items', 'length', 'publisher', 'setting')->find($module->id);
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
     * @param  Module  $module
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
     * @param  Module  $module
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
