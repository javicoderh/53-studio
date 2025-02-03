import { useState, useEffect } from "react";
import "./reef.css"; // Importamos los estilos CSS

export default function AnimatedDoors() {
  const [openPercent, setOpenPercent] = useState(0);

  useEffect(() => {
    const today = new Date().getDay(); // 0 = Domingo, 1 = Lunes, ..., 6 = Sábado

    let percent = 0; // Lunes: 0%
    if (today === 2) percent = 20; // Martes
    if (today === 3) percent = 40; // Miércoles
    if (today === 4) percent = 60; // Jueves
    if (today >= 5) percent = 100; // Viernes, Sábado y Domingo: 100%

    setOpenPercent(percent);
  }, []);

  return (
    <div className="container">
      {/* Botón detrás de las puertas */}
      <button className="boton-central">→</button>

      {/* Puertas con apertura progresiva según el día */}
      <div className="puerta izquierda" style={{ clipPath: `polygon(0 0, ${100 - openPercent}% 0, ${100 - openPercent}% 100%, 0% 100%)` }} />
      <div className="puerta derecha" style={{ clipPath: `polygon(${openPercent}% 0, 100% 0, 100% 100%, ${openPercent}% 100%)` }} />
    </div>
  );
}
