<?php
//----------------------------------------------------------
// Salt
function Salt()
{
    $raw_salt_len = 100;
    $buffer       = '';
    $bl           = strlen($buffer);
    for ($i = 0; $i < $raw_salt_len; $i++) {
        if ($i < $bl) {
            $buffer[$i] = $buffer[$i] ^ chr(mt_rand(0, 255));
        } else {
            $buffer .= chr(mt_rand(0, 255));
        }
    }
    $salt            = $buffer;
    $base64_digits   = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    $bcrypt64_digits = './ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    $base64_string   = base64_encode($salt);
    $salt            = strtr(rtrim($base64_string, '='), $base64_digits, $bcrypt64_digits);
    $salt            = substr($salt, 0, 100);
    return $salt;
}
//----------------------------------------------------------

//----------------------------------------------------------
// HashPassword
function Hash_Password($password, $salt)
{
    if (empty($password)) {
        return false;
    }
    return hash('sha512', $password . $salt);
}
//---------------------------------------------------------

//-----------------------------------------------------------
// Generat CODE
function Generat_code($num)
{
    $str        = "";
    $characters = array_merge(range('0', '9'));
    $max        = count($characters) - 1;
    for ($i = 0; $i < $num; $i++) {
        $rand = mt_rand(0, $max);
        $str .= $characters[$rand];
    }
    return $str;
}
