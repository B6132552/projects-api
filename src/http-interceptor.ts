import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
  } from '@nestjs/common';
  import { Observable } from 'rxjs';
  import { map } from 'rxjs/operators';
  import { Request } from 'express';
  
  export interface Response<T> {
    code: number;
    result?: T[];
    status: string;
  }
  
  @Injectable()
  export class TransformInterceptor<T>
    implements NestInterceptor<T, Response<T>>
  {
    intercept(
      context: ExecutionContext,
      next: CallHandler,
    ): Observable<Response<T>> {
      const req: Request = context.switchToHttp().getRequest();
      return next.handle().pipe(
        map((data) => {
          if (req.path === '/api/v1/crossbank/callback') {
            return data;
          }
          const res = {
            code: 200,
            status: 'success',
          };
          let result = {};
          if (data) {
            result = { result: data };
          }
          return {
            ...res,
            ...result,
          };
        }),
      );
    }
  }
  