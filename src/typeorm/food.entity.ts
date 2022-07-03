import { ConfigService } from '@nestjs/config';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Orders } from './orders.entity';
import { Users } from './user.entity';
import { Expose } from 'class-transformer';

const configService = new ConfigService();
const siteUrl = configService.get<string>('APP_SITE_URL', 'localhost');

@Entity('foods')
export class Food {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'food_id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  name: string;

  @Column({
    name: 'type',
    nullable: false,
    default: '',
  })
  type: string;

  @Column({
    type: 'integer',
    name: 'price',
  })
  price: number;

  @Column({
    name: 'status',
    nullable: false,
    default: '',
  })
  status: string;

  @Column({
    nullable: true,
    default: '',
  })
  discription: string;

  @Column({ nullable: true })
  image: string;

  // @ManyToOne(() => Users, user => user.id )
  // users : Users[]

  @ManyToMany(() => Orders, (order) => order.food)
  order?: Orders[];

  @Expose()
  getUrl() {
    const url = `${siteUrl}${
      this.image.slice(0, 6) === 'bucket'
        ? this.image.split('bucket')[1]
        : this.image
    }`;
    return url;
  }
}
