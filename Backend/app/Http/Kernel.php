<?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{

    protected $middleware = [
        
        \Fruitcake\Cors\HandleCors::class,
        
        \Illuminate\Foundation\Http\Middleware\ValidatePostSize::class,
        
        \Illuminate\Foundation\Http\Middleware\ConvertEmptyStringsToNull::class,
    ];

    
    protected $middlewareGroups = [
        'api' => [
            \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
        ],
    ];


    protected $routeMiddleware = [
        'test.middleware' => \App\Http\Middleware\TestMiddleware::class,
        'auth' => \App\Http\Middleware\Authenticate::class,
    'auth:api' => \Tymon\JWTAuth\Http\Middleware\Authenticate::class,
    ];
}
