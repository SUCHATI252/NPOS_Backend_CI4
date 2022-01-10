<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class CategorySeeder extends Seeder
{
    public function run()
    {
        $model = model('CategoryModel');
        
        $data = [
            'cat_name'    => 'General',
            'cat_details' => 'สิ้นค้าทั่วไป',
        ];
        $model->insert($data);
    }
}
