<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Mading;
use App\Models\User;

class MadingFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Mading::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'author_id' => User::factory(),
            'accepted_by' => User::factory(),
            'title' => $this->faker->sentence(4),
            'body' => $this->faker->text(),
            'status' => $this->faker->randomElement(["pending","accepted","rejected"]),
            'post_schedule' => $this->faker->dateTime(),
        ];
    }
}
