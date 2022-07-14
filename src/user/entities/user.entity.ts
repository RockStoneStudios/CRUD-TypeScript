import { Column, Entity } from "typeorm";
import { BaseEntity } from "../../config/base.entity";

@Entity({name : "user"})

export class UserEntity extends BaseEntity {
    @Column()
    username!: string;

    @Column({length : 666})
    name!: string;

    @Column({nullable : true})
    jobPosition?:string;
    
    @Column()
    numberPhone!:number

}