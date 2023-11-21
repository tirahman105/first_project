import { Request, Response } from 'express';
import { StudentServices } from './student.servie';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    // will call service function to send data

    const result = await StudentServices.createStudentIntoDB(studentData);

    //   send result

    res.status(200).json({
      success: true,
      message: 'student created successfully ',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const StudentControllers = {
  createStudent,
};
