import * as yup from 'yup';

export const questionValidationSchema = yup.object().shape({
  difficulty_level: yup.number().integer().nullable(),
});
