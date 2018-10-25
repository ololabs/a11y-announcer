import Service from "@ember/service";

export type AnnounceTone = "off" | "polite" | "assertive";

export default class A11yAnnouncerService extends Service {
  message: string;
  announceMessage?: string;
  announceTone: AnnounceTone;
  announce(message: string, tone: AnnounceTone): void;
}

declare module "@ember/service" {
  interface Registry {
    announcer: A11yAnnouncerService;
  }
}
