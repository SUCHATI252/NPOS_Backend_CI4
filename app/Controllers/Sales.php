<?php
namespace App\Controllers;

use App\Models\CustomerModel;
use App\Models\ProductModel;
use App\Models\SaleDetailModel;
use App\Models\SaleModel;
use CodeIgniter\API\ResponseTrait;

class Sales extends BaseController
{
    use ResponseTrait;
    public function __construct()
    {
        $this->CustomerModel   = new CustomerModel();
        $this->ProductModel    = new ProductModel();
        $this->SaledetailModel = new SaleDetailModel();
        $this->SaleModel       = new SaleModel();
    }

    public function index()
    {
        return view('sales/index');
    }

    public function listsales()
    {
        if ($this->request->getMethod() === 'post') {
            return $this->respond(['lists' => $this->SaleModel->listsales()]);
        } else {
            return redirect()->to('/login');
        }
    }

    public function listsale_info($order = null)
    {
        if ($this->request->getMethod() === 'put') {
            $data = $this->SaledetailModel->listsale_info($order);
            if ($data) {
                return $this->respond(['success' => true, 'listsale' => $data]);
            } else {
                return $this->respond(['success' => false]);
            }
        } else {
            return redirect()->to('/login');
        }
    }

    public function save_sale()
    {
        if ($this->request->getMethod() === 'post') {
            $ruleorder = [
                'order_no' => 'required|is_unique[sales.s_order]',
            ];
            if (!$this->validate($ruleorder)) {
                return $this->respond(['erorr_order' => true]);
            } else {
                $total    = $this->request->getPost('total');
                $customer = $this->request->getPost('cus');
                $data     = [
                    's_order'  => $this->request->getPost('order_no'),
                    's_total'  => $total,
                    's_get'    => $this->request->getPost('cash'),
                    's_change' => $this->request->getPost('chang_money'),
                    'customer' => $customer,
                    'payment'  => $customer > 1 ? 2 : 1,
                    's_user'   => $this->request->getPost('user'),
                ];

                $insertorder = $this->SaleModel->insert($data);
                if ($insertorder) {
                    if ($customer > 1) {
                        $this->CustomerModel->update_cash($customer, $total);
                    }
                    return $this->respond(['success' => true]);
                } else {
                    return $this->respond(['success' => false]);
                }
            }
        } else {
            return redirect()->to('/login');
        }
    }

    public function Save_sale_list()
    {
        if ($this->request->getMethod() === 'post') {
            $id       = $this->request->getPost('p_id');
            $order    = $this->request->getPost('order_no');
            $price    = $this->request->getPost('price');
            $qty      = $this->request->getPost('qty');
            $listdata = [
                'sd_order'   => $order,
                'sd_product' => $id,
                'sd_price'   => $price,
                'qty'        => $qty,
            ];
            $insert = $this->SaledetailModel->insert($listdata);
            if ($insert) {
                $this->ProductModel->update_stock($id, $qty);
                return $this->respond(['success' => true]);
            } else {
                return $this->respond(['msg' => 'NO Save']);
            }
        } else {
            return redirect()->to('/login');
        }
    }

    public function saletoday()
    {
        if ($this->request->getMethod() === 'post') {
            $data = $this->SaleModel->selectSum('s_total', 'total')->where('date(`s_date`)', date('Y-m-d'))->findAll();
            return $this->respond(['today' => $data[0]['total']]);
        } else {
            return redirect()->to('/login');
        }
    }

    public function saletomonth()
    {
        if ($this->request->getMethod() === 'post') {
            $data = $this->SaleModel->selectSum('s_total', 'total')->where('month(`s_date`)', date('m'))->findAll();
            return $this->respond(['tomonth' => $data[0]['total']]);
        } else {
            return redirect()->to('/login');
        }
    }

    public function saletoyear()
    {
        if ($this->request->getMethod() === 'post') {
            $data = $this->SaleModel->selectSum('s_total', 'total')->where('year(`s_date`)', date('Y'))->findAll();
            return $this->respond(['toyear' => $data[0]['total']]);
        } else {
            return redirect()->to('/login');
        }
    }

    public function chartmonth()
    {
        if ($this->request->getMethod() === 'post') {
            $this->SaleModel->select('day(s_date) as day');
            $this->SaleModel->selectSum('s_total', 'total');
            $this->SaleModel->where('month(s_date)', date('m'));
            $this->SaleModel->where('year(s_date)', date('Y'));
            $this->SaleModel->groupBy('day');
            return $this->respond(['month' => $this->SaleModel->findAll()]);
        } else {
            return redirect()->to('/login');
        }
    }

    public function chartyear()
    {
        if ($this->request->getMethod() === 'post') {
            $this->SaleModel->select('month(s_date) as month');
            $this->SaleModel->selectSum('s_total', 'total');
            $this->SaleModel->where('year(s_date)', date('Y'));
            $this->SaleModel->groupBy('month');
            return $this->respond(['year' => $this->SaleModel->findAll()]);
        } else {
            return redirect()->to('/login');
        }
    }

    public function productsaletoday()
    {
        if ($this->request->getMethod() === 'post') {
            $today = date('Y-m-d');
            $this->ProductModel->select('(
            SELECT sum(qty)
            FROM saledetails
            WHERE saledetails.sd_product = products.pd_id
            AND day(saledetails.sd_date) = ' . date('d') . '
          ) AS product_qty', false);
            $this->ProductModel->select('pd_name', 'pd_name');
            $this->ProductModel->orderBy('product_qty', 'DESC');
            $this->ProductModel->limit(5);
            return $this->respond(['products' => $this->ProductModel->findAll()]);
        } else {
            return redirect()->to('/login');
        }
    }

}
