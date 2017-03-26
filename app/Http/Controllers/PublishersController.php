<?php

namespace App\Http\Controllers;

use App\Publisher;
use Illuminate\Http\Request;

class PublishersController extends Controller
{
    /**
     * Fetches all publishers
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sorted = Publisher::all()->sortBy('name');

        return $sorted->values()->all();
    }

    /**
     * Fetches a specific publisher by id
     *
     * @param Publisher $publisher
     * @return \Illuminate\Http\Response
     */
    public function get(Publisher $publisher)
    {
        return $publisher;
    }

    /**
     * Store a newly created publisher in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $publisher = new Publisher();
        $publisher->name = $request->name;
        $success = $publisher->save();

        return response()->json([
            'success' => $success
        ]);
    }

    /**
     * Update the specified publisher in storage
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Publisher  $publisher
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Publisher $publisher)
    {
        $publisher->name = $request->name;
        $success = $publisher->save();

        return response()->json([
            'success' => $success
        ]);
    }

    /**
     * Remove the specified publisher from storage
     *
     * @param  \App\Publisher  $publisher
     * @return \Illuminate\Http\Response
     */
    public function destroy(Publisher $publisher)
    {
        $success = $publisher->delete();

        return response()->json([
            'success' => $success
        ]);
    }
}
