import { Module } from '@nestjs/common';
import AssetsController from './assets.controller';
import AssetsService from './assets.service';
import Asset from './asset.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Asset])],
    controllers: [AssetsController],
    providers: [AssetsService],
})
export default class AssetsModule {}
