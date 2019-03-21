import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes(environment.apiUrl)) {
      const paramReq = req.clone({
        params: req.params
          .set('api_key', environment.api_key)
          .set('language', 'ru')
      });
      return next.handle(paramReq);
    }
    return next.handle(req);
  }
}
