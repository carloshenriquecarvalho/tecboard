import "./botao-style.css"

export function Botao({ children }) {
    return (
        <button className="botao" type="submit">
            {children}
        </button>
    )
}