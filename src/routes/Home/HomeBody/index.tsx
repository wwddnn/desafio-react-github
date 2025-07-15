import Button from '../../../components/Button';
import './styles.css';

export default function HomeBody() {

    return(
        <main>
            <section>
                <div className="container">
                    <div className="text-title mt27">
                        <p>Desafio Github API</p>
                    </div>
                    <div className="text-description mb27">
                        <p>DevSuperior - Escola de programação</p>
                    </div>
                    <div className="button-home">
                        <Button text="Começar" />
                    </div>
                </div>
            </section>
        </main>
    );
}