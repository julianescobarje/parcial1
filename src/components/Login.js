import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const [session, setSession] = useState({
    login: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    emailError: '',
    passwordError: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setSession({
      ...session,
      [name]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      emailError: '',
      passwordError: '',
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(session.login)) {
      newErrors.emailError = 'Por favor ingrese un correo electrónico válido';
      isValid = false;
    }

    if (session.password.length < 8) {
      newErrors.passwordError = 'La contraseña debe tener al menos 8 caracteres';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log(session);
      navigate('/home');
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url("https://unsplash.com/es/fotos/persona-nadando-en-el-mar-2lDtnHgiQzc")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container
        style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '10px',
          maxWidth: '400px',
          width: '100%',
        }}
      >
        <Form onSubmit={handleSubmit}>
          <h3 className="text-center mb-4">Log in</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="login"
              placeholder="Enter email"
              value={session.login}
              onChange={handleInputChange}
              isInvalid={!!errors.emailError}
            />
            <Form.Control.Feedback type="invalid">
              {errors.emailError}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={session.password}
              onChange={handleInputChange}
              isInvalid={!!errors.passwordError}
            />
            <Form.Control.Feedback type="invalid">
              {errors.passwordError}
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Log in
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Login;
