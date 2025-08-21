import { useEffect, useState } from "react";
import type { UserDTO } from "../../../models/user";
import CardResult from "../../../components/CardResult";
import "./styles.css";
import * as userService from "../../../services/user-service";

type FormData = {
  login: string;
};

export default function Before() {
  const [formData, setFormData] = useState<FormData>({
    login: "",
  });

  const [user, setUser] = useState<UserDTO>();
  const [userLog, setUserLog] = useState<string>("");

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  function handleFormSubmit(event: any) {
    event.preventDefault();
    setUserLog(formData.login);
  }

  useEffect(() => {
    if (userLog) {
      userService
        .findByLogin(userLog)
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          setUser(undefined);
          console.log("Não encontrado");
        });
    }
  }, [userLog]);

  return (
    <main>
      <section>
        <div className="card">
          <form onSubmit={handleFormSubmit}>
            <div className="text-card">
              <p>Encontre um perfil Github</p>
            </div>
            <input
              name="login"
              value={formData.login}
              type="text"
              placeholder="Usuário Github"
              onChange={handleInputChange}
            />
            <button className="button">Encontrar</button>
          {user && 
          <CardResult user={user} 
          />}
          </form>
        </div>
      </section>
    </main>
  );
}
