import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import secrets from './secrets';

@Module({
  imports: [MongooseModule.forRoot(secrets.mongodb)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
