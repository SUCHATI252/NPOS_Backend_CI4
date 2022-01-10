<?php
namespace App\Models;

use CodeIgniter\Model;

class CustomerModel extends Model
{
    protected $DBGroup          = 'default';
    protected $table            = 'customers';
    protected $primaryKey       = 'cus_id';
    protected $useAutoIncrement = true;
    protected $insertID         = 0;
    protected $returnType       = 'array';
    protected $protectFields    = true;
    protected $allowedFields    = [
        'cus_email',
        'cus_code',
        'cus_name',
        'cus_cash',
        'cus_address',
        'cus_phone',
        'activate',
        'deleted_at',
    ];

    // Dates
    protected $useSoftDeletes = true;
    protected $useTimestamps  = true;
    protected $dateFormat     = 'datetime';
    protected $createdField   = 'created_at';
    protected $updatedField   = 'updated_at';
    protected $deletedField   = 'deleted_at';

    public function update_cash($id, $cash)
    {
        $this->set('cus_cash', 'cus_cash-"' . $cash . '"', false);
        $this->where('cus_id', $id);
        $query = $this->update();
        if ($query) {
            return true;
        } else {
            return false;
        }
    }
    public function add_cash($id, $cash)
    {
        $this->set('cus_cash', 'cus_cash+"' . $cash . '"', false);
        $this->where('cus_id', $id);
        $query = $this->update();
        if ($query) {
            return true;
        } else {
            return false;
        }
    }
}
