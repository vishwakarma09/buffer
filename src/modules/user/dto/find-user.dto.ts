import { IsOptional } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class FindUserDto {
    @ApiProperty({
        description: 'Keyword to search for (at least 3 characters)',
        example: 'San',
        required: false,
    })
    @IsOptional()
    keyword?: string;

    @ApiProperty({
        description: 'How many records to skip for pagination',
        example: 10,
        required: false,
    })
    @IsOptional()
    offset?: number;

    @ApiProperty({
        description: 'How many records to return for pagination',
        example: 10,
        required: false,
    })
    @IsOptional()
    limit?: number;
}
