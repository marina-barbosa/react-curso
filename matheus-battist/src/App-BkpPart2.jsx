import "./App.css";
import { useState, useEffect } from "react";
import { useFetchGet } from "./hooks/useFetchGet";
import { useFetchPost } from "./hooks/useFetchPost";
import { useFetchDelete } from "./hooks/useFetchDelete";

import Header from "./components/HeaderProps";
import Button from "./components/ButtonProps";

import loadingGif from "./assets/loading-lottiefiles.gif";

// url para testar msg de erro
// const url = "http://caminho-inexistente";
const url = "http://localhost:3000/products";

function App() {

  // const [products, setProducts] = useState([])
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const { data: listItems, getData, loading, error } = useFetchGet(url);
  const { postData } = useFetchPost(url);
  const { deleteData } = useFetchDelete(url);
  const [shouldReload, setShouldReload] = useState(true); // inicia como true para carregar os dados inicialmente

  // chamado sempre que shouldReload mudar para true
  useEffect(() => {
    if (shouldReload) {
      getData();
      setShouldReload(false); // reseta para false dps de get dados
    }
  }, [shouldReload, getData]);

  const handleAddProduct = (event) => {
    event.preventDefault();
    const product = {
      name,
      price,
    };
    postData(product);
    setShouldReload(true); // sinaliza q deve dar reload na page    
    // clear
    setName('');
    setPrice('');
  };


  const handleRemove = (event, id) => {
    event.preventDefault();
    deleteData(id);
    setShouldReload(true);
  }

  const handleClick = () => {
    alert('Botão clicado!');
  };

  const links = [
    { text: 'Home', url: '#home' },
    { text: 'Sobre', url: '#sobre' },
    { text: 'Contato', url: '#contato' },
  ];

  return (
    <div className="App">
      <Header
        logo="CodeDotMB"
        logoColor="#535bf2"
        links={links}
        linksColor="#eee"
        headerColor="#333"
      />
      <h1>Lista de produtos</h1>
      {error && <p>{error}</p>}
      {loading ? (
        <img src={loadingGif} alt="Carregando..." />
        // <p>Carregando ...</p>
      ) : (
        <ul>
          {listItems != null ? (
            listItems.map((product) => (
              <li key={product.id}>
                {product.name} - R$: {product.price}
                <button className="btn-delete" onClick={(event) => handleRemove(event, product.id)} disabled={loading}>X</button>
              </li>
            ))
          ) : (
            <li>Sem produtos disponíveis</li>
          )}
        </ul>
      )}

      <div className="add-product">
        <h3>Adicionar produto:</h3>
        <form onSubmit={handleAddProduct}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <input type="submit" value={loading ? "Aguarde..." : "Adicionar"} disabled={loading} />
        </form>
      </div>
      <Button texto="Clique aqui" onClick={handleClick} />
    </div>
  );
}

export default App;