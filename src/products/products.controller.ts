import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Product, ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Get()
    getProducts() { 
        return this.productsService.getProducts();
    }

    // Example url: http://localhost:3000/api/v1/products/iuyi-hjfyu-hgyiugy-iuyiuy
    @Get(':id')
    getProductById(@Param('id') id: string) { 
        return this.productsService.getProductById(id);
    }

    @Post()
    createProduct(@Body() body: Omit<Product, 'id'>) { 
        return this.productsService.createProduct(body);
    }

    @Patch(':id')
    updateProduct(@Param('id') id: string, @Body() body: Partial<Omit<Product, 'id'>>) { 
        return this.productsService.updateProduct(id, body);
    }

    @Delete(':id')
    deleteProduct(@Param('id') id: string) { 
        return this.productsService.deleteProduct(id);
    }
}
