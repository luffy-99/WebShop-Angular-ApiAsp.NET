import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router, private injector: Injector) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(req.url.indexOf('/oauth/token'));
        if (req.url.indexOf('/oauth/token') > 0) {
            req.clone({ setHeaders: { 'Content-Type': 'application/x-www-form-urlencoded' } });
            return next.handle(req);
        }
        if (localStorage.getItem('currentToken')) {
            return next.handle(this.modifyRequest(req))
                .catch(responseError => {
                    if (responseError instanceof HttpErrorResponse) {
                        switch (responseError.status) {
                            case 401:
                                localStorage.removeItem('currentToken');
                                this.router.navigate(['/login']);
                        }
                    }
                    return Observable.throw(responseError);
                });
        } else {
            this.router.navigate(['/login']);
        }
    }

    private modifyRequest(req) {
        return req.clone({ setHeaders: { 'authorization': 'Bearer ' + localStorage.getItem('currentToken') } });
    }
}
