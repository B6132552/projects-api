import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Food } from './food.entity';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  username: string;

  @Column({
    name: 'name',
    nullable: false,
    default: '',
  })
  name: string;

  @Column({
    nullable: false,
    default: '',
  })
  email: string;

  @Column({
    name: 'phone',
    nullable: false,
    default: '',
  })
  phone: string;

  @Column({
    nullable: false,
    default: '',
  })
  password: string;

  // @OneToMany(() => Food , food => food.id)
  // food : Food[]
}
