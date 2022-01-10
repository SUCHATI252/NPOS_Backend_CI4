<?php
namespace App\Controllers;

use App\Models\CustomerModel;
use App\Models\SaleModel;
use CodeIgniter\API\ResponseTrait;

class Customers extends BaseController
{
    use ResponseTrait;
    public function __construct()
    {
        $this->CustomerModel = new CustomerModel();
        $this->SaleModel     = new SaleModel();
    }

    public function index()
    {
        if ($this->request->getMethod() === 'post') {
            return $this->respond(['customers' => $this->CustomerModel->findAll()]);
        } else {
            return redirect()->to('/login');
        }
    }

    public function findID()
    {
        if ($this->request->getMethod() === 'post') {
            $code = $this->request->getPost('code');
            $data = $this->CustomerModel->where('cus_code', $code)->first();
            if ($data) {
                if ($data['activate'] === '0') {
                    return $this->respond(['notactivate' => true]);
                } else {
                    return $this->respond(['success' => true, 'customer' => $data]);
                }
            } else {
                return $this->respond(['success' => false]);
            }
        } else {
            return redirect()->to('/login');
        }
    }

    public function history($id = null)
    {
        if ($this->request->getMethod() === 'put') {
            $data = $this->SaleModel->where('customer', $id)->findAll();
            if ($data) {
                return $this->respond(['success' => true, 'customer' => $data]);
            } else {
                return $this->respond(['success' => false]);
            }
        } else {
            return redirect()->to('/login');
        }
    }

    public function find_sale_customer()
    {
        if ($this->request->getMethod() === 'post') {
            $cus_code = $this->request->getPost('cus_code');
            $total    = $this->request->getPost('total');
            $data     = $this->CustomerModel->where('cus_code', $cus_code)->first();
            if ($data) {
                if ($data['activate'] === '0') {
                    return $this->respond(['notactivate' => true]);
                } elseif ($data['cus_cash'] < $total) {
                    return $this->respond(['error_cash' => true]);
                } else {
                    return $this->respond(['success' => true, 'id' => $data['cus_id']]);
                }
            } else {
                return $this->respond(['success' => false]);
            }
        } else {
            return redirect()->to('/login');
        }
    }

    public function register()
    {
        if ($this->request->getMethod() === 'post') {
            helper('form');
            $rulesemail = [
                'email' => 'required|valid_email|is_unique[customers.cus_email]',
            ];
            if (!$this->validate($rulesemail)) {
                return $this->respond(['error_email' => true]);
            } else {
                $name      = $this->request->getPost('name');
                $email     = $this->request->getPost('email');
                $phone     = $this->request->getPost('phone');
                $address   = $this->request->getPost('address');
                $runcode   = $this->Random_code(13);
                $checkcode = $this->CustomerModel->where('cus_code', $runcode)->first();
                if ($checkcode) {
                    $code = $runcode + 1;
                } else {
                    $code = $runcode;
                }
                $title     = 'YOUR ID Customer';
                $body      = 'ID :' . $code;
                $sendEMail = $this->SendMail($email, $title, $body);
                if ($sendEMail) {
                    $data = [
                        'cus_code'    => $code,
                        'cus_name'    => $name,
                        'cus_email'   => $email,
                        'cus_phone'   => $phone,
                        'cus_address' => $address,
                    ];
                    $this->CustomerModel->insert($data);
                    return $this->respondCreated(['success' => true]);
                } else {
                    return $this->respond(['success' => false]);
                }
            }

        } else {
            return redirect()->to('/login');
        }
    }

    public function activate($id = null)
    {
        if ($this->request->getMethod() === 'put') {
            $data = $this->CustomerModel->first($id);
            if ($data) {
                $dataupdate = ['activate' => '1'];
                $update     = $this->CustomerModel->update($id, $dataupdate);
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

    public function addcash()
    {
        if ($this->request->getMethod() === 'post') {
            $cash     = $this->request->getPost('cash');
            $cus_code = $this->request->getPost('cus_code');
            $data     = $this->CustomerModel->where('cus_code', $cus_code)->first();
            if ($data) {
                $update = $this->CustomerModel->add_cash($data['cus_id'], $cash);
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
}
