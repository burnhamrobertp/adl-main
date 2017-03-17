<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddForeignKeys extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('modules', function (Blueprint $table) {
            $table->foreign('edition_id')->references('id')->on('editions');
            $table->foreign('publisher_id')->references('id')->on('publishers');
        });

        Schema::table('module_ratings', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('module_id')->references('id')->on('modules');
        });

        Schema::table('contributors', function (Blueprint $table) {
            $table->foreign('contributor_type_id')->references('id')->on('contributor_types');
        });

        Schema::table('creatures', function (Blueprint $table) {
            $table->foreign('creature_type_id')->references('id')->on('creature_types');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('modules', function (Blueprint $table) {
            $table->dropForeign(['edition_id']);
            $table->dropForeign(['publisher_id']);
        });
        Schema::table('module_ratings', function (Blueprint $table) {
            $table->dropForeign(['user_id']);
            $table->dropForeign(['module_id']);
        });
        Schema::table('contributors', function (Blueprint $table) {
            $table->dropForeign(['contributor_type_id']);
        });
        Schema::table('creatures', function (Blueprint $table) {
            $table->dropForeign(['creature_type_id']);
        });
    }
}
