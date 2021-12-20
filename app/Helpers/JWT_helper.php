<?php
use Firebase\JWT\JWT;

function GetToken($authenticationHeader)
{
    if (is_null($authenticationHeader)) {
        throw new Exception('Missing or invalid JWT in request');
    }
    return explode(' ', $authenticationHeader)[1];
}

function validateToken(string $token)
{
    $key          = getenv('JWT_SECRET_KEY');
    $decodedToken = JWT::decode($token, $key, ['HS256']);
    if ($decodedToken->isLoggedIn) {
        return true;
    } else {
        return false;
    }
}
function JWT_decode(string $token)
{
    $key          = getenv('JWT_SECRET_KEY');
    $decodedToken = JWT::decode($token, $key, ['HS256']);
    return $decodedToken;
}

function JWT_encode(array $data)
{
    $issuedAtTime    = time();
    $tokenTimeToLive = getenv('JWT_TIME_TO_LIVE');
    $tokenExpiration = $issuedAtTime + $tokenTimeToLive;
    $key             = getenv('JWT_SECRET_KEY');
    $payload         = [
        'user'       => $data,
        'isLoggedIn' => true,
        'iat'        => $issuedAtTime,
        'exp'        => $tokenExpiration,
    ];
    $jwt = JWT::encode($payload, $key);
    return $jwt;
}
