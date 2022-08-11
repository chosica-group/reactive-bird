import {
  AllowNull, AutoIncrement,
  Column,
  DataType, ForeignKey, Index,
  Model, PrimaryKey,
  Table
} from 'sequelize-typescript';
import { Topics } from 'server/models/topics';
import type { TComment } from './types';

// eslint-disable-next-line prettier/prettier
@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'comments',
})
export class Comments extends Model<TComment> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: number;

  @Index
  @ForeignKey(() => Topics)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  topicId: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  comment: string;
}
