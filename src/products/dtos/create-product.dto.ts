import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @Transform(({ value }) => String(value))
  @IsNotEmpty()
  @IsString()
  name!: string;

  @Transform(({ value }) => String(value))
  @IsNotEmpty()
  @IsNumber()
  price!: number;

  @IsNotEmpty()
  @IsNumber()
  stock!: number;

  @IsNotEmpty()
  @IsString()
  description!: string;

  @IsNotEmpty()
  @IsString()
  best_before!: string;

  @IsNotEmpty()
  @IsString()
  category!: string;
}

export class updateProductDto {
  @Transform(({ value }) => String(value))
  @IsNotEmpty()
  @IsString()
  name!: string;

  @IsNotEmpty()
  @IsNumber()
  price!: number;

  @IsNotEmpty()
  @IsNumber()
  stock!: number;

  @Transform(({ value }) => String(value))
  @IsNotEmpty()
  @IsString()
  description!: string;

  @Transform(({ value }) => String(value))
  @IsNotEmpty()
  @IsString()
  best_before!: string;

  @Transform(({ value }) => String(value))
  @IsNotEmpty()
  @IsString()
  category!: string;
}
