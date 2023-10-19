import express = require('express');
import router from './routes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.app.use(express.json());

    this.routes();

    // Não remover essa rota
    this.app.get('/', (_req, res) => res.status(200).send('Ze delivery API no ar!'));
  }

  private routes(): void {
    this.app.use(router);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Ze delivery API no ar na porta ${PORT}!`));
  }
}

export default App;
export const { app } = new App(); // exportação para testes de cobertura funcionarem