import "dotenv/config"
import app from './src/app.js'

const PORTA = 5000;

app.listen(PORTA, () =>{
    console.log(`API rodando na porta ${PORTA}`);
});