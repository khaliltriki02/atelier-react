import React from "react";

export function Component2() {
  return <div>Component2</div>;
}

export function Component1() {
  const input = [
    ["a", "b", "c"],
    ["f", "a", "f"],
    ["g", "h", "u"],
  ];

  // Compter les occurrences
  const occ = arrayOfArrays =>
    arrayOfArrays
      .flat()
      .reduce((acc, value) => {
        acc[value] = (acc[value] || 0) + 1;
        return acc;
      }, {});

  
  const TrouverMotLong = tableauMots =>
    tableauMots.reduce(
      (acc, mot) =>
        mot.length > acc.longueur
          ? { mot, longueur: mot.length }
          : acc,
      { mot: "", longueur: 0 }
    );

  const counts = occ(input);

  // Appel de la fonction
  const resultat = TrouverMotLong([
    "chat",
    "elephant",
    "lion",
    "tigre",
    "hippopotame",
  ]);

  return (
    <>
      <div>hello</div>
      <Component2 />

      <h3>Occurrences :</h3>
      <pre>{JSON.stringify(counts, null, 2)}</pre>

      <h3>Mot le plus long :</h3>
      <div>
        {resultat.mot} ({resultat.longueur} caractères)
      </div>
    </>
  );

  
  

}
