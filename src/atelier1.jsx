import React, { useState } from 'react';

export function Compteur({ initialCount = 0, step = 1 }) {
  const [count, setCount] = useState(initialCount);

  const incrementer = () => setCount(count + step);
  const decrementer = () => setCount(count - step);

  return (
    <div>
      <p>Compteur: {count}</p>
      <button onClick={incrementer}>+{step}</button>
      <button onClick={decrementer}>-{step}</button>
    </div>
  );
}

export function GestionListe({ initialItems = [], placeholder = "Ajouter un item" }) {
  const [items, setItems] = useState(initialItems);
  const [nouvelItem, setNouvelItem] = useState("");

  const ajouterItem = () => {
    if (nouvelItem) {
      setItems([...items, nouvelItem]);
      setNouvelItem("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={nouvelItem}
        onChange={(e) => setNouvelItem(e.target.value)}
        placeholder={placeholder}
      />
      <button onClick={ajouterItem}>Ajouter</button>
      <ul>
        {items.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}


export function BoiteCouleur({ initialColor = "#000000", colorOptions = [] }) {
  const [couleur, setCouleur] = useState(initialColor);

  const changerCouleur = () => {
    const nouvelleCouleur = colorOptions[Math.floor(Math.random() * colorOptions.length)];
    setCouleur(nouvelleCouleur);
  };

  return (
    <div>
      <div style={{ width: 100, height: 100, backgroundColor: couleur }}></div>
      <button onClick={changerCouleur}>Changer de couleur</button>
    </div>
  );
}


