import { Injectable, Injector } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private injector: Injector) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    const authService = this.injector.get(AuthService); // Manually get the AuthService
    const router = this.injector.get(Router); // Manually get the Router
    if(token) {
      request = request.clone({
        setHeaders: {Authorization: `Token ${token}`}
      });
    }
    return next.handle(request).pipe(
      catchError((error) =>{
        if(error instanceof HttpErrorResponse) {
          if(error.status === 401) {
          router.navigateByUrl('login/')
          }
        }
        return throwError(() =>(error))

      })
    );
  }
}
