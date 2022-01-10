<?php
namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class Categorys extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'cat_id'         => [
                'type'           => 'INT',
                'auto_increment' => true,
            ],
            'cat_name'       => [
                'type'       => 'VARCHAR',
                'constraint' => '50',
                'unique'     => true,
            ],
            'cat_details'    => [
                'type'       => 'VARCHAR',
                'constraint' => '100',
            ],
            'cat_created_at' => [
                'type' => 'DATETIME',
            ],
            'cat_updated_at' => [
                'type' => 'DATETIME',
                'null' => true,
            ],
        ]);
        $this->forge->addKey('cat_id', true);
        $this->forge->createTable('categorys', true);
    }

    //---------------------------------------------------------------

    public function down()
    {
        $this->forge->dropTable('categorys');
    }
}
