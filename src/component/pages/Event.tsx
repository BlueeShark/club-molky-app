
import { Carte } from '../atoms/carte';
import './style/envent.css';
// import { AdminLogin } from './adminLogin';

export function Event() {
  return (
    <div>
      <div className="headers">
        <input
          type="search"
          placeholder="Rechercher..."
          name="rechercher"
          className="search"
        />
        <button className="btnHome">Rechercher</button>
        <br />
        <select
          name="Date2"
          id="date-select"
          className="select"
          aria-label="Date"
        >
          <option value="">Date</option>
        </select>
        <select
          name="Type2"
          id="type-select"
          className="select"
          aria-label="Type"
        >
          <option value="">Type</option>
        </select>
        <select
          name="Tournois2"
          id="tournois-select"
          className="select"
          aria-label="Tournois"
        >
          <option value="">Tournois</option>
        </select>
        <div className="cartesss">
          <Carte />
          <Carte />
        </div>
        {/* <AdminLogin /> */}
      </div>
    </div>
  );
}
