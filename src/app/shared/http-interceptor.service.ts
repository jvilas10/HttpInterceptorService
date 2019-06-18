import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      const authRquest = req.clone({
        setHeaders: {
          Authorization: 'Basic ' + btoa('absar' + ':' + 'hsn')
        }
      })
      return next.handle(authRquest)
        .pipe(
          tap(event => {
          }, error => {
          })
        )
  }
}
