import { prisma } from "../config/db"

interface DadosFormularioQuirinopolis {
    nome: string
    telefone: string
    whatsapp: string
    endereco: string
    bairro: string
    cep: string
    email: string
}
export async function salvarDadosLpQuiri(data: DadosFormularioQuirinopolis) {
    const resultado = await prisma.ld_grfibra.create({
        data: {
            nome: data.nome,
            telefone: data.telefone,
            whatsapp: data.whatsapp,
            endereco: data.endereco,
            bairro: data.bairro,
            cep: data.cep,
            email: data.email

        }
    })
    console.log("resultado: ", resultado)
    const qtdRegistro = resultado.id;
    console.log(qtdRegistro);
    if (qtdRegistro != null || qtdRegistro > 0) {
        return {
            status: 1,
            mensagem: "formulario cadastrado com sucesso"
        }
    } else {
        return {
            status: 0,
            mensagem: "erro ao cadastrar formulário"
        }
    }

}
