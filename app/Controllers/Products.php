<?php
namespace App\Controllers;

use App\Models\ProductModel;
use CodeIgniter\API\ResponseTrait;

class Products extends BaseController
{
    use ResponseTrait;
    public function __construct()
    {
        $this->ProductModel = new ProductModel();
    }

    public function index()
    {
        if ($this->request->getMethod() === 'post') {
            $this->ProductModel->join('categorys', 'products.category = categorys.cat_id', 'left');
            $this->ProductModel->select('products.*');
            $this->ProductModel->select('categorys.cat_name');
            return $this->respond(['products' => $this->ProductModel->findAll()]);
        } else {
            return redirect()->to('/login');
        }
    }

    public function create()
    {
        if ($this->request->getMethod() === 'post') {
            helper('form');
            $rulecode = ['p_code' => 'required|is_unique[products.pd_code]'];
            $ruleimg  = [
                'pd_image' => 'uploaded[pd_image]|max_size[pd_image,4096]|is_image[pd_image]',
            ];

            if (!$this->validate($rulecode)) {
                return $this->respond(['error_code' => true]);
            } elseif (!$this->validate($ruleimg)) {
                return $this->respond(['erorr_img' => true]);
            } else {
                $p_img = $this->request->getFile('pd_image');
                if (!$p_img->isValid()) {
                    return $this->fail($p_img->getErrorString());
                }

                $imgName = $p_img->getRandomName();
                $p_img->store('products/', $imgName);
                $data = [
                    'pd_code'  => $this->request->getPost('p_code'),
                    'pd_name'  => $this->request->getPost('p_name'),
                    'pd_buy'   => $this->request->getPost('cost_price'),
                    'pd_sale'  => $this->request->getPost('sale_price'),
                    'stock'    => $this->request->getPost('stock'),
                    'category' => $this->request->getPost('category'),
                    'pd_image' => $imgName,
                    'details'  => $this->request->getPost('p_details'),
                ];

                $insert = $this->ProductModel->insert($data);
                if ($insert) {
                    return $this->respondCreated(['success' => true]);
                } else {
                    return $this->respond(['success' => false]);
                }
            }
        } else {
            return redirect()->to('/login');
        }
    }

    public function update($id = null)
    {
        if ($this->request->getMethod() === 'post') {
            $data = [
                'pd_name'  => $this->request->getPost('p_name'),
                'pd_buy'   => $this->request->getPost('cost_price'),
                'pd_sale'  => $this->request->getPost('sale_price'),
                'stock'    => $this->request->getPost('stock'),
                'category' => $this->request->getPost('category'),
                'details'  => $this->request->getPost('p_details'),
            ];

            $update = $this->ProductModel->update($id, $data);
            if ($update) {
                return $this->respondUpdated(['success' => true]);
            } else {
                return $this->respond(['success' => false]);
            }
        } else {
            return redirect()->to('/login');
        }
    }

    public function delete($id = '',)
    {
        if ($this->request->getMethod() === 'delete') {
            $data = $this->ProductModel->find($id);
            if ($data) {
                $this->ProductModel->delete($id);
                return $this->respondDeleted(['success' => true]);
            } else {
                return $this->failNotFound('Item not found');
            }
        } else {
            return redirect()->to('/login');
        }
    }

    public function productbycategory($catid = '')
    {
        if ($this->request->getMethod() === 'put') {
            $this->ProductModel->where('category', $catid);
            $this->ProductModel->join('categorys', 'products.category = categorys.cat_id', 'left');
            $data = $this->ProductModel->findAll();
            if ($data) {
                return $this->respond(['success' => true, 'products' => $data]);
            } else {
                return $this->respond(['success' => false]);
            }
        } else {
            return redirect()->to('/login');
        }
    }

    public function find_product($code = null)
    {
        if ($this->request->getMethod() === 'put') {
            $data = $this->ProductModel->where('pd_code', $code)->first();
            if ($data) {
                if ($data['stock'] <= 1) {
                    return $this->respond(['outstock' => true]);
                } else {
                    return $this->respond(['success' => true, 'product' => $data]);
                }
            } else {
                return $this->respond(['success' => false]);
            }
        } else {
            return redirect()->to('/login');
        }
    }

    public function Image($img = '')
    {
        if ($img) {
            return file_get_contents(WRITEPATH . 'uploads/products/' . $img);
        } else {
            return file_get_contents(WRITEPATH . 'uploads/sample/no-products-found.jpg');
        }
    }

    public function count()
    {
        if ($this->request->getMethod() === 'post') {
            return $this->respond(['total' => $this->ProductModel->selectCount('pd_id', 'total')->findAll()[0]['total']]);
        } else {
            return redirect()->to('/login');
        }
    }

    public function notification()
    {
        if ($this->request->getMethod() === 'post') {
            $this->ProductModel->selectCount('stock');
            return $this->respond(['stock' => $this->ProductModel->where('stock <=', 10)->findAll()[0]['stock']]);

        } else {
            return redirect()->to('/login');
        }
    }

    public function notificationItem()
    {
        if ($this->request->getMethod() === 'post') {
            return $this->respond(['list' => $this->ProductModel->where('stock <=', 10)->findAll()]);
        } else {
            return redirect()->to('/login');
        }
    }

    public function add_stock($id)
    {
        if ($this->request->getMethod() === 'post') {
            $update = $this->ProductModel->add_stock($id, $this->request->getPost('qty'));
            if ($update) {
                return $this->respondUpdated(['success' => true]);
            } else {
                return $this->respond(['success' => false]);
            }
        } else {
            return redirect()->to('/login');
        }
    }

    public function recyclebin()
    {
        if ($this->request->getMethod() === 'post') {
            $this->ProductModel->join('categorys', 'products.category = categorys.cat_id', 'left');
            $this->ProductModel->select('products.*');
            $this->ProductModel->select('categorys.cat_name');
            return $this->respond(['products' => $this->ProductModel->onlyDeleted()->findAll()]);
        } else {
            return redirect()->to('/login');
        }
    }
    
    public function delete_recyclebin($id = '', $code = '')
    {
        if ($this->request->getMethod() === 'delete') {
            $data = $this->ProductModel->onlyDeleted()->find($id);
            if ($data) {
                if ($code === $data['pd_code']) {
                    if ($data['pd_image']) {
                        unlink(WRITEPATH . 'uploads/products/' . $data['pd_image']);
                    }
                    $this->ProductModel->delete($id, true);
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

    public function Restore($id = null)
    {
        if ($this->request->getMethod() === 'post') {
            if ($id) {
                $update = $this->ProductModel->update($id, ['deleted_at' => NULL]);
                if ($update) {
                    return $this->respondUpdated(['success' => true]);
                } else {
                    return $this->respond(['success' => false]);
                }
            }
        } else {
            return redirect()->to('/login');
        }
    }
}
