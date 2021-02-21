import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateTransactions1613918316155 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'transactions',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'value',
            type: 'decimal',
            precision: 10, //Serve para colocar quantos números cabem no lado esquedo da virgula: 1000000000
            scale: 2, //Serve para colocar quantos números cabem no lado direto da virgula: 100000000,02  
          },
          {
            name: 'type',
            type: 'varchar',  
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()', 
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('transactions')
  }

}
