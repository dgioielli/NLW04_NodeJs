import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
class User {
    @PrimaryColumn()
    readonly id: string;

    // Caso o nome da coluna seja diferente indicamos com @Column("<Nome Coluna>")
    @Column()
    name: string;

    @Column()
    email: string;

    @CreateDateColumn()
    create_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { User }
