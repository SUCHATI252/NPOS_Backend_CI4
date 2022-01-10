<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class UsersSeeder extends Seeder
{
    public function run()
    {
        $model = model('UserModel');
        helper('HashPassword');
        $salt = Salt();
        $pass = '12345678';
        $data = [
            'name'     => 'Neeb',
            'email'    => 'suchati28.1984@gmail.com',
            'password' => Hash_password($pass, $salt),
            'salt'     => $salt,
            'phone'    => '0987654321',
            'activate' => '1',
        ];
        $model->insert($data);
    }
}
