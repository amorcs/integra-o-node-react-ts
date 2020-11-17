import { Request, Response } from "express";

const users = [
  { id: 1, name: 'marcos sousa da silva', email: 'marco.sds@hotmail.com' },
  { id: 2, name: 'Dielle Oliveira', email: 'di.sds@hotmail.com' }

]

export default {
  async index(request: Request, response: Response) {
    return response.json(users)
  }
}