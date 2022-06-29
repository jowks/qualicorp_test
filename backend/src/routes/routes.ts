import { Router } from "express";
import * as client from "../controllers/client";

const route = Router();

route.get("/client/:id?", client.listClient);
route.post("/client/:id", client.updateClient);
route.delete("/client/:id", client.deleteClient);

export default route;
