<?php
namespace App\Models;

use CodeIgniter\Model;

class ProductModel extends Model
{
    protected $DBGroup          = 'default';
    protected $table            = 'products';
    protected $primaryKey       = 'pd_id';
    protected $useAutoIncrement = true;
    protected $insertID         = 0;
    protected $returnType       = 'array';
    protected $protectFields    = true;
    protected $allowedFields    = [
        'pd_code',
        'pd_name',
        'pd_buy',
        'pd_sale',
        'stock',
        'unit',
        'details',
        'pd_image',
        'category',
        'supplier',
        'deleted_at',
    ];

    // Dates
    protected $useSoftDeletes = true;
    protected $useTimestamps  = true;
    protected $dateFormat     = 'datetime';
    protected $createdField   = 'created_at';
    protected $updatedField   = 'updated_at';
    protected $deletedField   = 'deleted_at';

    public function update_stock($id, $qty)
    {
        $this->set('stock', 'stock-"' . $qty . '"', false);
        $this->where('pd_id', $id);
        $query = $this->update();
        if ($query) {
            return true;
        } else {
            return false;
        }
    }
    public function add_stock($id, $qty)
    {
        $this->set('stock', 'stock+"' . $qty . '"', false);
        $this->where('pd_id', $id);
        $query = $this->update();
        if ($query) {
            return true;
        } else {
            return false;
        }
    }
}
