<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Data\Edition;
use Illuminate\Http\Request;

class EditionsController extends Controller
{
    /**
     * Fetches all editions
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sorted = Edition::all()->sortBy('order');

        return $sorted->values()->all();
    }

    /**
     * Fetches a specific edition by id
     *
     * @param Edition $edition
     * @return \Illuminate\Http\Response
     */
    public function get(Edition $edition)
    {
        return $edition;
    }

    /**
     * Store a newly created edition
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $edition = new Edition();
        $edition->name = $request->name;
        $success = $edition->save();

        return response()->json([
            'success' => $success
        ]);
    }

    /**
     * Update the specified edition in storage
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Edition  $edition
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Edition $edition)
    {
        $edition->name = $request->name;
        $success = $edition->save();

        return response()->json([
            'success' => $success
        ]);
    }

    /**
     * Remove the specified edition from storage
     *
     * @param  Edition  $edition
     * @return \Illuminate\Http\Response
     */
    public function destroy(Edition $edition)
    {
        $success = $edition->delete();

        return response()->json([
            'success' => $success
        ]);
    }
}
