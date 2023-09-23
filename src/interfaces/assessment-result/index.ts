import { GetQueryInterface } from 'interfaces';

export interface AssessmentResultInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface AssessmentResultGetQueryInterface extends GetQueryInterface {
  id?: string;
}
