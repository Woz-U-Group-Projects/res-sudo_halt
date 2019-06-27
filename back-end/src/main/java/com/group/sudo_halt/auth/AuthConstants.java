package com.group.sudo_halt.auth;

public class AuthConstants {
    public static final String SECRET = "kiminosiranaimonogatari";
    public static final long EXPIRATION_TIME = 86_400_000; // 1 day = 86,400 sec = 86,400,000 ms
    public static final String TOKEN_PREFIX = "Bearer "; // Bearer [token]
    public static final String HEADER_STRING = "Authorization";
    public static final String SIGN_UP_URL ="/api/user/register"; // route to register controller
}

