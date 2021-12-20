<?php

namespace App\Controllers;

use App\Models\UserModel;
use CodeIgniter\API\ResponseTrait;

class Users extends BaseController
{
    use ResponseTrait;
    public function __construct()
    {
        $this->UserModel = new UserModel();
    }

    public function index()
    {
        if ($this->request->getMethod() === 'post') {
            return $this->respond(['users' => $this->UserModel->findAll()]);
        } else {
            return redirect()->to('login');
        }
    }

    public function Create()
    {
        if ($this->request->getMethod() === 'post') {
            helper('form');
            $rulesemail = [
                'email' => 'required|valid_email|is_unique[users.email]',
            ];

            if (!$this->validate($rulesemail)) {
                return $this->failResourceExists();
            } else {
                $input = $this->request->getPost();
                helper('HashPassword');
                helper('text');
                $salt       = Salt();
                $pass       = random_string('numeric', 8);
                $email      = $input['email'];
                $passhas    = Hash_password($pass, $salt);
                $idactivate = random_string('alnum', 32);
                $data       = [
                    'name'          => $input['name'],
                    'email'         => $email,
                    'password'      => $passhas,
                    'salt'          => $salt,
                    'phone'         => $input['phone'],
                    'activate_hash' => $idactivate,
                ];
                $title     = 'Activate User';
                $body      = 'Password :' . $pass . '<br><br><a href="' . site_url('login/activate/' . $idactivate) . '">Click activate</a>';
                $sendEMail = $this->SendMail($email, $title, $body);
                if ($sendEMail) {
                    $this->UserModel->insert($data);
                    return $this->respondCreated(['success' => true]);
                } else {
                    return $this->failForbidden();
                }
            }
        } else {
            return redirect()->to('/login');
        }
    }

    public function me()
    {
        if ($this->request->getMethod() === 'post') {
            $header = $this->request->getServer('HTTP_AUTHORIZATION');
            if ($header) {
                helper('JWT');
                $token = GetToken($header);
                $jwt   = JWT_decode($token);
                return $this->respond($jwt);
            } else {
                $this->failForbidden();
            }
        } else {
            return redirect()->to('login');
        }
    }

    public function Delete($id = null)
    {
        if ($this->request->getMethod() === 'delete') {
            $del = $this->UserModel->delete($id);
            if ($del) {
                return $this->respondDeleted(['success' => true]);
            } else {
                return $this->failNotFound();
            }
        } else {
            return redirect()->to('login');
        }
    }

    public function Permanentdelete($id = null)
    {
        if ($this->request->getMethod() === 'delete') {
            $del = $this->UserModel->delete($id, true);
            if ($del) {
                return $this->respondDeleted(['success' => true]);
            } else {
                return $this->failNotFound();
            }
        } else {
            return redirect()->to('login');
        }
    }

    public function Restore($id = null)
    {
        if ($this->request->getMethod() === 'put') {
            $update = $this->UserModel->update($id, ['deleted_at' => null]);
            if ($update) {
                return $this->respond(['success' => true]);
            } else {
                return $this->failNotFound();
            }
        } else {
            return redirect()->to('login');
        }
    }

    public function Unlock($id = null)
    {
        if ($this->request->getMethod() === 'put') {
            $data = $this->UserModel->find($id);
            if ($data) {
                $dataupdate = ['activate' => '1'];
                $update     = $this->UserModel->update($id, $dataupdate);
                if ($update) {
                    return $this->respond(['success' => true]);
                } else {
                    return $this->respond(['success' => false]);
                }
            } else {
                return $this->failNotFound('Item not found');
            }
        } else {
            return redirect()->to('/login');
        }
    }

    public function Count()
    {
        if ($this->request->getMethod() === 'post') {
            return $this->respond(['total' => $this->UserModel->selectCount('u_id', 'total')->findAll()[0]['total']]);
        } else {
            return redirect()->to('/login');
        }
    }
}
