
// Inicial:
// function enviarEmail (para, id, assunto, texto){
//     // Regra de negócio
//     console.log(para, id, assunto, texto);
// }

// class EnviarEmailParaUsuario{
//     send(){
//         enviarEmail("dani@gmail.com.br", 9899, "Olá!", "Tudo bem?");
//     }
// }

interface DadosDeEnviarEmail {
    para: string;
    id: string;
    assunto: string;
    texto: string;
}

// Função com os tipos definidos
//function enviarEmail(para: string, id: string, assunto: string, texto: string){
// Função usando a interface
//function enviarEmail(dados: DadosDeEnviarEmail) {
// Função desestruturada
function enviarEmail({ para, id, assunto, texto }: DadosDeEnviarEmail) {
    console.log(para, id, assunto, texto);
}

class EnviarEmailParaUsuario {
    send() {
        //enviarEmail("dani@gmail.com.br", "9899", "Olá!", "Tudo bem?");
        enviarEmail({
            para: "dani@gmail.com",
            id: "9899",
            assunto: "Olá!",
            texto: "Tudo bem?"
        });
    }
}