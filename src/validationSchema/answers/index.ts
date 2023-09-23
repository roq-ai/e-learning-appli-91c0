import * as yup from 'yup';

export const answerValidationSchema = yup.object().shape({
  feedback: yup.string().nullable(),
});
