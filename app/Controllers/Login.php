<?php
namespace App\Controllers;

use App\Models\UserModel;
use CodeIgniter\API\ResponseTrait;

class Login extends BaseController
{
    use ResponseTrait;
    public function __construct()
    {
        $this->UserModel = new UserModel();
    }

    public function index()
    {
        return view('login/index');
    }

    public function Check_Login()
    {
        if ($this->request->getMethod() === 'post') {
            $input    = $this->request->getPost();
            $email    = $input['email'];
            $password = $input['password'];
            $data     = $this->UserModel->where('email', $email)->first();

            if ($data && $email === $data['email']) {
                if ($data['activate'] === '0') {
                    return $this->respond(['no_activate' => true]);
                } else if ($data['activate'] === '2') {
                    return $this->respond(['is_locked' => true]);
                } else {
                    helper('HashPassword');
                    $passhas   = Hash_password($password, $data['salt']);
                    $checkpass = password_verify($passhas, $data['password']);
                    if ($checkpass) {
                        $userdata = [
                            'u_id'  => $data['u_id'],
                            'name'  => $data['name'],
                            'email' => $data['email'],
                            'phone' => $data['phone'],
                        ];
                        helper('JWT');
                        $token      = JWT_encode($userdata);
                        $dataupdate = ['login_at' => date('Y-m-d H:i:s')];
                        $this->UserModel->update($data['u_id'], $dataupdate);
                        // $this->Login_Notifiction($data['email']);

                        return $this->respond([
                            'success' => true,
                            'token'   => $token,
                        ]);
                    } else {
                        return $this->respond(['error_password' => true]);
                    }
                }
            } else {
                return $this->respond(['error_email' => true]);
            }
        } else {
            return redirect()->to('login');
        }
    }

    private function Login_Notifiction($email = null)
    {
        $title = 'NPOS Login Notifiction / แจ้งการล็อกอินบัญชีของคุณ';
        $body  = view('Notifiction/login_notifiction');
        if ($email) {
            $this->SendMail($email, $title, $body);
        }
    }
    public function test()
    {
        return view('Notifiction/login_notifiction');
    }

    public function Activate($id = null)
    {
        if (!empty($id)) {
            $data = $this->UserModel->where(['activate_hash' => $id, 'activate' => '0'])->first();
            if (is_null($data)) {
                return $this->failNotFound('Item not found');
            }
            $dataupdate = ['activate' => '1', 'activate_hash' => ''];
            $update     = $this->UserModel->update($data['u_id'], $dataupdate);
            if ($update) {
                return $this->respond('Activated successfully.');
            } else {
                return $this->respond('Failed to activate.');
            }
        } else {
            return redirect()->to('login');
        }
    }
    public function locked_user()
    {
        if ($this->request->getMethod() === 'post') {
            $user = $this->UserModel->where('email', $this->request->getPost('email'))->first();
            if ($user) {
                $this->UserModel->update($user['u_id'], ['activate' => '2']);
                return $this->respond(['success' => true]);
            } else {
                return $this->respond(['success' => false]);
            }
        } else {
            return redirect()->to('login');
        }
    }
}
