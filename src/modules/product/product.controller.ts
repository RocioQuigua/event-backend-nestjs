import { Controller, Get, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(
        private readonly _productService: ProductService
    ){}

    @Get()
    getOne(){

    }

    @Get("/all")
    getAll(){

    }

    @Post("/create")
    createProduct(){

    }

    @Put("/update")
    updateProduct(){

    }

}