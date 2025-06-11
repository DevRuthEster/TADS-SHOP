

export default function HomePage() {
let randomNumber = Math.random();

  console.log('Página inicial renderizada');
  return (
    <div className="p-4">
      <h1>Página Inicial</h1>
      <p>Número aleatório: {randomNumber}</p>
    </div>
  );
}

