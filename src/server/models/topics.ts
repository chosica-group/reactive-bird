import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript';

export type TTopics = {
  id?: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

// eslint-disable-next-line prettier/prettier
@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'topics',
})
export class Topics extends Model<TTopics> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  name: string;
}
