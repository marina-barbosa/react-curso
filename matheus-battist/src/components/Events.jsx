const Events = () => {
  const handleMeuEvento = (e) => {
    console.log(e);
    alert('Ativou evento, consulte no Inspecionar.');
  }
  const renderSomething = (x) => {
    if (x) {
      return <h3>Renderizando isso!</h3>;
    } else {
      return <h3>Também posso renderizar isso!</h3>;
    }
  };
  return (
    <div>
      <section>
        <button onClick={handleMeuEvento}>Ativar Evento</button>
      </section>

      <section>
        {renderSomething(true)}
        {renderSomething(false)}
      </section>
    </div>
  )
}

export default Events;