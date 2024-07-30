const Desafio2 = () => {
  const numA = 3;
  const numB = 5;
  const handleSoma = () => {
    console.log('Soma de numA mais numB:');
    console.log(numA + numB);
    return
  };
  return (
    <div>
      <button onClick={handleSoma}>Challenge</button>
    </div>
  );
}

export default Desafio2;