//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Rides')
export class RidesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('date', { nullable: true })
  dateAndTime: Date;

  @Column('text', { nullable: true })
  origin: string;

  @Column('text', { nullable: true })
  destination: string;

  @Column('integer', { nullable: true })
  driverRiderInformation: number;

  @Column('text', { nullable: true })
  rideType: string;

  @Column('text', { nullable: true })
  status: string;

  @Column('real', { nullable: true })
  cost: number;
}
