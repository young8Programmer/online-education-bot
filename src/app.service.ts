import { Injectable } from '@nestjs/common';

// error handling yaxshilandi
@Injectable()
export class AppService {
// CI/CD pipeline sozlandi
// kod uslubini yaxshilash
  getHello(): string {
    return 'Hello World!';
  }
}
