import express, { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import {usersRoutes} from "./handlers/user.handler";
import {ordersRouts} from "./handlers/order.handler";
import {productsRouts} from "./handlers/product.handler";
import { orderProductsServiceRouts } from "./handlers/orderProductsService.handler";
import { config } from "./config/config";


export const app: express.Application = express();
export const port: number = config.port;

app.listen(port, function (): void {
  console.log("server is running on port " + port);
});


app.use(bodyParser.json());

app.get("/",async function (req: Request, res: Response) {
  res.json("welcom to store api start by creating new user new added");
});

usersRoutes(app);
productsRouts(app);
ordersRouts(app);
orderProductsServiceRouts(app);



app.use(
  (
    err: Error,
    _req: express.Request,
    res: express.Response,
    _next: NextFunction
  ): void => {
    
    let status = parseInt(err.name) || 500;
    res.status(status).json(err.message);
  }
);

app.use((_req:express.Request,res:express.Response)=>{
  res.status(404).json({
    status:"falid",
    messsage:"we can't found that request."
  });
})