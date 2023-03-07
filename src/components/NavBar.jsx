import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import pdf from '../assets/Block de Solicitudes (2022_05_19 15_49_13 UTC).pdf';

import "./css/NavBar.css";

export const NavBar = ({ view }) => {
  const { enlaces } = useSelector((state) => state.productos);
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <Link to="/">
        <img src='https://firebasestorage.googleapis.com/v0/b/neolife-c7fcb.appspot.com/o/logo.svg?alt=media&token=a865919e-0d36-454e-bf1d-fd841c1f4413' alt="logo" />
      </Link>
      <div className="navbar__enlaces">
        <a onClick={() => navigate("/Nosotros")}>
          <p className="navbar__drive">SOBRE NOSOTROS</p>
        </a>
        {enlaces.length > 0 && view && (
          <a
            href={pdf}
            target="_BLANK"
          >
            <p className="navbar__drive">REGISTRO</p>
          </a>
        )}
      </div>
    </div>
  );
};
