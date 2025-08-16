import { useEffect, useState } from "react";
import Card from "../../../components/Card";
import CardResult from "../../../components/CardResult";
import type { UserDTO } from "../../../models/user";
import axios from "axios";
import { Outlet, useNavigate, useParams } from "react-router-dom";

export default function After() {

  const params = useParams();

  const navigate = useNavigate();

  const [user, setUser] = useState<UserDTO>();

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${params.userId}`)
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      });
  }, []);

  return (
    <main>
      <section>
        <Card />
        {
        user && 
        <CardResult user={user} />
        }
        <Outlet />
      </section>
    </main>
  );
}
