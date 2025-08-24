import type { UserDTO } from "../../models/user";
import "./styles.css";

type Props = {
  user: UserDTO;
};

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
          <div className="output-text">
              Perfil: {user.url}
          </div>
          <div className="output-text">
            Seguidores: {user.followers}
          </div>
          <div className="output-text">
            Localidade: {user.location}
          </div>
          <div className="output-text">
            Nome: {user.name}
          </div>
        </div>

      </div>
    </>
  );
}
