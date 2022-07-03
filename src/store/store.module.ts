import { Module } from '@nestjs/common';
import { StoreService } from './services/store/store.service';
import { StoreController } from './controllers/store/store.controller';

@Module({
  providers: [StoreService],
  controllers: [StoreController]
})
export class StoreModule {}
