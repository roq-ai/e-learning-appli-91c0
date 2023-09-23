import axios from 'axios';
import queryString from 'query-string';
import { AssessmentResultInterface, AssessmentResultGetQueryInterface } from 'interfaces/assessment-result';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getAssessmentResults = async (
  query?: AssessmentResultGetQueryInterface,
): Promise<PaginatedInterface<AssessmentResultInterface>> => {
  const response = await axios.get('/api/assessment-results', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createAssessmentResult = async (assessmentResult: AssessmentResultInterface) => {
  const response = await axios.post('/api/assessment-results', assessmentResult);
  return response.data;
};

export const updateAssessmentResultById = async (id: string, assessmentResult: AssessmentResultInterface) => {
  const response = await axios.put(`/api/assessment-results/${id}`, assessmentResult);
  return response.data;
};

export const getAssessmentResultById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/assessment-results/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteAssessmentResultById = async (id: string) => {
  const response = await axios.delete(`/api/assessment-results/${id}`);
  return response.data;
};
