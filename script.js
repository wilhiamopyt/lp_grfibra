async function obtemDadosFormulario(e){
    event.preventDefault()
    const form = document.getElementById ('form')
    const nome = document.getElementById ('i_nome').value
    const telefone = document.getElementById ('i_telefone').value
    const whatsapp = document.getElementById ('i_zap').value
    const endereco = document.getElementById ('i_endereco').value
    const bairro = document.getElementById ('i_bairro').value
    const cep = document.getElementById ('i_cep').value
    const email = document.getElementById ('i_email').value
    const button = document.getElementById ('b_cadastro').value
    console.log("nome: ",nome)
}

// const { PrismaClient } = require('@prisma/client')
// import { PrismaClient } from '@prisma/cnpmlient'

// const prisma = new PrismaClient()

// async function handleFormSubmit(req, res) {
//     const formData = req.body;
//     // Use o Prisma client para criar a conexão e salvar os dados
//     prisma.create(formData).then(data => {
//       res.json(data);
//     });
//   }

//   form.addEventListener("b_cadastro", event => {
//     event.preventDefault();
//     handleFormSubmit(req, res);
// });

// async function funcao_cadastro() {
//     try {
//         await prisma.form.create({
//              data: {
//                  nome: req.body.name,
//                  telefone: req.body.telefone,
//                  whatsapp: req.body.whatsapp,
//                  endereco: req.body.whatsapp,
//                  bairro: req.body.whatsapp,
//                  cep: req.body.whatsapp,
//                  email: req.body.email
     
//              }
//          })
//      } catch (e) {
//          console.log(e)
//      }
// }

