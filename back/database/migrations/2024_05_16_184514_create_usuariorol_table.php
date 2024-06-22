<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsuarioRolTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usuariorol', function (Blueprint $table) {
            $table->bigInteger('idusuario')->unsigned();
            $table->bigInteger('idrol')->unsigned();

            $table->primary(['idusuario', 'idrol']);
            $table->foreign('idusuario')->references('idusuario')->on('usuario')->onDelete('cascade')->onUpdate('cascade');
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
        Schema::dropIfExists('usuariorol');
    }
}
