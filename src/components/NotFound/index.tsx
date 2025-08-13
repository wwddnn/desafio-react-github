import './styles.css';
import Button from "../Button";

export default function NotFound() {

    return (
        <main>
            <section className="container">
                <div className="card mt54">
                    <div className="text-card">
                        <p>Encontre um perfil Github</p>
                    </div>
                    <div>
                        <input type="text" placeholder='Usuário Github'/>
                    </div>
                    <div>
                        <Button text="Encontrar" />
                    </div>
                </div>
                <div className="text-not-found">
                    <h4>Erro ao buscar usuário</h4>
                </div>
            </section>
        </main>
    );
}