import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div>
      <Link to={"/"}>Acceuil</Link>
      <Link to={"/news"}>Actualité</Link>
      <Link to={"/event"}>evenement</Link>
      <Link to={"/admin"}>admindashboard</Link>
    </div>
  );
}
