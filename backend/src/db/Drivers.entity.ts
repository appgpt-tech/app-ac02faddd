//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Drivers')
export class DriversEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('integer', { nullable: true })
  profileInformation: number;

  @Column('text', { nullable: true })
  accountSettings: string;

  @Column('integer', { nullable: true })
  vehicles: number;

  @Column('integer', { nullable: true })
  bookings: number;

  @Column('text', { nullable: true })
  tripHistory: string;

  @Column('real', { nullable: true })
  earnings: number;

  @Column('text', { nullable: true })
  navigation: string;
}
