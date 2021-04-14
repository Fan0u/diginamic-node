import { useState, useEffect, useCallback } from "react";
import Filter from "./filter";
import FormLivre from "./formLivre";
import Livre from "./livre";

const LivreList = () => {
  const [livres, setLivres] = useState([]);
  const fetchLivres = useCallback(() => {
    fetch("/livres")
      .then((rawResult) => rawResult.json())
      .then((result) => setLivres(result));
  }, []);

  useEffect(() => {
    fetchLivres();
  }, [fetchLivres]);

  const filtreChangeHandler = useCallback(
    (nouveauFiltre) => {
      fetch(`/livres/${nouveauFiltre}`)
        .then((rawResult) => rawResult.json())
        .then((result) => setLivres(result));
    },
    []
  );

  return (
    <div>
      <FormLivre onChange={fetchLivres}></FormLivre>
      <div>
        <Filter
          onFiltreChange={filtreChangeHandler}
          onFiltreEmpty={fetchLivres}
        ></Filter>
        Liste de livres :
        {livres.map((livre) => (
          <Livre key={livre.titre} livre={livre}></Livre>
        ))}
      </div>
    </div>
  );
};

export default LivreList;
