<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCreatureModuleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('creature_module', function (Blueprint $table) {
            $table->integer('creature_id', false, true);
            $table->integer('module_id', false, true);
            $table->smallInteger('order')->default(0);

            $table->foreign('creature_id')->references('id')->on('creatures');
            $table->foreign('module_id')->references('id')->on('modules');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropifExists('creature_module');
    }
}
