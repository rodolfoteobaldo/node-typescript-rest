import { PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

class Model extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;
}

export default Model;
