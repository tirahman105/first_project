import { z } from 'zod';

const userValidationSchema = z.object({
  //   id: z.string(), [it is auto generated. ]
  password: z
    .string({
      invalid_type_error: 'Password must be string',
    })
    .max(20, { message: 'Password cannot be more than 20 character' })
    .optional(),
  needsPasswordChange: z.boolean().optional(),
  role: z.enum(['student', 'faculty', 'admin']),
  //   status: z.enum(['in-progress', 'block']).default('in-progress'),
  //   isDeleted: z.boolean().optional().default(false),
});

export const UserValidation = {
  userValidationSchema,
};
