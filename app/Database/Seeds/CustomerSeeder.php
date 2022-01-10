<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class CustomerSeeder extends Seeder
{
    public function run()
    {
        $model = model('CustomerModel');
        
        $data = [
            'cus_code'    => '12345678',
            'cus_name'    => 'samplecustomer',
            'cus_email'   => 'sample@email.com',
            'cus_cash'    => '1000',
            'activate'    => '1',
            'cus_phone'   => '01012345678',
            'cus_address' => 'sampleAddress',
        ];
        $model->insert($data);

        $data1 = [
            'cus_code'    => '123456789',
            'cus_name'    => 'samplecustomer',
            'cus_email'   => 'sample@email.com',
            'cus_cash'    => '1000',
            'activate'    => '1',
            'cus_phone'   => '01012345678',
            'cus_address' => 'sampleAddress',
        ];
        $model->insert($data1);
    }
}
