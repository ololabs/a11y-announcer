import Service from '@ember/service';

export const enum AnnounceTone {
  Off = 'off',
  Polite = 'polite',
  Aggressive = 'aggressive',
}

export default class A11yAnnouncerService extends Service {
  message: string;
  announceMessage?: string;
  announceTone: AnnounceTone;
}
