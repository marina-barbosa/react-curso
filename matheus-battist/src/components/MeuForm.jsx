import { useState } from 'react'
import './MeuForm.css'

const MeuForm = ({ user }) => {

  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [bio, setBio] = useState('');
  const [role, setRole] = useState('');

  const handleName = (event) => {
    setName(event.target.value);
    console.log(name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit:')
    console.log(name, email, bio, role);
    // limpar form
    setName('')
    setEmail('')
    setBio('')
    setRole('')
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* { criando form} */}
        {/* { handle } */}
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name='name' placeholder='Digite seu nome' onChange={handleName} value={name} />
        </div>
        {/* { label envolvendo input } */}
        {/* { inline } */}
        <label>
          <span>Email:</span>
          <input type="email" name='email' placeholder='Digite seu email' onChange={(event) => setEmail(event.target.value)} value={email} />
        </label>
        {/* { textare } */}
        <label>
          <span>Bio:</span>
          <textarea name="bio" placeholder='Descrição' onChange={(event) => setBio(event.target.value)} value={bio}></textarea>
        </label>
        {/* { select } */}
        <label>
          <span>Tipo:</span>
          <select name="role" onChange={(e) => setRole(e.target.value)}>
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>
        {/* { submit } */}
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MeuForm