import './App.css'
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

  const eventos = [
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png",
      tema: temas[0],
      data: new Date(),
      titulo: "Mulheres no Front",
    },
  ]

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <Banner />
      < FormularioDeEventos temas={temas}/>
      {temas.map(function (item) {
        return (
          <section key={item.id}>
            <Tema tema={item}>
              <CardEvento evento={eventos[0]}></CardEvento>
            </Tema>
          </section>
        )
      })}
{/*       
      <section>
        <Tema tema={temas[1]}>
        </Tema>
      </section>
      <section>
        <Tema tema={temas[2]}>
        </Tema>
      </section>
      <section>
        <Tema tema={temas[3]}>
        </Tema>
      </section>
      <section>
        <Tema tema={temas[4]}>
        </Tema>
      </section>
      <section>
        <Tema tema={temas[5]}>
        </Tema>
      </section> */}
    </main>
  )
}

export default App
