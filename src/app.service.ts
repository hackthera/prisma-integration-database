import { Injectable } from '@nestjs/common';

export type SystemUptime = {
  status: 'ok' | 'error';
  message: string;
  uptime: number;
  timestamp: string;
}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  reportSystemUptime(): SystemUptime {
    return {
      status: 'ok',
      message: 'System is up and running',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    }
  }
}
