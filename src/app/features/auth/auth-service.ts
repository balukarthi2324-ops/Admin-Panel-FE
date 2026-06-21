import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private http = inject(HttpClient);

  private readonly baseUrl = environment.API_URL;

  login(payload: { email: string;password: string;}): Observable<any> {

    return this.http.post(`${this.baseUrl}/auth/login`,payload)

  }

  
}
