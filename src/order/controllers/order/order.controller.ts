import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateOrderDto } from 'src/order/dto/CreateOrder.dto';
import { OrderService } from 'src/order/services/order/order.service';

@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) {}
    @Post('create')
    @UsePipes(ValidationPipe)
    createFood(@Body() createOrderDto: CreateOrderDto) {
      return this.orderService.createOrder(createOrderDto);
    }
}
