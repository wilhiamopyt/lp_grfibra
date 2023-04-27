import express from 'express';
import cors from "cors";
import rotas from './routes/rotas';

const router = express();

router.use(cors());

router.use(express.urlencoded({ extended: false }));
router.use(express.json());
router.use(express.static('public'));

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "authorization");
  next();
});

router.use(rotas);

const PORT = 6060;

router.use("/", (req, res) => {
  // console.log(`${__dirname}/../index.html`);

  // const fullFile = __dirname.split("/src/")[0];

  return res.sendFile(`${__dirname}/index.html`)
})

router.listen(PORT, () => {
  console.log(`Servidor está executando na porta ${PORT}`);
});