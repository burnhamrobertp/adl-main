<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateItemModuleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('item_module', function (Blueprint $table) {
            $table->integer('item_id', false, true);
            $table->integer('module_id', false, true);
            $table->smallInteger('order')->default(0);

            $table->foreign('item_id')->references('id')->on('items');
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
        Schema::dropifExists('item_module');
    }
}
