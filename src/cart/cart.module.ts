import { Module } from '@nestjs/common';
import { CartService } from './services/cart/cart.service';
import { CartController } from './controllers/cart/cart.controller';

@Module({
  providers: [CartService],
  controllers: [CartController]
})
export class CartModule {}
