import { IsString, IsNumber, IsNotEmpty, IsBoolean } from 'class-validator';

export class CreateProductoDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    price: number;

    @IsBoolean()
    active: boolean;
}
