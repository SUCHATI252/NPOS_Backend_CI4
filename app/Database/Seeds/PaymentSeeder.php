<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class PaymentSeeder extends Seeder
{
    public function run()
    {
        $model = model('PaymentModel');
        
        $data =  [
            'pay_type'    => 'Cash',
            'pay_details' => 'เงินสด',
        ];
        $model->insert($data);

        $data1 = [
            'pay_type'    => 'Customer',
            'pay_details' => 'ลูกค้า', 
        ];
        $model->insert($data1);
    }
}
