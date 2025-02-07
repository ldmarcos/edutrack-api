import { Usuario } from '../models/Usuario.js';

const listarUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao listar usuários', error });
    }
};

const listarUsuarioPorId = async (req, res) => {
    const { id } = req.params;
    try {
        const usuario = await Usuario.findOne({id});
        if (!usuario) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar usuário', error });
    }
};

const criarUsuario = async (req, res) => {
    const { id, nome, tipo, email, senha, foto, materias } = req.body;
    try {
        const usuario = new Usuario({
            id, 
            nome, 
            tipo, 
            email, 
            senha, 
            foto, 
            materias
        });

        await usuario.save();
        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar usuário', error });
    }
};

const atualizarUsuario = async (req, res) => {
    const { id } = req.params;
    const { nome, tipo, email, senha, foto, materias } = req.body;
    try {
        const usuario = await Usuario.findOneAndUpdate(
            { id }, 
            { nome, tipo, email, senha, foto, materias },
            { new: true }
        );

        if (!usuario) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar usuário', error });
    }
};

const deletarUsuario = async (req, res) => {
    const { id } = req.params;
    try {
        const usuario = await Usuario.findOneAndDelete({id});
        if (!usuario) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        res.status(200).json({ message: 'Usuário deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar usuário', error });
    }
};

export { listarUsuarios, listarUsuarioPorId, criarUsuario, atualizarUsuario, deletarUsuario };
