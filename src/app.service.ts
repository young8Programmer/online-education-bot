import { Injectable } from '@nestjs/common';

// kod formatlash va indentatsiya
// error handling yaxshilandi
@Injectable()
export class AppService {
// CI/CD pipeline sozlandi
// kod uslubini yaxshilash
  getHello(): string {
    return 'Hello World!';
  }
}
