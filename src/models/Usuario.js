import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    foto: {
        type: String
    },
    materias: [{
        nome: String,
        nota: Number
    }]
}, {
    versionKey: false
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

export { Usuario, usuarioSchema };
