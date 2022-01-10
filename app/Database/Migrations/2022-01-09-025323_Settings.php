<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class Settings extends Migration
{
    public function up()
    {
        $this->forge->addField([
            '_id'          => [
                'type'           => 'INT',
                'auto_increment' => true
            ],
            'setting_bank_qrcode'          => [
                'type'       => 'VARCHAR',
                'constraint' => '255'
            ],
            'email_protocol'          => [
                'type'       => 'VARCHAR',
                'constraint' => '20',
                'default'    => 'smtp'
            ],
            'email_SMTPHost' => [
                'type'       => 'VARCHAR',
                'constraint' => '100',
                'default'    => 'smtp.googlemail.com'
            ],
            'email_SMTPUser' => [
                'type'       => 'VARCHAR',
                'constraint' => '100',
                'default'    => 'neeb252.12@gmail.com'
            ],
            'email_SMTPPass' => [
                'type'       => 'VARCHAR',
                'constraint' => '100',
                'default'    => 'Neeb282528252121984'
            ],
            'email_SMTPPort' => [
                'type'       => 'VARCHAR',
                'constraint' => '100',
                'default'    => '465'
            ],
            'email_SMTPCrypto' => [
                'type'       => 'VARCHAR',
                'constraint' => '100',
                'default'    => 'ssl'
            ],
            'email_fromEmail' => [
                'type'       => 'VARCHAR',
                'constraint' => '100',
                'default'    => 'admin@npos.com'
            ],
            'email_fromName' => [
                'type'       => 'VARCHAR',
                'constraint' => '100',
                'default'    => 'Admin'
            ],
            'created_at'    => [
                'type' => 'DATETIME'
            ],
            'updated_at'    => [
                'type' => 'DATETIME'
            ],
        ]);
        $this->forge->addKey('_id', true);
        $this->forge->createTable('settings', true);
    }

    //--------------------------------------------------------------------

    public function down()
    {
        $this->forge->dropTable('settings');
    }
}
