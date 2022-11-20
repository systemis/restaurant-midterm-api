<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductCollection;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * @todo Get product list.
     * @return array products.
     */
    function getProducts() {
      return new ProductCollection(Product::all());
    }

    /**
     * @todo Get product by id.
     * @return product.
     */
    function getProduct(Request $request, $id) {
      return new ProductResource(Product::where("id", $id)->first());
    }

    /**
     * @todo Create product.
     * @return product.
     */
    function createProduct(Request $request) {
      $product = new Product();
      // $product->id = $request->id;
      $product->name = $request->name;
      $product->image = $request->image;
      $product->content = $request->content;
      $product->pices = $request->pices;
      $product->price = $request->price;
      $product->save();

      return new ProductResource($product);
    }

    /**
     * @todo Update product by id.
     * @return product.
     */
    function updateProduct(Request $request) {

    }

    /**
     * @todo Remove product bt id.
     * @return product.
     */
    function removeProduct(Request $request) {
      
    }
}
