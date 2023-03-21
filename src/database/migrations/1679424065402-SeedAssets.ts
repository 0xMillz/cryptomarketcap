import { MigrationInterface, QueryRunner } from 'typeorm';
import Asset, { AssetStatus } from '../../assets/asset.entity';

export class SeedAssets1679424065402 implements MigrationInterface {
    name = 'SeedAssets1679424065402';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await Promise.all([
            queryRunner.manager.save(
                queryRunner.manager.create<Asset>(Asset, {
                    symbol: 'BTC:BTC',
                    display_name: 'Bitcoin',
                    website: 'https://bitcoin.org/',
                    twitterUrl: null,
                    slug: 'bitcoin',
                    explorer_url: 'https://blockchair.com/bitcoin',
                    max_supply: 21000000,
                    circulating_supply: 19323981, // TODO: make dynamic
                    status: AssetStatus.ENABLED,
                }),
            ),
            queryRunner.manager.save(
                queryRunner.manager.create<Asset>(Asset, {
                    symbol: 'ETH:ETH',
                    display_name: 'Ethereum',
                    website: 'https://ethereum.org/',
                    twitterUrl: 'https://twitter.com/ethereum',
                    slug: 'ethereum',
                    explorer_url: 'https://etherscan.io/',
                    max_supply: null,
                    circulating_supply: 122373866, // TODO: make dynamic
                    status: AssetStatus.ENABLED,
                }),
            ),
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE
                                 FROM assets
                                 WHERE slug = 'bitcoin' OR slug = 'ethereum'`);
    }
}
