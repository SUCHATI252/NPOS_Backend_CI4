<?php
namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class Payments extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'pay_id'         => [
                'type'           => 'INT',
                'auto_increment' => true,
            ],
            'pay_type'       => [
                'type'       => 'VARCHAR',
                'constraint' => '50',
            ],
            'pay_details'    => [
                'type'       => 'VARCHAR',
                'constraint' => '100',
            ],
            'created_at' => [
                'type' => 'DATETIME',
            ],
            'updated_at' => [
                'type' => 'DATETIME',
            ],
        ]);
        $this->forge->addKey('pay_id', true);
        $this->forge->createTable('payments', true);
    }

    //--------------------------------------------------------------------

    public function down()
    {
        $this->forge->dropTable('payments');
    }
}
