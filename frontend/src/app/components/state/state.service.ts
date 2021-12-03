import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { State } from './state.model';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  baseUrl = "http://localhost:3001/states"
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  //dialog snakbar
  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(state: State): Observable<State> {
    return this.http.post<State>(this.baseUrl, state)
  }

  read(): Observable<State[]> {
    return this.http.get<State[]>(this.baseUrl);
  }
  readById(id: string): Observable<State> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<State>(url);
  }
  update(state: State): Observable<State> {
    const url = `${this.baseUrl}/${state.id}`
    return this.http.put<State>(url, state);
  }
  delete(state: State):Observable<State>{ 
     const url =  `${this.baseUrl}/${state.id}`
    return this.http.delete<State>(url);
  }
}