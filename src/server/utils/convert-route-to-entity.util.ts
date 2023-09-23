const mapping: Record<string, string> = {
  answers: 'answer',
  assessments: 'assessment',
  'assessment-results': 'assessment_result',
  clients: 'client',
  questions: 'question',
  users: 'user',
  'user-assessments': 'user_assessment',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
