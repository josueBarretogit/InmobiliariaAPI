import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class VerifyMiddleware implements NestMiddleware {

  use(req: Request, res: Response, next: NextFunction) {
    const isVerified = false
    if (isVerified) {
      next()
    }
    return res.status(400).json({ response: "User is not verified" })
  }

}

