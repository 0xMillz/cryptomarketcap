import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

export enum AssetStatus {
    ENABLED = 'enabled',
    DISABLED = 'disabled',
}

@Entity({
    name: 'assets',
})
class Asset {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column()
    public symbol: string;

    @Column()
    public display_name: string;

    @Column({
        nullable: true,
    })
    public website: string;

    @Column({
        nullable: true,
    })
    public twitterUrl: string;

    @Column({
        unique: true,
    })
    public slug: string;

    @Column({
        nullable: true,
    })
    public explorer_url: string;

    @Column({
        type: 'decimal',
        nullable: true,
    })
    public max_supply: number;

    @Column({
        type: 'decimal',
        nullable: true,
    })
    public circulating_supply: number;

    @Column({
        default: AssetStatus.DISABLED,
    })
    public status: AssetStatus;

    @CreateDateColumn({ type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP(6)' })
    public createdAt: Date;

    @UpdateDateColumn({
        type: 'timestamp with time zone',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    })
    public updatedAt: Date;
}

export default Asset;
