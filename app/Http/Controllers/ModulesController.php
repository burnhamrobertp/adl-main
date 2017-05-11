<?php

namespace App\Http\Controllers;

use App\Models\Data\Module;
use App\Models\Data\ModuleRating;
use App\Models\Data\User;
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
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validateModule($request);

        $module = new Module();
        $module = $this->assignRequestProperties($request, $module);
        $success = $module->save();

        return response()->json([
            'success' => $success
        ]);
    }

    /**
     * Update the specified Module in storage
     *
     * @param  \Illuminate\Http\Request $request
     * @param  Module $module
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Module $module)
    {
        if ($request->rating) {
            $success  = $this->handleRating($module, $request->user(), $request->rating);
        } else {
            $this->validateModule($request);
            $module = $this->assignRequestProperties($request, $module);
            $success = $module->save();
        }

        return response()->json([
            'success' => $success
        ]);
    }

    /**
     * Remove the specified Module from storage
     *
     * @param  Module $module
     * @return \Illuminate\Http\Response
     */
    public function destroy(Module $module)
    {
        $success = $module->delete();

        return response()->json([
            'success' => $success
        ]);
    }

    /**
     * Upserts a moduleRating for the current user
     *
     * @param Module $module
     * @param int $rating
     * @return bool
     */
    protected function handleRating(Module $module, User $user, int $rating)
    {
        // Find an existing rating for this module and user or create a new one
        $moduleRating = $module->ratings()->where('user_id', $user->id)->first() ?: new ModuleRating();

        $moduleRating->module()->associate($module);
        $moduleRating->user()->associate($user);
        $moduleRating->rating = $rating;
        return $moduleRating->save();
    }

    /**
     * Validates provided fields for module model work
     *
     * @param Request $request
     */
    protected function validateModule(Request $request)
    {
        // clean up json creatures/items
        $request->creatures = array_map(function($e) {
            return json_decode($e);
        }, $request->creatures);
        $request->items = array_map(function($e) {
            return json_decode($e);
        }, $request->items);

        $this->validate($request, [
            'name' => 'required|string',
            'edition' => 'required|integer',
            'setting' => 'required|integer',
            'length' => 'required|integer',
            'minLevel' => 'required|integer|between:0,20',
            'maxLevel' => 'required|integer|between:0,20',
            'publisher' => 'required|integer',
            'publishedDate' => '',
            'summary' => 'required|string',
            'description' => 'required|string',
            'items' => 'required|array',
            'creatures' => 'required|array',
        ]);
    }

    /**
     * Makes the assignment of request properties to the provided module instance
     *
     * @param Request $request
     * @param Module $module
     * @return Module
     */
    protected function assignRequestProperties(Request $request, Module $module)
    {
        $module->name = $request->name;
        $module->edition_id = $request->edition;
        $module->setting_id = $request->setting;
        $module->length_id = $request->length;
        $module->min_level = $request->minLevel;
        $module->max_level = $request->maxLevel;
        $module->publisher_id = $request->publisher;
        $module->published_date = $request->publishedDate;
        $module->summary = $request->summary;
        $module->description = $request->description;

        return $module;
    }
}
