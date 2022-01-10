<?php
namespace App\Controllers;

use App\Models\CategoryModel;
use CodeIgniter\API\ResponseTrait;

class Categorys extends BaseController
{
    use ResponseTrait;
    public function __construct()
    {
        $this->CategoryModel = new CategoryModel();
    }

    public function index()
    {
        if ($this->request->getMethod() === 'post') {
            return $this->respond(['categorys' => $this->CategoryModel->findAll()]);
        } else {
            return redirect()->to('/login');
        }
    }

    public function create()
    {
        if ($this->request->getMethod() === 'post') {
            helper('form');
            $rule = ['cat_name' => 'required|is_unique[categorys.cat_name]'];

            if (!$this->validate($rule)) {
                $result['erorr_name'] = true;
            } else {
                $data = [
                    'cat_name'    => $this->request->getPost('cat_name'),
                    'cat_details' => $this->request->getPost('cat_details'),
                ];
                $insert = $this->CategoryModel->insert($data);
                if ($insert) {
                    return $this->respond(['success' => true]);
                } else {
                    return $this->respond(['success' => false]);
                }
            }
        } else {
            return redirect()->to('/login');
        }
    }

    public function update($id = '')
    {
        if ($this->request->getMethod() === 'post') {
            $data = [
                'cat_name'    => $this->request->getPost('cat_name'),
                'cat_details' => $this->request->getPost('cat_details'),
            ];
            $update = $this->CategoryModel->update($id, $data);
            if ($update) {
                return $this->respondUpdated(['success' => true]);
            } else {
                return $this->respond(['success' => false]);
            }
        } else {
            return redirect()->to('/login');
        }
    }

    public function delete($id = '', $name = '')
    {
        if ($this->request->getMethod() === 'delete') {
            $data = $this->CategoryModel->find($id);
            if ($data) {
                if ($name === $data['cat_name']) {
                    $this->CategoryModel->delete($id);
                    return $this->respondDeleted(['success' => true]);
                } else {
                    return $this->respond(['error_code' => true]);
                }
            } else {
                return $this->failNotFound('Item not found');
            }
        } else {
            return redirect()->to('/login');
        }
    }
}
