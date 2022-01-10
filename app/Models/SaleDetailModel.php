<?php
namespace App\Models;

use CodeIgniter\Model;

class SaleDetailModel extends Model
{
    protected $DBGroup          = 'default';
    protected $table            = 'saledetails';
    protected $primaryKey       = 'sd_id';
    protected $useAutoIncrement = true;
    protected $insertID         = 0;
    protected $returnType       = 'array';
    protected $protectFields    = true;
    protected $allowedFields    = [
        'sd_order',
        'sd_product',
        'sd_price',
        'qty',
    ];

    // Dates
    protected $useTimestamps = true;
    protected $dateFormat    = 'date';
    protected $createdField  = 'sd_date';
    protected $updatedField  = '';

    public function listsale_info($order)
    {
        $this->where('sd_order', $order);
        $this->join('products', 'products.pd_id = saledetails.sd_product');
        $this->select('products.pd_name, saledetails.qty, saledetails.sd_price');
        $data = $this->findAll();
        if ($data) {
            return $data;
        } else {
            return [];
        }
    }
}
