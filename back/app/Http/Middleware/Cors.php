<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class Cors
{
  public function handle(Request $request, Closure $next): Response
  {
      $response = $next($request);
  
      // Imprimir el contenido de la respuesta
      \Log::info('Response content: ' . $response->getContent());
  
      $response->headers->set('Access-Control-Allow-Origin', 'http://localhost:3000');
      $response->headers->set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      $response->headers->set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
      return $response;
  }
}
