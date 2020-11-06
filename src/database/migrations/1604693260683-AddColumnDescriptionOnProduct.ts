import { MigrationInterface, QueryRunner, Column, TableColumn } from "typeorm";

export class AddColumnDescriptionOnProduct1604693260683
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "products",
      new TableColumn({
        name: "description",
        type: "varchar",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("products", "description");
  }
}
