import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()

export class ApiService {
    constructor(private http: Http) {}

    getAll(url: string): Observable<any[]> {
        return this.http.get(url).map((res: Response) => res.json());
    }
    getById(url: string, id: number): Observable<any> {
        return this.http.get(url + id).map((res: Response) => res.json());
    }
    Add(url: string, data: any): Observable<any> {
        return this.http.post(url, data).map((res: Response) => res.json());
    }
    Edit(url: string, data: any): Observable<any> {
        return this.http.put(url, data).map((res: Response) => res.json());
    }
}
