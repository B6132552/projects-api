import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrderDto } from 'src/order/dto/CreateOrder.dto';
import { Orders } from 'src/typeorm/orders.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Orders) private readonly orderRepository: Repository<Orders>,
      ) {}
    
      createOrder(createOrderDto: CreateOrderDto) {
        const newFood = this.orderRepository.create({
            table: createOrderDto.table,
            quantity: createOrderDto.quantity,
            total: createOrderDto.total,
            sale: createOrderDto.sale,
        });
        return this.orderRepository.save(newFood);
      }
    
      findOrderById(id: number) {
        return this.orderRepository.findOne(id);
      }

      delete(id) {
        this.orderRepository.delete(id);
      }
}
