<?php

namespace App\Controllers;

use App\Models\SettingModel;
use CodeIgniter\API\ResponseTrait;

class Setting extends BaseController
{
    use ResponseTrait;
    public function __construct()
    {
        $this->SettingModel = new SettingModel();

    }
    public function index()
    {
        if ($this->request->getMethod() === 'post') {
            $setting_data = $this->SettingModel->where(['_id' => 1])->first();

            return $this->respond($setting_data);
        } else {
            return redirect()->to('login');
        }
    }

    public function update()
    {
        helper('filesystem');
        $img = $this->request->getFile('img');
        if (!$img->isValid()) {
            return $this->fail($img->getErrorString());
        }
        delete_files(WRITEPATH . 'uploads/qrcode/');
        $imgName = $img->getRandomName();
        $img->store('qrcode/', $imgName);

        $this->SettingModel->update('1', ['setting_bank_qrcode' => $imgName]);
        return $this->respond(['success' => true]);
    }

    public function qrcode_img()
    {
        $img = $this->SettingModel->where(['_id' => 1])->first();
        if ($img->setting_bank_qrcode) {
            return file_get_contents(WRITEPATH . 'uploads/qrcode/' . $img->setting_bank_qrcode);
        } else {
            return file_get_contents(WRITEPATH . 'uploads/sample/image.png');
        }
    }

    public function ENV() {
        $setting_data = $this->SettingModel->where(['_id' => 1])->first();
        helper('filesystem');
        $data = "";

        if ( ! write_file(__DIR__ . '/../../.env', $data, 'a')) {
            echo 'Unable to write the file';
        } else {
            echo 'File written!';
        }
    }
}
