import React, { useState } from 'react';

function MainPage() {
  const [currentPage, setCurrentPage] = useState("connexion");
  const [connect, setConnect] = useState(false);

  function handleConnect() {
    setConnect(true);
    setCurrentPage("accueil");
  }

  function handleLogout() {
    setConnect(false);
    setCurrentPage("connexion");
  }

  let pageContent;
  if (currentPage === "connexion") {
    pageContent = (
      <form>
        <input type="text" placeholder="Nom d'utilisateur" />
        <input type="password" placeholder="Mot de passe" />
        <button onClick={handleConnect}>Se connecter</button>
      </form>
    );
  } else {
    pageContent = (
      <div>
        <h2>Bienvenue sur la page d'accueil !</h2>
        <button onClick={handleLogout}>Se déconnecter</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Mon application</h1>
      {pageContent}
    </div>
  );
}

export default MainPage;
