import { Link } from "react-router-dom";
import "./styles.css";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <div className=" text-header">
          <p>Github API</p>
        </div>
      </Link>
    </header>
  );
}
