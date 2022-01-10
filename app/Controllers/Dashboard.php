<?php

namespace App\Controllers;


class Dashboard extends BaseController
{
    public function index()
    {
        return view('dashboards/index');
    }
    public function users()
    {
        return view('dashboards/users/index');
    }
    public function usersprofile()
    {
        return view('dashboards/users/profile/index');
    }
    public function stores()
    {
        return view('dashboards/stores/index');
    }
    public function storesrecyclebin()
    {
        return view('dashboards/stores/recyclebin/index');
    }
    public function customers()
    {
        return view('dashboards/customers/index');
    }
    public function listsales()
    {
        return view('dashboards/listsales/index');
    }
    public function report()
    {
        return view('dashboards/report/index');
    }
}
