<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class TestMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if (!$request->has('token')) {
            return response()->json([
                'error' => 'Unauthorized',
                'message' => 'Message from TestMiddleware: You need to provide a valid token.',
            ], 401);
        }

        return $next($request);
    }
}
