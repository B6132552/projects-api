import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('members')
export class Members {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'member_id',
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
    name: 'email',
    nullable: false,
    default: '',
  })
  email: string;

  @Column({
    name: 'gender',
    nullable: false,
    default: '',
  })
  gender: string;

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
}
