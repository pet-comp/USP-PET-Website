import bcrypt from "bcryptjs";

const usuarioTeste = {
  email: "admin@pet.com",
  senhaHash: bcrypt.hashSync("123456", 10),
};

export async function login(req, res) {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({
      message: "E-mail e senha são obrigatórios.",
    });
  }

  if (email !== usuarioTeste.email) {
    return res.status(401).json({
      message: "E-mail ou senha inválidos.",
    });
  }

  const senhaCorreta = await bcrypt.compare(
    senha,
    usuarioTeste.senhaHash
  );

  if (!senhaCorreta) {
    return res.status(401).json({
      message: "E-mail ou senha inválidos.",
    });
  }

  return res.status(200).json({
    message: "Login realizado com sucesso.",
    email,
  });
}