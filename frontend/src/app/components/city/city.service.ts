import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { setFilterParams } from 'src/util/paramsBuilder';
import City from './city.model';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  baseUrl = "http://localhost:3001/citys/"
  constructor(private http: HttpClient) { }

  getCitysList(page: number, limit: number, param?: string): Observable<any> {
    let params = setFilterParams({
      page,
      limit,
      param: param == "" ? null : param
    });

    return this.http.get(`${this.baseUrl}${params}`);
  }

  getAllCity(): Observable<any> {
    return this.http.get(`${this.baseUrl}${'/all-economic-group'}`);
  }

  getCitySelect(param: string): Observable<any> {
    let params = setFilterParams({
      param: param === "" ? "" : param
    });
    return this.http.get(`${this.baseUrl}select/${params}`);
  }

  save(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, data);
  }

  editCity(data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}`, data);
  }
  deleteCity(data: any): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: {
        id: data.id,
      }
    }
    return this.http.delete(`${this.baseUrl}`, options);
  }
}
