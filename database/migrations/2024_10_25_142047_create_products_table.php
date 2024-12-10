<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('store_id')->constrained()->cascadeOnDelete();
            $table->foreignId('category_id')->constrained();
            $table->string('quantity')->nullable();
            $table->string('productName')->nullable();
            $table->string('productDesc')->nullable();
            $table->string('image')->nullable();
            $table->json('productSpec')->nullable();
            $table->string('price')->nullable();
            $table->string('color')->nullable();
            $table->string('discountPrice')->nullable();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
