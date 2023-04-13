import { CreateExchanges1678402403641 } from './1678402403641-CreateExchanges';
import { SeedKrakenExchange1678403176953 } from './1678403176953-SeedKrakenExchange';
import { SeedBinanceUSExchange1678417995959 } from './1678417995959-SeedBinanceUSExchange';
import { SeedExchangeTwitterUrls1678423218530 } from './1678423218530-SeedExchangeTwitterUrls';
import { AddAssetsAndExchangeMarkets1679378884005 } from './1679378884005-AddAssetsAndExchangeMarkets';
import { SeedAssets1679424065402 } from './1679424065402-SeedAssets';

const migrations = [
    CreateExchanges1678402403641,
    SeedKrakenExchange1678403176953,
    SeedBinanceUSExchange1678417995959,
    SeedExchangeTwitterUrls1678423218530,
    AddAssetsAndExchangeMarkets1679378884005,
    SeedAssets1679424065402,
];

export default migrations;
