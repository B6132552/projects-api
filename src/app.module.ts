import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CustomersModule } from './customers/customers.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import entities from './typeorm';
import { AppController } from './app.controller';
import { FoodModule } from './food/food.module';
import { MembersModule } from './members/members.module';
import { OrderModule } from './order/order.module';
import { CartModule } from './cart/cart.module';
import { StoreModule } from './store/store.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_DATABASE || 'resturant',
      logging: process.env.DB_LOGGING === 'true',
      synchronize: process.env.DB_SYNCHRONIZE === 'true',
      entities: entities,
    }),
    UsersModule,
    CustomersModule,
    AuthModule,
    FoodModule,
    MembersModule,
    OrderModule,
    CartModule,
    StoreModule,   
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
