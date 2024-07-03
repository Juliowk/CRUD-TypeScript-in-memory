import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

interface Item {
     id: number;
     name: string;
}

let items: Item[] = [];
let nextId = 1;

export const get = async (req: Request, res: Response) => {
     return res.status(200).json({ success: "Eae, funcionando tudo normal!" });
};

export const create = async (req: Request, res: Response) => {

     if (!req.body.name) return res.status(StatusCodes.BAD_REQUEST).json({ errors: "Nome não informado" });

     const item: Item = {
          id: nextId++,
          name: req.body.name
     }

     items.push(item);
     return res.status(StatusCodes.CREATED).json(item);
};

export const getItems = async (req: Request, res: Response) => {
     if (items.length >= 1) return res.status(StatusCodes.OK).json({ Items: items });
     return res.status(StatusCodes.OK).json({ Items: "Ainda não a registro!" });
};

export const getItemByID = async (req: Request, res: Response) => {
     const item = items.find(item => item.id === parseInt(req.params.id));

     if (item) return res.status(StatusCodes.OK).json({ Item: item });
     return res.status(StatusCodes.NOT_FOUND).json("Item não encontrado.");
};

export const updateById = async (req: Request, res: Response) => {

     if (!req.body.name) return res.status(StatusCodes.BAD_REQUEST).json({ errors: "Nome não informado" });

     const item = items.find(item => item.id === parseInt(req.params.id));

     if (item) {
          item.name = req.body.name;
          return res.status(StatusCodes.OK).json({ Item: item });
     };
     return res.status(StatusCodes.NOT_FOUND).json("Item não encontrado.");
};

export const deleteById = async (req: Request, res: Response) => {

     if (!req.params.id) return res.status(StatusCodes.BAD_REQUEST).json("Id não informado!");

     const lengthItems = items.length;
     items = items.filter(item => item.id !== parseInt(req.params.id));

     if (items.length < lengthItems) {
          return res.status(StatusCodes.OK).json("Deletado com sucesso");
     };

     return res.status(StatusCodes.NOT_FOUND).json("Não foi possivel deletar o item.");
};