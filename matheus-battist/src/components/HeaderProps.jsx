
import './HeaderProps.css'
import PropTypes from 'prop-types';

const Header = ({ logo, logoColor, links, linksColor, headerColor }) => {

  const linksDefault = [
    { text: 'Home', url: '#home' },
    { text: 'Sobre', url: '#sobre' },
    { text: 'Contato', url: '#contato' },
  ]
  if (!links) links = linksDefault;

  return (
    <header style={{ backgroundColor: headerColor }}>
      <div className='logo-header-props'>
        <div style={{ color: logoColor }}>{logo}</div>
      </div>
      <nav>
        {links.map((link, index) => (
          <a key={index} href={link.url} style={{ color: linksColor }}>
            {link.text}
          </a>
        ))}
      </nav>
    </header>
  );
};

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  logoColor: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })).isRequired,
  linksColor: PropTypes.string,
  headerColor: PropTypes.string
};

export default Header;