<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class ProductsSeeder extends Seeder
{
    public function run()
    {
        $model = model('ProductModel');
        
        $data = [
            'pd_code'  => '2222222222222',
            'pd_name'  => 'sample',
            'pd_buy'   => '10',
            'pd_sale'  => '12',
            'stock'    => '100',
            'category' => '1',
            'pd_image' => 'sample_product_img.png',
            'details'  => 'sampleproduct',
        ];
        $model->insert($data);
        
    }
}
