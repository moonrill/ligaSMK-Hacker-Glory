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
        Schema::create('madings', function (Blueprint $table) {
            $table->id();
            $table->uuid('author_id');
            $table->uuid('accepted_by');
            $table->string('title');
            $table->text('description');
            $table->string('thumbnail');
            $table->enum('status', ["pending","accepted","rejected"])->default('pending');
            $table->dateTime('post_schedule');
            $table->timestamps();

            $table->foreign('author_id')->references('id')->on('users')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreign('accepted_by')->references('id')->on('users')->cascadeOnUpdate()->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('madings');
    }
};
