import { UserPayload } from "./types";

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export * from "./errors/BadRequestError";
export * from "./errors/CustomError";
export * from "./errors/DatabaseConnectionErrors";
export * from "./errors/NotAuthorizedError";
export * from "./errors/NotFoundError";
export * from "./errors/RequestValidationError";

export * from "./middlewares/errorHandler";
export * from "./middlewares/requireAuth";
export * from "./middlewares/validateRequest";
