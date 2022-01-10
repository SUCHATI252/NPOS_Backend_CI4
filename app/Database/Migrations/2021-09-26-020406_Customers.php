<?php
namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class Customers extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'cus_id'      => [
                'type'           => 'INT',
                'auto_increment' => true,
            ],
            'cus_email'   => [
                'type'       => 'VARCHAR',
                'constraint' => '100',
            ],
            'cus_code'    => [
                'type'       => 'VARCHAR',
                'constraint' => '20',
                'unique'     => true,
            ],
            'cus_name'    => [
                'type'       => 'VARCHAR',
                'constraint' => '100',
            ],
            'cus_cash'    => [
                'type'       => 'DECIMAL',
                'constraint' => '6,2',
            ],
            'cus_address' => [
                'type'       => 'VARCHAR',
                'constraint' => '255',
            ],
            'cus_phone'   => [
                'type'       => 'VARCHAR',
                'constraint' => '20',
            ],
            'activate'     => [
                'type'       => 'ENUM',
                'constraint' => ['0', '1'],
                'default'    => '0',
            ],
            'created_at'  => [
                'type' => 'DATETIME',
            ],
            'updated_at'  => [
                'type' => 'DATETIME',
            ],
            'deleted_at'  => [
                'type' => 'DATETIME',
                'null' => true,
            ],
        ]);
        $this->forge->addKey('cus_id', true);
        $this->forge->createTable('customers', true);
    }

    public function down()
    {
        $this->forge->dropTable('customers');
    }
}
