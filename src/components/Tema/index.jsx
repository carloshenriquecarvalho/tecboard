import { Children } from 'react';
import './tema.style.css';

export function Tema({ children, tema }) {
    return (
        <section>
            <h3 className='titulo-tema'>{tema.nome}</h3>
            <div>
                { children }
            </div>
        </section>
    )
}