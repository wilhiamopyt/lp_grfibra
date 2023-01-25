import express from 'express';
import cors from "cors";
import rotas from './routes/rotas';

const router = express();

router.use(cors());

router.use(express.urlencoded({ extended: false }));
router.use(express.json());

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "authorization");
  next();
});

router.use(rotas);

const PORT = 6060;

router.listen(PORT, () => {
  console.log(`Servidor está executando na porta ${PORT}`);
});