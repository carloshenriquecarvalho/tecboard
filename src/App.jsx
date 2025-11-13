import './App.css'
import { useState } from 'react';
import { FormularioDeEventos } from "./components/FormularioDeEventos"
import { Tema } from "./components/Tema"
import { Banner } from './components/Banner'
import { CardEvento } from './components/CardEvento/CardEvento'

function App() {

  
  const temas = [
    {
      id: 1,
      nome: "frontend"
    },
    {
      id: 2,
      nome: "backend"
    },
    {
      id: 3,
      nome: "devops"
    },
    {
      id: 4,
      nome: "inteligência artificial"
    },
    {
      id: 5,
      nome: "data science"
    },
    {
      id: 6,
      nome: "cloud"
    }
  ]
  
  const [eventos, setEventos] = useState(
    [{
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png",
      tema: temas[0],
      data: new Date(),
      titulo: "Mulheres no Front",
    }],
  );
  
  function adicionarEvento(evento) {
    setEventos([...eventos, evento]);
  }

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <Banner />
      < FormularioDeEventos temas={temas} aoSubmeter={adicionarEvento}/>
      <section className="container">
      {temas.map(function (tema) {
        if (!eventos.some((evento) => {
          return evento.tema.id == tema.id
        })) {
          return null;
        }
        return (
          <section key={tema.id}>
            <Tema tema={tema}>
              <div className="eventos">
              {eventos
              .filter(evento => {
                return evento.tema.id == tema.id
              })
              .map((evento, indice) => {
                return <CardEvento evento={evento} key={indice} />
              })}
              </div>
            </Tema>
          </section>
        )
      })}
      </section>
    </main>
  )
}

export default App
