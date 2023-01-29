import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  name: string;

  @Column("text")
  color: string;
}
