import { GetQueryInterface } from 'interfaces';

export interface AssessmentInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  assessment_status?: string;

  _count?: {};
}

export interface AssessmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  assessment_status?: string;
}
