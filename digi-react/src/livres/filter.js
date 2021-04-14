import { useEffect, useState } from "react";

const Filter = ({ onFiltreChange, onFiltreEmpty }) => {
  const [filtre, setFiltre] = useState("");

  useEffect(() => {
    if (filtre.length >= 3) {
      onFiltreChange(filtre);
    }
    if (!filtre.length) {
      onFiltreEmpty();
    }
  }, [filtre, onFiltreChange, onFiltreEmpty]);

  return (
    <div>
      <input value={filtre} onChange={(e) => setFiltre(e.target.value)}></input>
    </div>
  );
};

export default Filter;
