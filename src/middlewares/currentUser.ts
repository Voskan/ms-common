import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";
import { UserPayload } from "../types/types";

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Bearer ")
  ) {
    return next();
  }

  try {
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, process.env.JWT_KEY!);

    req.currentUser = payload as UserPayload;
  } catch (err) {
    console.log(err);
  }

  next();
};
