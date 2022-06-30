import { Request, Response } from "express";
import AppError from "../error/error";
import neo4j from "neo4j-driver";

const driver = neo4j.driver(
  "bolt://54.156.149.10:7687",
  neo4j.auth.basic("neo4j", "blackboard-lever-honks"),
  {
    /* encrypted: 'ENCRYPTION_OFF' */
  }
);
const session = driver.session({ database: "neo4j" });

export const listClient = async (req: Request, res: Response) => {
  const { cpf } = req.params;
  const arrayResponse: any[] = [];
  var query: string = "";

  if (!!cpf) {
    query = `MATCH (n:Client { cpf: '${cpf}' }) RETURN n`;
  } else {
    query = `MATCH (n:Client) RETURN n`;
  }

  const results = await session
    .run(query)
    .then((res: any) => {
      res.records.forEach((record: any) => {
        arrayResponse.push(record.get("n").properties);
      });
    })
    .catch((e: any) => {
      throw new AppError(`Error listing objects from database: ${e}`, 500);
    });

  return res.status(200).json(arrayResponse);
};

export const updateClient = async (req: Request, res: Response) => {
  const { cpf } = req.params;
  const { name, email, phone } = req.body;
  const arrayResponse: any[] = [];
  var found = false;
  var query = "";

  if (!cpf) throw new AppError(`Invalid info`, 400);

  const result = await session
    .run(`MATCH (n:Client { cpf: '${cpf}' }) RETURN n`)
    .then((res: any) => {
      if (res?.records?.length) found = true;
    })
    .catch(() => {
      throw new AppError(`Error updating database`, 500);
    });

  if (!found) {
    query = `
      CREATE (n:Client { 
        cpf: '${cpf}', 
        name: '${name}', 
        email: '${email}', 
        phone: '${phone}' 
      })
    `;
  } else {
    query = `
      MATCH (n:Client { 
        cpf: '${cpf}' 
      })
      SET 
        n.name = '${name}',
        n.email = '${email}',
        n.phone = '${phone}'
      RETURN n
    `;
  }

  const results = await session
    .run(query)
    .then((res: any) => {
      res.records.forEach((record: any) => {
        arrayResponse.push(record.get("n").properties);
      });
    })
    .catch((e: any) => {
      throw new AppError(`Error updating database: ${e}`, 500);
    });

  return res.status(201).json(arrayResponse);
};

export const deleteClient = async (req: Request, res: Response) => {
  const { cpf } = req.params;
  const query = `
    MATCH (n:Client {
      cpf: '${cpf}'
    })
    DETACH DELETE n
  `;

  const results = await session.run(query).catch(() => {
    throw new AppError(`Error updating database`, 500);
  });

  return res.status(203).json();
};
