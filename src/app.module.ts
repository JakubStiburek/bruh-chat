import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatGateway } from './chat.gateway';
import secrets from './secrets';

@Module({
  imports: [MongooseModule.forRoot(secrets.mongodb)],
  controllers: [AppController],
  providers: [AppService, ChatGateway],
})
export class AppModule {}
