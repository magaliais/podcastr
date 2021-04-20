// ARQUIVO QUE FICA EM TORNO DE TODA A APLICAÇÃO

// INSERIR AQUI COMPONENTES QUE ESTARÁ PRESENTE EM TODAS AS PÁGINAS
// DA APLICAÇÃO

import '../styles/global.scss';

import { Header } from '../components/Header';
import { Player } from '../components/Player';

import styles from '../styles/app.module.scss';

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
      <Player />
    </div>
  );
}

export default MyApp
