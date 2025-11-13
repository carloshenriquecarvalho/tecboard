import "./formulario-de-eventos.style.css"
import { CampoFormulario } from "../CampoFormulario";
import { TituloFormulario } from "../TituloFormulario";
import { Label } from "../Label";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { Botao } from "../Botao";
import { ListaSuspensa } from "../ListaSuspensa";


export function FormularioDeEventos({ temas }) {
  return (
    <form className='evento-form'>
      <TituloFormulario >
        Preencha para criar um evento: 
      </TituloFormulario>
      <div className="campos">
      <CampoFormulario>
        <Label htmlFor="nome">
          Qual o nome do evento?
        </Label>
        <CampoDeEntrada type="text" id="nome" name="nome" placeholder='Summer dev hits'/>
      </CampoFormulario>
      <CampoFormulario>
        <Label htmlFor="data">
          Data do Evento:
        </Label>
        <CampoDeEntrada type="date" id="data" name="data" placeholder='XX/XX/XXXX'/>
      </CampoFormulario>
      <CampoFormulario>
        <Label htmlFor="tema">
          Tema do Evento:
        </Label>
        <ListaSuspensa id="tema" name="tema" itens={temas}>

        </ListaSuspensa>
      </CampoFormulario>
      </div>
      <div>
        <img src="raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_15.png" alt="" />
      </div>
      <div className="acoes">
        <Botao>
          Cadastrar Evento
        </Botao>
      </div>
    </form>
  )
}


//raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_15.png