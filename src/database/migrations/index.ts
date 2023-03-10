import { CreateExchanges1678402403641 } from './1678402403641-CreateExchanges';
import { SeedKrakenExchange1678403176953 } from './1678403176953-SeedKrakenExchange';
import { SeedBinanceUSExchange1678417995959 } from './1678417995959-SeedBinanceUSExchange';
import { CreateTwitterUrlColumn1678422995981 } from './1678422995981-CreateTwitterUrlColumn';
import { SeedExchangeTwitterUrls1678423218530 } from './1678423218530-SeedExchangeTwitterUrls';

const migrations = [
  CreateExchanges1678402403641,
  SeedKrakenExchange1678403176953,
  SeedBinanceUSExchange1678417995959,
  CreateTwitterUrlColumn1678422995981,
  SeedExchangeTwitterUrls1678423218530,
]

export default migrations;
