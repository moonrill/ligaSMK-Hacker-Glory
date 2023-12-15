<?php

namespace App\Http\Controllers;

use App\Http\Requests\Category\CategoryCreateRequest;
use App\Http\Requests\Category\CategoryUpdateRequest;
use App\Models\Category;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
{
    public function __construct() 
    {
        $this->middleware('role:admin,member');
    }

    /**
     * Retrieves all categories.
     *
     * @param Request $request The request object.
     * @return JsonResponse The JSON response containing the categories.
     */
    public function getAll(Request $request) 
    {
        $categories = Category::query()
                                ->orderBy('name')
                                ->get();

        return response()->json($categories, 200);
    }

    /**
     * Retrieves a single category by its name.
     *
     * @param string $name The name of the category.
     * @return JsonResponse The JSON response containing the category data.
     */
    public function getOne(string $name) : JsonResponse
    {
        // Get category
        $category = Category::query()
                            ->where('name', $name)
                            ->with('madings')
                            ->first();

        // Check if category not found
        if(!$category) {
            return response()->json([
                'message' => 'Category not found'
            ], 404);
        }

        return response()->json($category, 200);
    }

    /**
     * Creates a new category.
     *
     * @param CategoryCreateRequest $request The category creation request.
     * @return JsonResponse The JSON response containing the created category.
     */
    public function create(CategoryCreateRequest $request): JsonResponse
    {
        // Validating request
        $data = $request->validated();

        // Storing file first
        $file = $request->file('icon');
        $fileName = $data['name'] . '-icon.' . $file->getClientOriginalExtension();
        $path = Storage::disk('public')->putFileAs('icons', $file, $fileName);

        // Creating category
        $category = Category::query()->create([
            'name' => $data['name'],
            'icon' => $path
        ]);

        return response()->json($category, 201);
    }

    /**
     * Updates a category with the given name.
     *
     * @param string $name The name of the category to update.
     * @param CategoryUpdateRequest $request The request containing the updated category data.
     * @throws \Exception If the category is not found.
     * @return \Illuminate\Http\JsonResponse The response containing the updated category.
     */
    public function update(string $name, CategoryUpdateRequest $request)
    {
        // Get category
        $category = Category::query()->where('name', $name)->first();

        // Check if category not found
        if(!$category) {
            return response()->json([
                'message' => 'Category not found'
            ], 404);
        }

        // Validating request
        $data = $request->validated();

        // Check if request not have file
        if(!$request->hasFile('icon')) {
            $category->name = $data['name'];
            $category->save();
            
            return response()->json($category, 200);
        }

        // Delete old file
        Storage::disk('public')->delete($category->icon);

        // Store new file
        $file = $request->file('icon');
        $fileName = $data['name'] . '-icon.' . $file->getClientOriginalExtension();
        $path = Storage::disk('public')->putFileAs('icons', $file, $fileName);

        // Update category
        $category->fill([
            'name' => $data['name'],
            'icon' => $path
        ]);
        $category->save();

        return response()->json($category, 200);
    }

    /**
     * Deletes a category by name.
     *
     * @param string $name The name of the category to delete.
     * @return \Illuminate\Http\JsonResponse Returns a JSON response with a message indicating the success of the deletion.
     */
    public function delete(string $name)
    {
        // Get category
        $category = Category::query()
                            ->where('name', $name)
                            ->first();

        // Check if category not found
        if(!$category) {
            return response()->json([
                'message' => 'Category not found'
            ], 404);
        }

        // Delete old file
        Storage::disk('public')->delete($category->icon);

        // Delete category
        $category->delete();

        return response()->json([
            'message' => 'Category deleted successfully'
        ], 200);
    }
}
