import { Outlet } from "react-router-dom";
import Card from "../../../components/Card";

export default function Before() {
  return (
    <main>
      <section>
        <Card />
        <Outlet />
      </section>
    </main>
  );
}
