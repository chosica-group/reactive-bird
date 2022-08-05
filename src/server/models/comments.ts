import {
  AllowNull,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';


type TComment = {
  id?: number;
  comment: string;
  topicId: number;
}

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
