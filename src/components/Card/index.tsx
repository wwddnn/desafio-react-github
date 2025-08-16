import "./styles.css";
import Button from "../Button";


export default function Card() {
  return (
    <>
      <div className="card">
        <div className="text-card">
          <p>Encontre um perfil Github</p>
        </div>
        <div>
          <input type="text" placeholder="Usuário Github" />
        </div>
        <div>
          <Button text="Encontrar" />
        </div>
      </div>
    </>
  );
}
