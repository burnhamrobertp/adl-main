<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateModuleLengthsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('module_lengths', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
        });

        Schema::table('modules', function (Blueprint $table) {
            $table->integer('length_id', false, true)->after('setting_id');
            $table->foreign('length_id')->references('id')->on('module_lengths');
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
            $table->dropForeign(['length_id']);
            $table->dropColumn('length_id');
        });
        Schema::dropIfExists('module_lengths');
    }
}
