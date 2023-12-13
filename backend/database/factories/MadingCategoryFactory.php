<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Category;
use App\Models\Mading;
use App\Models\MadingCategory;

class MadingCategoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = MadingCategory::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'mading_id' => Mading::factory(),
            'category_id' => Category::factory(),
        ];
    }
}
