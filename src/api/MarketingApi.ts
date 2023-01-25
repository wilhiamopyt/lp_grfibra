import { Request, Response} from 'express'
import {salvarDadosLpQuiri} from '../controllers/MarketingControllers'
interface DadosFormularioQuirinopolis{
    nome: string
    telefone: string
    whatsapp: string
    endereco: string
    bairro: string
    cep: string
    email: string
}

class MarketingApi {

    async salvarDadosLpQuirinopolis(req: Request, res: Response){
        const nome = req.body.nome
        const telefone = req.body.telefone
        const whatsapp = req.body.whatsapp
        const endereco = req.body.whatsapp
        const bairro = req.body.bairro
        const cep = req.body.cep
        const email = req.body.email

        console.log("Nome: ", nome);
        console.log(req.body)
        const objeto: DadosFormularioQuirinopolis = {
            nome: nome,
            telefone: telefone,
            whatsapp: whatsapp,
            endereco: endereco,
            bairro: bairro,
            cep: cep,
            email: email
        }

       const result =  await salvarDadosLpQuiri(objeto)
       if(result.status==1){
        return res.status(200).json({
            erro: 0, 
            mensagem: result.mensagem
            
        })
       } else {
            return res.status(400).json({
            erro: 1, 
            mensagem: result.mensagem
            })
       }
        
    }
}


export default new MarketingApi