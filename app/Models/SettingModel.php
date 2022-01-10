<?php

namespace App\Models;

use CodeIgniter\Model;

class SettingModel extends Model
{
    protected $DBGroup          = 'default';
    protected $table            = 'settings';
    protected $primaryKey       = '_id';
    protected $useAutoIncrement = true;
    protected $insertID         = 0;
    protected $returnType       = 'object';
    protected $protectFields    = true;
    protected $allowedFields    = [
        'setting_bank_qrcode',
        'email_protocol',
        'email_SMTPHost',
        'email_SMTPUser',
        'email_SMTPPass',
        'email_SMTPPort',
        'email_SMTPCrypto',
        'email_fromEmail',
        'email_fromName',
    ];

    // Dates
    protected $useTimestamps = true;
    protected $dateFormat    = 'datetime';
    protected $createdField  = 'created_at';
    protected $updatedField  = 'updated_at';
}
