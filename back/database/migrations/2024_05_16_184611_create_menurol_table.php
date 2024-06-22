<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMenuRolTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('menurol', function (Blueprint $table) {
            $table->bigInteger('idmenu')->unsigned();
            $table->bigInteger('idrol')->unsigned();

            $table->primary(['idmenu', 'idrol']);
            $table->foreign('idmenu')->references('idmenu')->on('menu')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('idrol')->references('idrol')->on('rol')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('menurol');
    }
}