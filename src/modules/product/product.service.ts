import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private readonly _productRepository: Repository<Product>
    ){}
    
    async getOne(){

    }

    async getAll(){

    }

    async createProduct(){

    }

    async updateProduct(){
        
    }


}