import express from "express";
import authRoutes from "./routes/authRoutes.js";

const app = express();
const PORT = 3000;

// Configuração para o Express entender JSON nas requisições
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Backend rodando!' });
});

app.use("/admin", authRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
