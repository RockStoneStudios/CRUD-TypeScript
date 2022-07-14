import {Column,Entity, JoinColumn, ManyToOne, OneToMany} from 'typeorm';
import { CategoryEntity } from '../../category/entities/category.entity';
import { BaseEntity } from '../../config/base.entity';
import { PurchaseProductEntity } from '../../custom/entities/purchases-products.entity';
import { CustomerEntity } from '../../customer/entities/customer.entity';



@Entity({name : "product"})

export class ProductEntity extends BaseEntity {
    @Column()
    productName! : string;

    @Column()
    description! : string;

    @Column()
    price! : number

    @ManyToOne(()=> CategoryEntity,(category)=> category.product)
    @JoinColumn({name : "category_id"})
    category!: CategoryEntity;

    @OneToMany(()=>PurchaseProductEntity,(purchaseProduct)=> purchaseProduct.product)
    purchaseProduct!:PurchaseProductEntity[];
}