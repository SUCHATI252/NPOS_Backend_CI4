<?php

namespace Config;

// Create a new instance of our RouteCollection class.
$routes = Services::routes();

// Load the system's routing file first, so that the app and ENVIRONMENT
// can override as needed.
if (file_exists(SYSTEMPATH . 'Config/Routes.php')) {
    require SYSTEMPATH . 'Config/Routes.php';
}

/*
 * --------------------------------------------------------------------
 * Router Setup
 * --------------------------------------------------------------------
 */
$routes->setDefaultNamespace('App\Controllers');
$routes->setDefaultController('Home');
$routes->setDefaultMethod('index');
$routes->setTranslateURIDashes(false);
$routes->set404Override();
$routes->setAutoRoute(true);

/*
 * --------------------------------------------------------------------
 * Route Definitions
 * --------------------------------------------------------------------
 */

// We get a performance increase by specifying the default
// route since we don't have to scan directories.
$routes->get('/', 'Home::index');
$routes->get('{locale}/', 'Home::index');

$routes->get('/login', 'Login::index');
$routes->get('{locale}/login', 'Login::index');

$routes->get('/forgotpassword', 'Forgotpassword::index');
$routes->get('{locale}/forgotpassword', 'Forgotpassword::index');

$routes->get('/resetpassword', 'Resetpassword::index');
$routes->get('{locale}/resetpassword', 'Resetpassword::index');

$routes->get('/sales', 'Sales::index');
$routes->get('{locale}/sales', 'Sales::index');


$routes->group('dashboards', function ($routes) {
    $routes->get('/', 'Dashboard::index');
    $routes->get('dashboard', 'Dashboard::index');
    $routes->get('users', 'Dashboard::users');
    $routes->get('users/profile', 'Dashboard::usersprofile');
    $routes->get('stores', 'Dashboard::stores');
    $routes->get('customers', 'Dashboard::customers');
    $routes->get('listsales', 'Dashboard::listsales');
    $routes->get('report', 'Dashboard::report');
    $routes->get('stores/recyclebin', 'Dashboard::storesrecyclebin');
});

$routes->group('{locale}/dashboards', function ($routes) {
    $routes->get('/', 'Dashboard::index');
    $routes->get('dashboard', 'Dashboard::index');
    $routes->get('users', 'Dashboard::users');
    $routes->get('users/profile', 'Dashboard::usersprofile');
    $routes->get('stores', 'Dashboard::stores');
    $routes->get('customers', 'Dashboard::customers');
    $routes->get('listsales', 'Dashboard::listsales');
    $routes->get('report', 'Dashboard::report');
    $routes->get('stores/recyclebin', 'Dashboard::storesrecyclebin');
});

// $routes->get('{locale}/dashboards/', 'Dashboard::index');
// $routes->get('{locale}/dashboards/users', 'Dashboard::users');
// $routes->get('{locale}/dashboards/users/profile', 'Dashboard::usersprofile');
// $routes->get('{locale}/dashboards/stores', 'Dashboard::stores');
// $routes->get('{locale}/dashboards/customers', 'Dashboard::customers');
// $routes->get('{locale}/dashboards/listsales', 'Dashboard::listsales');
// $routes->get('{locale}/dashboards/report', 'Dashboard::report');
// $routes->get('{locale}/dashboards/stores/recyclebin', 'Dashboard::storesrecyclebin');



/*
 * --------------------------------------------------------------------
 * Additional Routing
 * --------------------------------------------------------------------
 *
 * There will often be times that you need additional routing and you
 * need it to be able to override any defaults in this file. Environment
 * based routes is one such time. require() additional route files here
 * to make that happen.
 *
 * You will have access to the $routes object within that file without
 * needing to reload it.
 */
if (file_exists(APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php')) {
    require APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php';
}
