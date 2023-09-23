import { GetQueryInterface } from 'interfaces';

export interface UserAssessmentInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface UserAssessmentGetQueryInterface extends GetQueryInterface {
  id?: string;
}
