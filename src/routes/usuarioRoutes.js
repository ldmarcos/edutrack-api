import express from 'express';
import { 
    listarUsuarios, 
    listarUsuarioPorId, 
    criarUsuario, 
    atualizarUsuario, 
    deletarUsuario 
} from '../controllers/usuarioController.js';

const router = express.Router();

router.get('/', listarUsuarios);
router.get('/:id', listarUsuarioPorId);
router.post('/', criarUsuario);
router.put('/:id', atualizarUsuario);
router.delete('/:id', deletarUsuario);

export default router;
