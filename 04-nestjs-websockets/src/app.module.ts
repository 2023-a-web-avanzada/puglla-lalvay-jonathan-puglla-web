import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {EventosModule} from "./eventos/eventos.module";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [
    EventosModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './bdd/bdd.sqlite',
      entities: [

      ],    // entidades de TODOO el aplicativo
      synchronize: true,    // true => edita las columnas y tablas // false => nada
      dropSchema: false // true => borra toda la base de datos! cuidado! // false => nada
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
