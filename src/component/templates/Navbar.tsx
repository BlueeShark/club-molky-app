import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div>
      <Link to={"/"}>Accueil</Link>
      <Link to={"/news"}>Actualité</Link>
      <Link to={"/event"}> Evènements</Link>
      <Link to={"/about"}>A propos</Link>
    </div>
  );
}
