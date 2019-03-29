import 'reflect-metadata'
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Logs{

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    level: string

    @Column()
    message: string

    @Column()
    meta: string

    @Column()
    timestamp: string

}