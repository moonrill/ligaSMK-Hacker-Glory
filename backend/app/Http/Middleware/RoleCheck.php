<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RoleCheck
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, ...$roles) : Response
    {
        $roleInArray = in_array(auth()->user()->role, $roles);

        if(!$roleInArray) {
            return abort(response()->json(['error' => 'unauthorized'], 401));
        }
        
        return $next($request);
    }
}
