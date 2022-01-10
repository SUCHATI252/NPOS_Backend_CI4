<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class Backups extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id'          => [
                'type'           => 'INT',
                'auto_increment' => true,
            ],
            'filename'          => [
                'type'       => 'VARCHAR',
                'constraint' => '100',
            ],
            'created_at'    => [
                'type' => 'DATETIME',
            ],
            'updated_at'    => [
                'type' => 'DATETIME',
            ],
            'deleted_at'    => [
                'type' => 'DATETIME',
                'null' => true,
            ],
        ]);
        $this->forge->addKey('id', true);
        $this->forge->createTable('backups', true);
    }

    //--------------------------------------------------------------------

    public function down()
    {
        $this->forge->dropTable('backups');
    }
}
