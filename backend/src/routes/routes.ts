import { Router } from "express";
import * as client from "../controllers/client";

const route = Router();

route.get("/client/:cpf?", client.listClient);
route.post("/client/:cpf?", client.updateClient);
route.delete("/client/:cpf", client.deleteClient);

export default route;
