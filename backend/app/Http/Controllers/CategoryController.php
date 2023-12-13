<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function __construct() 
    {
        $this->middleware('role:admin,member');
    }
    public function index(Request $request) 
    {
        $categories = Category::query()->orderBy('name')->get();

        return response()->json($categories, 200);
    }
}
