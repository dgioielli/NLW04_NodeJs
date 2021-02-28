
import { Request, Response } from "express"
import { getRepository } from "typeorm";
import { User } from "../models/User";

class UserController {
    async create(request: Request, response: Response) {
        const { name, email } = request.body;
        // console.log(body);
        // console.log("1");
        const usersRepository = getRepository(User);

        // console.log("1");
        // const user = usersRepository.create({ name, email });

        // console.log("1");
        // await usersRepository.save(user);

        return response.json({ message: "Os dados forma salvos com sucesso!" });
        // console.log("1");
        // return response.json(user);
    }
}

export { UserController }