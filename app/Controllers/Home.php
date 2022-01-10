<?php

namespace App\Controllers;

use App\Models\SettingModel;
use CodeIgniter\API\ResponseTrait;

class Home extends BaseController
{
    use ResponseTrait;
    public function __construct()
    {
        
        $this->SettingModel       = new SettingModel();
    }
    public function index()
    {
        return view('Home');
    }

    public function qrcode_img()
    {
        $img = $this->SettingModel->where(['_id' => 1])->first(); 
        return file_get_contents(WRITEPATH . 'uploads/qrcode/'.$img->setting_bank_qrcode);
    }
    public function test()
    {
        return $this->respond($this->SettingModel->findAll());
    }
    public function testadd()
    {
        $this->SettingModel->update('1',['setting_bank_qrcode'=> 'qrcode.png']);
        return $this->respond($this->SettingModel->findAll());
    }
}
