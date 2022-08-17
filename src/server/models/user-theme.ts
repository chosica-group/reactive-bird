import {
  AllowNull,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { SiteTheme} from './site-theme';
import type { TUserTheme } from './types';
// eslint-disable-next-line prettier/prettier
@Table({
  timestamps: false,
  paranoid: false,
  tableName: 'user_theme',
})
export class UserTheme extends Model<TUserTheme> {
  @AllowNull(false)
  @PrimaryKey
  @Unique
  @Column(DataType.INTEGER)
  user_id: number;

  @ForeignKey(() => SiteTheme)
  @AllowNull(false)
  @Column(DataType.STRING)
  theme_name: string;
}