<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateModulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('modules', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('edition_id', false, true);
            $table->integer('publisher_id', false, true);
            $table->integer('setting_id', false, true);
            $table->integer('length_id', false, true);
            $table->string('name');
            $table->smallInteger('min_level', false, true)->nullable();
            $table->smallInteger('max_level', false, true)->nullable();
            $table->text('summary')->nullable();
            $table->text('description')->nullable();
            $table->date('published_date')->nullable();
            $table->timestamps();

            $table->foreign('edition_id')->references('id')->on('editions');
            $table->foreign('publisher_id')->references('id')->on('publishers');
            $table->foreign('setting_id')->references('id')->on('settings');
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
        Schema::dropIfExists('modules');
    }
}
