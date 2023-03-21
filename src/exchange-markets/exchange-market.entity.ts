import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
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

    @OneToMany(
        type => Exchange,
        exchange => exchange.id,
    )
    public exchange_id: string;

    @OneToMany(
        type => Asset,
        asset => asset.id,
    )
    public base_id: string;

    @OneToMany(
        type => Asset,
        asset => asset.id,
    )
    public quote_id: string;

    @Column({
        nullable: true,
    })
    public twitterUrl: string;

    @Column({
        unique: true,
    })
    public slug: string;

    @Column()
    public apiUri: string;

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
