import { join } from 'path';
import { Controller, Get, Next, Req, Res } from '@nestjs/common';
import { Response, NextFunction, Request } from 'express';

@Controller()
export class AppController {
  @Get()
  root(@Res() res: Response, @Next() next: NextFunction, @Req() req: Request) {
    if (req.path.match(/(graphql|api)/)) {
      return next();
    }
    res.sendFile(join(process.cwd(), '/client/index.html'));
  }
}
