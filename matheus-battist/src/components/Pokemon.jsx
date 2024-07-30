import Bulbasaur from '../assets/bulbasaur.gif';

const Pokemon = () => {
  return (
    <span>

      {/* Imagem em public */}
      <img src="/public/cubone.gif" className="cubone gif" alt="Cubone gif" />


      {/* Imagem em assets */}
      <img src={Bulbasaur} className="bulbasaur gif" alt="Bulbasaur gif" />

    </span>
  )
}

export default Pokemon;