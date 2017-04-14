<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ChangeCreatureImportanceToUnique extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('creatures', function (Blueprint $table) {
            $table->dropColumn('importance');
            $table->boolean('unique')->default(false)->after('name');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('creatures', function (Blueprint $table) {
            $table->dropColumn('unique');
            $table->integer('importance')->after('name');
        });
    }
}
