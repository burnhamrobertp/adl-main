<?php

namespace App\Http\Controllers;

use App\ContributorType;
use Illuminate\Http\Request;

class ContributorTypesController extends Controller
{
    /**
     * Fetches all ContributorTypes
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sorted = ContributorType::all()->sortBy('order');

        return $sorted->values()->all();
    }

    /**
     * Fetches a specific ContributorType by id
     *
     * @param \App\ContributorType $contributorType
     * @return \Illuminate\Http\Response
     */
    public function get(ContributorType $contributorType)
    {
        return $contributorType;
    }

    /**
     * Store a newly created ContributorType
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $contributorType = new ContributorType();
        $contributorType->name = $request->name;
        $success = $contributorType->save();

        return response()->json([
            'success' => $success
        ]);
    }

    /**
     * Update the specified ContributorType in storage
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ContributorType  $contributorType
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ContributorType $contributorType)
    {
        $contributorType->name = $request->name;
        $success = $contributorType->save();

        return response()->json([
            'success' => $success
        ]);
    }

    /**
     * Remove the specified ContributorType from storage
     *
     * @param  \App\ContributorType  $contributorType
     * @return \Illuminate\Http\Response
     */
    public function destroy(ContributorType $contributorType)
    {
        $success = $contributorType->delete();

        return response()->json([
            'success' => $success
        ]);
    }
}
