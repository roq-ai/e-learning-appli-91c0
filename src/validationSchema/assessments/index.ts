import * as yup from 'yup';

export const assessmentValidationSchema = yup.object().shape({
  assessment_status: yup.string().nullable(),
});
