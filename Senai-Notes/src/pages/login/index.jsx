import { useState } from 'react';
import logo from '../../assets/imgs/logo.png';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onLoginClick = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'https://apisenainotas-01-fddghxaxcna9augw.canadacentral-01.azurewebsites.net/login',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        alert('Login realizado com sucesso!');
        let json = await response.json();

        let token = json.acessToken;
        let userId = json.user.id;

        localStorage.setItem('meuToken', token);
        localStorage.setItem('meuId', userId);

        // Redireciona para /notes futuramente
        // window.location.href = '/notes';
      } else if (response.status === 401) {
        alert('Suas credenciais estão incorretas. Tente novamente.');
      } else {
        alert('Erro inesperado ocorreu. Caso continue, contate um administrador.');
      }
    } catch (error) {
      alert('Erro na conexão com os servidores.');
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="Senai Notes Logo" className="logo" />
        <h2>Welcome to Note</h2>
        <p className="subtitle">Please log in to continue</p>

        <form onSubmit={onLoginClick}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="email@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">
            Password <a href="#" className="forgot">Forgot?</a>
          </label>
          <div className="password-field">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" className="toggle-password" onClick={togglePasswordVisibility}>
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          <button type="submit" className="login-button">Login</button>
          <hr className="divider" />
        </form>

        <p className="signup">
          No account yet? <a href="/create-account">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;