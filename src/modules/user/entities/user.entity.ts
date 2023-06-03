import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@ApiTags('user')
@Entity('user')
export class User extends BaseEntity {
    @ApiProperty({
        description: 'The id of the user',
        example: 1,
    })
    @PrimaryColumn({
        type: 'int',
        generated: true,
        unsigned: true,
        name: 'id',
    })
    id: number;
    
    @ApiProperty({
        description: 'The name of the user',
        example: 'John Doe',
    })
    @Column({
        type: 'varchar',
        length: 255,
        nullable: false,
        name: 'name',
    })
    name: string;

    @ApiProperty({
        description: 'The email of the user',
        example: 'bob@example.com',
    })
    @Column({
        type: 'varchar',
        length: 255,
        nullable: false,
        name: 'email',
    })
    email: string;

    @ApiProperty({
        description: 'The password of the user',
        example: 'password',
    })
    @Column({
        type: 'varchar',
        length: 255,
        nullable: false,
        name: 'password',
    })
    password: string;
}
