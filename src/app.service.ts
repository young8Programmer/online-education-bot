import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
// kod uslubini yaxshilash
  getHello(): string {
    return 'Hello World!';
  }
}
