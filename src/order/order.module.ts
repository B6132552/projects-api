import { Module } from '@nestjs/common';
import { OrderService } from './services/order/order.service';
import { OrderController } from './controllers/order/order.controller';
import { Orders } from 'src/typeorm/orders.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Orders]),],
  providers: [OrderService],
  controllers: [OrderController],
  exports: [OrderService]
})
export class OrderModule {}
