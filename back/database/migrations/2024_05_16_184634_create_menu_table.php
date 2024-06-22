<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMenuTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('menu', function (Blueprint $table) {
            $table->bigIncrements('idmenu');
            $table->string('menombre')->comment('Nombre del item del menu');
            $table->string('medescripcion')->comment('Descripcion más detallada del item del menu');
            $table->BigInteger('idpadre')->unsigned()->nullable()->comment('Referencia al id del menu que es subitem');
            $table->timestamp('medeshabilitado')->nullable()->default(now())->comment('Fecha en la que el menu fue deshabilitado por última vez');

            
            $table->foreign('idpadre')->references('idmenu')->on('menu')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('menu');
    }
}