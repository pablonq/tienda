<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompraItemTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('compraitem', function (Blueprint $table) {
            $table->bigIncrements('idcompraitem');
            $table->BigInteger('idproducto')->unsigned();
            $table->BigInteger('idcompra')->unsigned();
            $table->integer('cicantidad');

            
            $table->foreign('idcompra')->references('idcompra')->on('compra')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('idproducto')->references('idproducto')->on('producto')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('compraitem');
    }
}

