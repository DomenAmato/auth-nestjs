import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import {User} from './user.entity';

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    create_at: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    update_at: Date;

    @OneToMany(type => User, user => user.role)
    users: User[];
}