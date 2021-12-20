<?php
namespace App\Controllers;

use App\Models\UserModel;
use CodeIgniter\API\ResponseTrait;

class Resetpassword extends BaseController
{
    use ResponseTrait;
    public function __construct()
    {
        $this->UserModel = new UserModel();
    }
    //--------------------------------------------------------

    //--------------------------------------------------------
    public function index()
    {
        return 'resetpassword/index';
    }
    //--------------------------------------------------------

    //--------------------------------------------------------
    public function changpassword()
    {
        if ($this->request->getMethod() === 'post') {
            $password = $this->request->getPost('password');
            $token    = $this->request->getPost('token');
            $code     = $this->request->getPost('code');
            $data     = $this->UserModel
                ->where('reset_hash', $token)
                ->where('reset_expires >', time())
                ->first();
            if ($data) {
                if ($data['code_reset'] === $code) {
                    helper('HashPassword');
                    $salt       = Salt();
                    $dataupdate = [
                        'password'      => Hash_password($password, $salt),
                        'salt'          => $salt,
                        'code_reset'    => '',
                        'reset_hash'    => '',
                        'reset_expires' => '',
                    ];
                    $this->UserModel->update($data['u_id'], $dataupdate);
                    return $this->respondUpdated(['success' => true]);

                } else {
                    return $this->respond(['exit_code' => true]);
                }
            } else {
                return $this->respond(['exit_time' => true]);
            }
        } else {
            return redirect()->to('/login');
        }
    }
    //--------------------------------------------------------
}
