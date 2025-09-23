import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div>
      <Link to={"/"}>Acceuil</Link>
      <Link to={"/news"}>Actualité</Link>
    </div>
  );
}
