import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {
    constructor(private httpClient: HttpClient) { }
    Login(userName: string, password: string): Observable<any> {
        const data = 'grant_type=password&username=' + userName + '&password=' + password;
        return this.httpClient.post('http://localhost:11544/oauth/token', data);
    }
}
