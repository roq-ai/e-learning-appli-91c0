import { GetQueryInterface } from 'interfaces';

export interface QuestionInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  difficulty_level?: number;

  _count?: {};
}

export interface QuestionGetQueryInterface extends GetQueryInterface {
  id?: string;
}
