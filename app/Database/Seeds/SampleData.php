<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class SampleData extends Seeder
{
    public function run()
    {
        $this->call('CategorySeeder');
        $this->call('CustomerSeeder');
        $this->call('PaymentSeeder');
        $this->call('ProductsSeeder');
        $this->call('UsersSeeder');

    }
}
