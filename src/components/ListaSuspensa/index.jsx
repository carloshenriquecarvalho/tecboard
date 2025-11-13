import "./lista-suspensa.style.css";


export function ListaSuspensa({ itens, ...rest }) {
    return (
        <select { ...rest } className="lista-suspensa" required>
            <option key={itens.id} value="" disabled className="options" defaultValue=''>Selecione uma opção:</option>
            {itens.map((item) => {
                return (
                <option key={item.id} value={item.id}>
                    {item.nome}
                </option>
                )
            })}
        </select>
    )
}