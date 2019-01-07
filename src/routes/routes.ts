import errorHandler from "@middlewares/errorHandler";

export default function(app: any) {
  app.use(errorHandler);
}
