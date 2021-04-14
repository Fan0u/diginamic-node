const Livre = ({ livre }) => {
  return (
    <div>
      <span>{livre.titre} par {livre.auteur}</span>
    </div>
  );
};

export default Livre;
