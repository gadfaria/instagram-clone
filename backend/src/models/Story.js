import Sequelize, { Model } from "sequelize";

class Story extends Model {
  static init(sequelize) {
    super.init(
      {
        userId: Sequelize.INTEGER,
        uuid: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: true,
        tableName: "Stories",
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "userId" });
  }
}

export default Story;
