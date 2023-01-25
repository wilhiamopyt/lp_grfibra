import  express from "express"
import {Router} from "express"
import marketingApi from "../api/MarketingApi"

const rotas = Router();

rotas.post('/salvarDadosLpQuirinopolis', marketingApi.salvarDadosLpQuirinopolis)
export default rotas