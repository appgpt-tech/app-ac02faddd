//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Users')
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  name: string;

  @Column('text', { nullable: true })
  contactDetails: string;

  @Column('text', { nullable: true })
  avatar: string;

  @Column('bool', { nullable: true })
  emailNotifications: boolean;

  @Column('text', { nullable: true })
  password: string;

  @Column('text', { nullable: true })
  privacyPreferences: string;

  @Column('text', { nullable: true })
  bookings: string;

  @Column('text', { nullable: true })
  paymentMethods: string;

  @Column('text', { nullable: true })
  tripHistory: string;
}
