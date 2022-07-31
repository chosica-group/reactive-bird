import {
  AllowNull,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import type { TComment } from './types';

// eslint-disable-next-line prettier/prettier
@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'comments',
})
export class Comments extends Model<TComment> {
  @AllowNull(false)
  @Column(DataType.STRING)
  comment: string;
}