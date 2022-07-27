import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';


type TComment = {
  id: number;
  comment: string;
}

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

  @AllowNull(false)
  @Column(DataType.STRING)
  comment: string;
}