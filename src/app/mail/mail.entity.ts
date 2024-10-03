export default class MailSchema {
  id: string;
  type: MailType;
  body: string;
  readed: boolean;
  subject: string;
  readedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}
enum MailType {
  FIRE = "FIRE",
  URGENT = "URGENT",
  NORMAL = "NORMAL",
}
