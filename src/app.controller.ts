import { Controller, Get } from '@nestjs/common';
import { AppService, type SystemUptime } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('health')
  getSystemUptime(): SystemUptime {
    return this.appService.reportSystemUptime();
  }
}
