import { GetQueryInterface } from 'interfaces';

export interface AnswerInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  feedback?: string;

  _count?: {};
}

export interface AnswerGetQueryInterface extends GetQueryInterface {
  id?: string;
  feedback?: string;
}
