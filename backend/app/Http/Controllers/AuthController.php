<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserLoginRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;

class AuthController extends Controller
{
    public function login(UserLoginRequest $request) : JsonResponse
    {
        $credentials = $request->validated();

        if(!auth()->validate($credentials)) {
            return response()->json([
                'error' => 'unauthorized'
            ], 401);
        }

        $token = auth()->attempt($credentials);

        return $this->respondWithToken($token);
    }

    public function me() : JsonResponse
    {
        return response()->json(auth()->user(), 200);
    }

    protected function respondWithToken($token) : JsonResponse
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL()
        ], 200);
    }
}
