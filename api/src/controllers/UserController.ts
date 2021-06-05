
import { Request, Response } from "express"
import { getRepository } from "typeorm";
import { User } from "../models/User";

class UserController {
    async create(request: Request, response: Response) {
        const { name, email } = request.body;
        // console.log(body);
        const usersRepository = getRepository(User);

        // Select * from users where email = "email"
        const userAlreadyExists = await usersRepository.findOne({ where: { email: email } });
        console.log(userAlreadyExists);

        if (userAlreadyExists) {
            return response.status(400).json({
                status: 400,
                error: "User already exists!"
            })
        }

        const user = usersRepository.create({ name, email });

        await usersRepository.save(user);

        // return response.json({ message: "Os dados forma salvos com sucesso!" });
        return response.json(user);
    }
}

export { UserController }