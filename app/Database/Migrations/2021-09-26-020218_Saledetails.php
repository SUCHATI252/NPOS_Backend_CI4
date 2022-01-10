<?php
namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class Saledetails extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'sd_id'      => [
                'type'           => 'INT',
                'auto_increment' => true,
            ],
            'sd_order'   => [
                'type'       => 'VARCHAR',
                'constraint' => '20',
            ],
            'sd_product' => [
                'type'       => 'INT',
                'constraint' => '11',
            ],
            'sd_price'   => [
                'type'       => 'DECIMAL',
                'constraint' => '6,2',
            ],
            'qty'        => [
                'type'       => 'INT',
                'constraint' => '11',
            ],
            'sd_date'    => [
                'type' => 'DATE',
            ],
        ]);
        $this->forge->addKey('sd_id', true);
        $this->forge->createTable('saledetails', true);
    }

    //---------------------------------------------------------------

    public function down()
    {
        $this->forge->dropTable('saledetails');
    }
}
