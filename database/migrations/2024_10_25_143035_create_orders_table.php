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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->timestamp('createdAt')->nullable();
            $table->foreignId('product_id')->constrained();
            $table->foreignId('store_id')->constrained();
            $table->foreignId('user_id')->constrained();
            $table->string('quantity');
            $table->string('paymentMethod');
            $table->string('deliveryMethod');
            $table->string('UUID');
            $table->string('total');
            $table->string('processingOrder')->default(0);
            $table->string('payment_id');
            $table->string('individualConfirmation')->default(0);
            $table->string('collectionConfirmation')->default(0);
            $table->string('pickupStation')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
