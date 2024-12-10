<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Review>
 */
class ReviewFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'comment' => $this->faker->realText(75),
            'user_id' => $this->faker->numberBetween(1,22),
            'product_id' => $this->faker->numberBetween(1,70),
            'rating' => $this->faker->numberBetween(1,5)
        ];
    }
}
