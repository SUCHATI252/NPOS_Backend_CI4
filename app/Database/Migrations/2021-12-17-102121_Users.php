<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class Users extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'u_id'          => [
                'type'           => 'INT',
                'auto_increment' => true
            ],
            'name'          => [
                'type'       => 'VARCHAR',
                'constraint' => '50'
            ],
            'email'         => [
                'type'       => 'VARCHAR',
                'constraint' => '100',
                'unique'     => true
            ],
            'password'      => [
                'type'       => 'VARCHAR',
                'constraint' => '100'
            ],
            'salt'          => [
                'type'       => 'VARCHAR',
                'constraint' => '100'
            ],
            'phone'         => [
                'type'       => 'VARCHAR',
                'constraint' => '20'
            ],
            'activate'      => [
                'type'       => 'ENUM',
                'constraint' => ['0', '1'],
                'default'    => '0'
            ],
            'activate_hash' => [
                'type'       => 'VARCHAR',
                'constraint' => '255'
            ],
            'code_reset'    => [
                'type'       => 'VARCHAR',
                'constraint' => '10'
            ],
            'reset_hash'    => [
                'type'       => 'VARCHAR',
                'constraint' => '255'
            ],
            'reset_expires'  => [
                'type' => 'INT'
            ],
            'login_at'      => [
                'type' => 'DATETIME',
                'null' => true
            ],
            'created_at'    => [
                'type' => 'DATETIME'
            ],
            'updated_at'    => [
                'type' => 'DATETIME'
            ],
            'deleted_at'    => [
                'type' => 'DATETIME',
                'null' => true
            ],
        ]);
        $this->forge->addKey('u_id', true);
        $this->forge->createTable('users', true);
    }

    //--------------------------------------------------------------------

    public function down()
    {
        $this->forge->dropTable('users');
    }
}
