<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ProductsTest extends TestCase
{
    /**
     * A feature test to get all the products from the API
     *
     * @return void
     */    
    public function test_get_all_products()
    {
        $response = $this->get('/api/products')
            ->assertStatus(200)
            ->assertJsonStructure(
                [
                    'products',
                    'total',
                    'skip',
                    'limit'
                ]
            );
    }
}
