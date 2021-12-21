<?php

namespace App\Controllers;

class Dashboard extends BaseController
{
    public function index()
    {
      // $email = \Config\Services::email();
      // echo $email->protocol;
      $sendEMail = $this->SendMail('suchati28.1984@gmail.com', 'title2', 'body55555555009112');
      if ($sendEMail) {
        echo '1111111111';
      }

    }
}
