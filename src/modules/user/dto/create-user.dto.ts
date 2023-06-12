import { ApiProperty, ApiTags } from "@nestjs/swagger";

@ApiTags('user')
export class CreateUserDto {
    @ApiProperty({
        description: 'The name of the user',
        example: 'John Doe',
    })
    name: string;

    @ApiProperty({
        description: 'The email of the user',
        example: 'doe@example.com',
    })
    email: string;

    @ApiProperty({
        description: 'The password of the user',
        example: 'password',
    })
    password: string;
}
