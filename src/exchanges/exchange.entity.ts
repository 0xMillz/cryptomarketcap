import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export enum ExchangeStatus {
    ENABLED = 'enabled',
    DISABLED = 'disabled',
}

@Entity()
class Exchange {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column()
    public name: string;

    @Column()
    public website: string;

    @Column({
        unique: true
    })
    public slug: string;

    @Column()
    public apiUri: string;

    @Column()
    public status: ExchangeStatus;

    @Column()
    public socket: boolean;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public createdAt: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updatedAt: Date;
}

export default Exchange;
