import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

type options = {
  label: string;
  value: string;
  icon?: string;
};

@Entity('questions') 
export class Questions {
    @PrimaryColumn()
    id: number;

    @Column({})
    text_en: string;

    @Column({ })
    text_es: string;

    @Column({ length: 255 })
    type: string;

    @Column({ })
    questionKey: string;

    @Column({ type: 'jsonb', nullable: true })
    options: options[];

    @Column({ })
    groupText: string;

    @CreateDateColumn({ type: 'timestamp' , default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @CreateDateColumn({ type: 'timestamp' })
    deleted_at: Date | null;
}