import { ObjectID } from 'typeorm';

class Notification {
  id: ObjectID;

  content: string;

  recipient_id: string;

  read: boolean;

  created_at: Date;

  updated_at: Date;
}

export default Notification;
