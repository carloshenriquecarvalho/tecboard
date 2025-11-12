import "./formulario-de-eventos.style.css"
import { CampoFormulario } from "../CampoFormulario";
import { TituloFormulario } from "../TituloFormulario";
import { Label } from "../Label";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { OpcoesListaSuspensa } from "../OpcoesListaSuspensa";
import { ListaSuspensa } from "../ListaSuspensa";
import { Botao } from "../Botao";


export function FormularioDeEventos() {
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
        <Label htmlFor="lista-suspensa">
          Selecione o tema:
        </Label>
      </CampoFormulario>
      <ListaSuspensa id="lista-suspensa">
        <OpcoesListaSuspensa value="angular">Selecione uma Opção</OpcoesListaSuspensa>
        <OpcoesListaSuspensa value="angular">Angular</OpcoesListaSuspensa>
        <OpcoesListaSuspensa value="vue.js">Vue.js</OpcoesListaSuspensa>
      </ListaSuspensa>
      </div>
      <div className="acoes">
        <Botao>
          Cadastrar Evento
        </Botao>
      </div>
    </form>
  )
}