<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompraEstadoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('compraestado', function (Blueprint $table) {
            $table->bigIncrements('idcompraestado');
            $table->BigInteger('idcompra')->unsigned();
            $table->BigInteger('idcompraestadotipo')->unsigned();
            $table->timestamp('cefechaini')->default(now());
            $table->timestamp('cefechafin')->nullable();

            
            $table->foreign('idcompra')->references('idcompra')->on('compra')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('idcompraestadotipo')->references('idcompraestadotipo')->on('compraestadotipo')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('compraestado');
    }
}
