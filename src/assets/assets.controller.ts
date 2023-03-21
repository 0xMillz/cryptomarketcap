import { Controller, Get, Param } from '@nestjs/common';
import AssetsService from './assets.service';
import FindOneParams from './utils/findOneParams';

@Controller('assets')
export default class AssetsController {
    constructor(private readonly assetsService: AssetsService) {}

    @Get()
    async getAllAssets() {
        return this.assetsService.getAll();
    }

    @Get(':slug')
    async getOneAsset(@Param() { slug }: FindOneParams) {
        return this.assetsService.getOneBySlug(slug);
    }
}
