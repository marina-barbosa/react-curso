import styled from 'styled-components';

const FormContainer = styled.div`
  background-color: ${props => props.theme === 'dark' ? '#333' : '#f9f9f9'};
  color: ${props => props.theme === 'dark' ? '#fff' : '#000'};
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid ${props => props.theme === 'dark' ? '#444' : '#ccc'};
  border-radius: 4px;
  background-color: ${props => props.theme === 'dark' ? '#555' : '#fff'};
  color: ${props => props.theme === 'dark' ? '#eee' : '#000'};
`;

const SubmitButton = styled.button`
  background-color: ${props => props.primary ? '#007bff' : '#6c757d'};
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  
  &:hover {
    opacity: 0.8;
  }
`;

const LoginForm = ({ primary, theme }) => {
  return (
    <FormContainer theme={theme}>
      <FormGroup>
        <Label htmlFor="username">Username</Label>
        <Input type="text" id="username" theme={theme} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" theme={theme} />
      </FormGroup>
      <SubmitButton primary={primary}>Login</SubmitButton>
    </FormContainer>
  );
};

export default LoginForm;