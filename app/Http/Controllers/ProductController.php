<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ProductController extends Controller
{
    /** 
     * Returns a list of the products
    */
    public function index() {
        try {
            $productsRes = Http::get(env("VITE_API_URL", "https://dummyjson.com")."/products");         
            if($productsRes->successful()) {
                return $productsRes->json();
            }
            
            return response()->json([]);
        } catch (Exception $e) {
            return response()->json([]);
        }
    }
}
