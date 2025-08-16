import { Link } from "react-router-dom";
import "./styles.css";
import Button from "../../../components/Button";

export default function HomeBody() {
  return (
    <main>
      <section>
        <div className="container-home-body">
          <div className="text-title">
            <p>Desafio Github API</p>
          </div>
          <div className="text-description">
            <p>DevSuperior - Escola de programação</p>
          </div>
          <Link to="/before" className="button-home">
            <Button text="Começar" />
          </Link>
        </div>
      </section>
    </main>
  );
}
