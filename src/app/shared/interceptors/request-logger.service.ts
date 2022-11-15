import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class RequestLoggerService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // throw new Error('Method not implemented.');
    console.log('started');
    
    const userId = '21';
    const modifiedReq = req.clone({
      headers: req.headers.set('Authorization', `Beaarer ${userId}`)
    });
    return next.handle(modifiedReq).pipe()
  }
}
