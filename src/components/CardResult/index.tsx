import type { UserDTO } from "../../models/user";
import "./styles.css";

type Props = {
  user: UserDTO;
}

export default function CardResult({ user }: Props) {
  return (
    <>
      <div className="card-after">
        <div className="img-card-after">
          <img src={user.avatar_url} alt={user.name} />
        </div>
        <div className="text-card-after">
          <div>
            <h4>Informações</h4>
          </div>
          <div>
            <p>Perfil: {user.url} </p>
          </div>
          <div>
            <p>Seguidores: {user.followers} </p>
          </div>
          <div>
            <p>Localidade: {user.location} </p>
          </div>
          <div>
            <p>Nome: {user.name} </p>
          </div>
        </div>
      </div>
    </>
  );
}
