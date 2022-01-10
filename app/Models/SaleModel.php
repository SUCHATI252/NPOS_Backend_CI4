<?php
namespace App\Models;

use CodeIgniter\Model;

class SaleModel extends Model
{
    protected $DBGroup          = 'default';
    protected $table            = 'sales';
    protected $primaryKey       = 's_id';
    protected $useAutoIncrement = true;
    protected $insertID         = 0;
    protected $returnType       = 'array';
    protected $protectFields    = true;
    protected $allowedFields    = [
        's_order',
        's_total',
        's_get',
        's_change',
        'payment',
        's_user',
        'customer',
    ];

    // Dates
    protected $useSoftDeletes = true;
    protected $useTimestamps  = true;
    protected $dateFormat     = 'datetime';
    protected $createdField   = 's_date';
    protected $updatedField   = 'updated_at';
    protected $deletedField   = 'deleted_at';

    public function listsales()
    {
        // 'left'
        $this->join('users', 'users.u_id = sales.s_user', );
        $this->join('customers', 'customers.cus_id = sales.customer');
        $this->join('payments', 'payments.pay_id = sales.payment');
        $this->select('sales.*');
        $this->select('users.name,users.u_id');
        $this->select('customers.cus_name,customers.cus_id');
        $this->select('payments.pay_type');
        return $this->findAll();
    }
}
