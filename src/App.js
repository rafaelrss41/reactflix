import React from 'react';
import './App.css';

import Menu from './componentes/Menu';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './componentes/BannerMain';
import Carousel from './componentes/Carousel';
import Footer from './componentes/Footer';


function App() {


  return(
    <div className="App">
      
        <div style={{background: "#141414"}}>
          <Menu />

          <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"É realmente tudo MUITO legal e esse vídeo é um baita tutorial onde programo a base do backend do nosso jogo multiplayer e começo a trocar informações em tempo-real com o frontend."}
      />

<Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
      />      

      <Carousel
        category={dadosIniciais.categorias[5]}
      /> 


      <Footer />
        </div>
    </div>
  );
}

export default App;