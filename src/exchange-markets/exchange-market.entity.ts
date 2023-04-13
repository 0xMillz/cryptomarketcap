import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
} from 'typeorm';
import Exchange from '../exchanges/exchange.entity';
import Asset from '../assets/asset.entity';

export enum ExchangeMarketStatus {
    ENABLED = 'enabled',
    DISABLED = 'disabled',
}

@Entity({
    name: 'exchange-markets',
})
class ExchangeMarket {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @ManyToOne(
        () => Exchange,
        exchange => exchange.id,
    )
    public exchange: string;

    @ManyToOne(
        () => Asset,
        asset => asset.id,
    )
    public base: string;

    @ManyToOne(
        () => Asset,
        asset => asset.id,
    )
    public quote: string;

    @Column({
        default: ExchangeMarketStatus.DISABLED,
    })
    public status: ExchangeMarketStatus;

    @CreateDateColumn({ type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP(6)' })
    public createdAt: Date;

    @UpdateDateColumn({
        type: 'timestamp with time zone',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    })
    public updatedAt: Date;
}

export default ExchangeMarket;
