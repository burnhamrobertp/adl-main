<?php

namespace App\Http\Controllers;

use App\Models\Data\Contributor;
use Illuminate\Http\Request;

class ContributorsController extends Controller
{
    /**
     * Fetches all Contributors
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sorted = Contributor::all()->sortBy('order');

        return $sorted->values()->all();
    }

    /**
     * Fetches a specific Contributor by id
     *
     * @param Contributor $contributor
     * @return \Illuminate\Http\Response
     */
    public function get(Contributor $contributor)
    {
        return $contributor;
    }

    /**
     * Store a newly created Contributor
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $contributor = new Contributor();
        $contributor->name = $request->name;
        $success = $contributor->save();

        return response()->json([
            'success' => $success
        ]);
    }

    /**
     * Update the specified Contributor in storage
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Contributor  $contributor
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Contributor $contributor)
    {
        $contributor->name = $request->name;
        $success = $contributor->save();

        return response()->json([
            'success' => $success
        ]);
    }

    /**
     * Remove the specified Contributor from storage
     *
     * @param  Contributor  $contributor
     * @return \Illuminate\Http\Response
     */
    public function destroy(Contributor $contributor)
    {
        $success = $contributor->delete();

        return response()->json([
            'success' => $success
        ]);
    }
}
