<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRolesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('roles', function (Blueprint $table) {
            $table->integer('id', false, true);
            $table->string('name');

            $table->index('id', 'PK_roles_id');
        });

        Schema::table('users', function (Blueprint $table) {
            $table->integer('role_id', false, true)->after('id');
            $table->foreign('role_id', 'users_role_id_foreign')->references('id')->on('roles');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign('users_role_id_foreign');
            $table->dropColumn('role_id');
        });

        Schema::dropIfExists('roles');
    }
}
