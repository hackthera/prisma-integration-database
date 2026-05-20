import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID as uuidv4} from 'crypto';

export type Product = {
    id: string;
    name: string;
    price: number;
    stock: number;
    description: string;
    best_before: string;
}

const products: Product[] = [
    { id: uuidv4(), name: 'Product 1', price: 100, stock: 100, description: 'Product 1 description', best_before: new Date('2026-05-06').toISOString() },
    { id: uuidv4(), name: 'Product 2', price: 200, stock: 200, description: 'Product 2 description', best_before: new Date('2026-05-06').toISOString() },
    { id: uuidv4(), name: 'Product 3', price: 300, stock: 300, description: 'Product 3 description', best_before: new Date('2026-05-06').toISOString() },
]

@Injectable()
export class ProductsService {
    getProducts(): Product[] { 
        return products;
    }

    getProductById(id: string): Product {
        const product = products.find((product) => product.id === id);
        if (!product) throw new NotFoundException('Product not found');
        return product;
    }

    createProduct(product: Omit<Product, 'id'>): Product {
        const newProduct = { ...product, id: uuidv4() };
        products.push(newProduct);
        return newProduct;
    }

    updateProduct(id: string, product: Partial<Omit<Product, 'id'>>): Product {
        const index = products.findIndex((product) => product.id === id);
        if (index === -1) throw new NotFoundException('Product not found');
        products[index] = { ...products[index], ...product };
        return products[index];
    }

    deleteProduct(id: string): Product {
        const index = products.findIndex((product) => product.id === id);
        if (index === -1) throw new NotFoundException('Product not found');
        products.splice(index, 1);
        return products[index];
    }
}
