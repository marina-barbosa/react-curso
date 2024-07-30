
import PropTypes from 'prop-types';

const Button = (props) => {

  const style = {
    backgroundColor: props.cor || 'blue',
  };

  return (
    <button onClick={props.onClick} style={style}>
      {props.texto}
    </button>
  );
};

Button.propTypes = {
  texto: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  cor: PropTypes.string,
};

export default Button;