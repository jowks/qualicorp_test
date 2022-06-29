import { Request, Response } from "express";
import AppError from "../error/error";

export const listClient = async (req: Request, res: Response) => {
  const { id } = req.params;

  // Executa consulta no banco de dados
  const results = await something(id);

  if (!results) {
    throw new AppError(`Error listing object from database`, 500);
  }

  return res.status(200).json(results);
};

export const updateClient = async (req: Request, res: Response) => {
  const { id } = req.params;

  // Executa consulta no banco de dados
  const results = await something(id);

  if (!results) {
    throw new AppError(`Error updating object from database`, 500);
  }

  return res.status(200).json(results);
};

export const deleteClient = async (req: Request, res: Response) => {
  const { id } = req.params;

  // Executa consulta no banco de dados
  const results = await something(id);

  if (!results) {
    throw new AppError(`Error deleting object from database`, 500);
  }

  return res.status(200).json(results);
};
