import Service from '@ember/service';

export const enum AnnounceTone {
  Off = 'off',
  Polite = 'polite',
  Assertive = 'assertive',
}

export default class A11yAnnouncerService extends Service {
  message: string;
  announceMessage?: string;
  announceTone: AnnounceTone;
  announce(message: string, tone: AnnounceTone): void;
}

declare module '@ember/service' {
  interface Registry {
    announcer: A11yAnnouncerService;
  }
}
