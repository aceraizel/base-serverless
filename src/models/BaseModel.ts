export abstract class BaseModel {
  public id: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
