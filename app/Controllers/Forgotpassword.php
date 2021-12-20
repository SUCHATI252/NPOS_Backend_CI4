<?php
namespace App\Controllers;

use App\Models\UserModel;
use CodeIgniter\API\ResponseTrait;

class Forgotpassword extends BaseController
{
    use ResponseTrait;
    public function __construct()
    {
        $this->UserModel = new UserModel();
    }
    
    public function index()
    {
        return 'forgotpassword';
    }
    
    public function sendcode()
    {
        if ($this->request->getMethod() === 'post') {
            $email = $this->request->getPost('email');
            $data  = $this->UserModel->where('email', $email)->first();
            if ($data) {
                if ($data['activate'] === '0') {
                    return $this->respond(['noactivate' => true]);
                }
                helper('HashPassword');
                helper('text');
                $code      = random_string('numeric', 6);
                $hash      = $data['u_id'] . random_string('alnum', 32);
                $title     = 'Code Reset';
                $body      = 'Code Reset Password :' . $code . '<br><br><a href="' . site_url('/resetpassword/?token=' . $hash) . '">Click to Reset</a>';
                $sendEMail = $this->SendMail($data['email'], $title, $body);
                if ($sendEMail) {
                    $dataupdate = [
                        'code_reset'    => $code,
                        'reset_hash'    => $hash,
                        'reset_expires' => time() + 300,
                    ];
                    $this->UserModel->update($data['u_id'], $dataupdate);
                    return $this->respond([
                        'success' => true,
                        'token'   => $hash,
                    ]);
                } else {
                    return $this->respond(['no_send' => true]);
                }
            } else {
                return $this->respond(['exit_email' => true]);
            }
        } else {
            return redirect()->to('/login');
        }
    }   
}
