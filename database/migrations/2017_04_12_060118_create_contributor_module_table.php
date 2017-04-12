<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContributorModuleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contributor_module', function (Blueprint $table) {
            $table->integer('contributor_id', false, true);
            $table->integer('module_id', false, true);
            $table->smallInteger('order', false, true);

            $table->foreign('contributor_id')->references('id')->on('contributors');
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
        Schema::dropIfExists('contributor_module');
    }
}
