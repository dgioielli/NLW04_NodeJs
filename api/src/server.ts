import express, { request, response } from 'express';
import { router } from './routes';

const app = express();

// /** 
//  * Get => Buscar
//  * Post => Salvar
//  * Put => Alterar
//  * Delete => Deletar
//  * Patch => Alteração Específica
//  */

// // O que exatamente é uma rota???

// // http://localhost:3333/users
// //app.get("/users", (request, response) => {
// app.get("/", (request, response) => {
//     //return response.send("Hello World - NLW04!!!");
//     return response.json({
//         "message": "Hello World!"
//     });
// })

// // Primeiro parâmetro é a Rota (ou recurso)
// // Segundo parâmetro (Request, response)
// app.post("/", (request, response) => {
//     // Já recebemos os dados.
//     return response.json({ "message": "Salvos com sucesso" })
// })

app.use(express.json());
app.use(router);

app.listen(3333, () => console.log("Server is running!"));