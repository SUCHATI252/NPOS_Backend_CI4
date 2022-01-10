<?php
namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class Sales extends Migration
{
    public function up()
    {
        $this->forge->addField([
            's_id'       => [
                'type'           => 'INT',
                'auto_increment' => true,
            ],
            's_order'    => [
                'type'       => 'VARCHAR',
                'constraint' => '20',
                'unique'     => true,
            ],
            's_total'    => [
                'type'       => 'DECIMAL',
                'constraint' => '6,2',
            ],
            's_get'      => [
                'type'       => 'DECIMAL',
                'constraint' => '6,2',
            ],
            's_change'   => [
                'type'       => 'DECIMAL',
                'constraint' => '6,2',
            ],
            'payment'    => [
                'type'       => 'INT',
                'constraint' => '11',
            ],
            's_user'     => [
                'type'       => 'INT',
                'constraint' => '11',
            ],
            'customer'   => [
                'type'       => 'INT',
                'constraint' => '11',
            ],
            's_date'     => [
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
        $this->forge->addKey('s_id', true);
        $this->forge->createTable('sales', true);
    }

    //---------------------------------------------------------------

    public function down()
    {
        $this->forge->dropTable('sales');
    }
}
