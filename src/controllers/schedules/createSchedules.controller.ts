import { Request, Response } from "express";
import { IScheduleRequest } from "../../interfaces/schedules";
import createSchedulesService from "../../services/schedules/createSchedules.service";

const createSchedulesController = async (req: Request, res: Response) => {
  const data: IScheduleRequest = req.body;
  const connectedUser: any = req.user;
  const scheduling = await createSchedulesService(data, connectedUser);

  return res.status(201).json({
    message: scheduling
  });
}

export default createSchedulesController;