import * as express from "express";

export default function errorHandler(
  err: Error,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  if (typeof err === "string") {
    return res.status(400).json({ message: err });
  }

  return res.status(500).json({ message: err.message });
}
