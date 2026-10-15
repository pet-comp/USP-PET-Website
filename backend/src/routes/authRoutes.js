import express from "express";

const router = express.Router();

router.post("/login", (req, res) =>{
    const {email, senha} = req.body;

    if(!email || !senha){
        return res.status(400).json({
            message: "E-mail e senha são obrigatórios.",
        });
    }

    return res.status(200).json({
        message: "Login recebido com sucesso.",
        email,
    });

});

export default router;