<?php
namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class Products extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'pd_id'      => [
                'type'           => 'INT',
                'auto_increment' => true,
            ],
            'pd_code'    => [
                'type'       => 'VARCHAR',
                'constraint' => '20',
                'unique'     => true,
            ],
            'pd_name'    => [
                'type'       => 'VARCHAR',
                'constraint' => '100',
            ],
            'pd_buy'     => [
                'type'       => 'DECIMAL',
                'constraint' => '6,2',
            ],
            'pd_sale'    => [
                'type'       => 'DECIMAL',
                'constraint' => '6,2',
            ],
            'stock'      => [
                'type' => 'INT',
            ],
            'unit'       => [
                'type'       => 'VARCHAR',
                'constraint' => '55',
            ],
            'details'    => [
                'type'       => 'VARCHAR',
                'constraint' => '255',
            ],
            'pd_image'   => [
                'type'       => 'VARCHAR',
                'constraint' => '255',
            ],
            'category'   => [
                'type' => 'INT',
            ],
            'supplier'   => [
                'type' => 'INT',
            ],
            'created_at' => [
                'type' => 'DATETIME',
            ],
            'updated_at' => [
                'type' => 'DATETIME',
            ],
            'deleted_at' => [
                'type' => 'DATETIME',
                'null' => true,
            ],
        ]);
        $this->forge->addKey('pd_id', true);
        $this->forge->createTable('products', true);
    }

    public function down()
    {
        $this->forge->dropTable('products');
    }
}
