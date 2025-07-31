import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('forms')
export class Forms {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'text' })
  label: string;

 @Column({ type: 'integer' })
  order: number;

 @Column({ type: 'integer' })
  nextformId: number;

}

