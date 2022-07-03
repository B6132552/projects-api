import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Food } from './food.entity';

@Entity('orders')
export class Orders {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'order_id',
  })
  id: number;

  @Column({
    nullable: true,
    default: '',
  })
  table: string;

  @Column({
    nullable: true,
  })
  quantity: number;

  @Column({
    nullable: true,
  })
  total: number;

  @Column({
    nullable: true,
  })
  sale: number;

  @ManyToMany(() => Food , food => food.order)
  @JoinTable()
  food : Food[]
}