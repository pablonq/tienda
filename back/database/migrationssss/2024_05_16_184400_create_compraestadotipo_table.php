<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompraEstadoTipoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('compraestadotipo', function (Blueprint $table) {
            $table->integer('idcompraestadotipo')->primary();
            $table->string('cetdescripcion', 50);
            $table->string('cetdetalle', 256);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('compraestadotipo');
    }
}