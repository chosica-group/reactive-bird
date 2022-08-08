
import {
  AllowNull,
  Column,
  DataType,
  Index,
  Model,
  Table,
  PrimaryKey,
  Unique,
} from 'sequelize-typescript';
import type { TSiteTheme } from './types';

// eslint-disable-next-line prettier/prettier
@Table({
  timestamps: false,
  paranoid: false,
  tableName: 'site_theme',
})
export class SiteTheme extends Model<TSiteTheme> {
  @Index
  @AllowNull(false)
  @Unique
  @Column(DataType.STRING)
  theme_name: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  theme_background_color: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  theme_header_text_color: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  theme_text_color: string;

  @Index
  @PrimaryKey
  @AllowNull(false)
  @Unique
  @Column(DataType.INTEGER)
  theme_id: number;
}