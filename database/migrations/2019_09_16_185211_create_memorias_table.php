<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMemoriasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('memorias', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('en-name');
            $table->string('jp-name');
            $table->integer('rarity');
            $table->integer('max-lvl');
            $table->bigInteger('mem_type_id')->unsigned();
            $table->foreign('mem_type_id')->references('id')->on('mem_types')->onDelete('cascade');

            $table->string('img-url');
            $table->bigInteger('shoujo_id'); // <- For personal memoria
            $table->boolean('isPersonal')->nullable(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('memoria');
    }
}
