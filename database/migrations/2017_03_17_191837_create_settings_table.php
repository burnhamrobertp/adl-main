<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('settings', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
        });

        Schema::table('modules', function (Blueprint $table) {
            $table->integer('setting_id', false, true)->after('publisher_id');
            $table->foreign('setting_id')->references('id')->on('settings');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('settings');

        Schema::table('modules', function (Blueprint $table) {
            $table->dropForeign(['setting_id']);
            $table->dropColumn('setting_id');
        });
    }
}
