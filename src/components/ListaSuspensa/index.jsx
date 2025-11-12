import "./lista-suspensa.style.css";


export function ListaSuspensa({ children }) {
    return (
        <select className="select">
            {children}
        </select>
    )
}