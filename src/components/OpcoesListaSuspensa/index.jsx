import "./opcoes-lista-suspensa.style.css";

export function OpcoesListaSuspensa({children, ...props}) {
    return (
        <option className="opcao">
            {children}
        </option>
    )
}