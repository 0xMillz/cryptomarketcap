import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import Asset, { AssetStatus } from './asset.entity';

@Injectable()
export default class AssetsService {
    constructor(
        @InjectRepository(Asset)
        private assetsRepository: Repository<Asset>,
    ) {}

    async getOneBySlug(slug: string): Promise<Asset> {
        const asset = await this.assetsRepository.findOne({
            where: {
                slug,
                status: AssetStatus.ENABLED,
            },
        });
        if (asset) {
            return asset;
        }
        throw new HttpException('Asset with this slug does not exist', HttpStatus.NOT_FOUND);
    }

    async getAll(): Promise<Asset[]> {
        const where: FindManyOptions<Asset>['where'] = {
            status: AssetStatus.ENABLED,
        };

        return this.assetsRepository.find({
            where,
            order: {
                display_name: 'ASC',
            },
        });
    }
}
