<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request) {
        $data = $request->validate([
            'credentials' => ['required', 'max:30'],
            'password' => ['required']
        ]);
        
        // if(filter_var($data['credentials'], FILTER_VALIDATE_EMAIL)) {
        //     $user = User::query()->where('email', $data['credentials'])->first();

        //     if(!$user) {
        //         return response()->json([
        //             'message' => 'unauthorized'
        //         ], 401);
        //     }
        // }

        return auth()->user();
    }
}
