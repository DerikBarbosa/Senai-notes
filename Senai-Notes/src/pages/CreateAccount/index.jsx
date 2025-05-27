
import { useState } from 'react';
import logo from '../../assets/imgs/logo.png';
import Show from "../../assets/imgs/Show.png"
import './create.css';

function CreateAccount() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onNewUserClick = async (e) => {
    e.preventDefault();

    if (!email.trim()) return alert('Preencha o e-mail.');
    if (!password) return alert('Preencha a senha.');

    try {
      const response = await fetch(
        'https://apisenainotas-01-fddghxaxcna9augw.canadacentral-01.azurewebsites.net/register',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        alert('Você criou sua conta com sucesso!');
        window.location.href = '/login';
      } else {
        alert('Erro ao criar a conta. Verifique os dados ou tente novamente.');
      }
    } catch (err) {
      alert('Erro na conexão com o servidor.');
      console.error(err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="Senai Notes Logo" className="logo" />
        <h2>Create Your Account</h2>
        <p className="subtitle">
          Sign up to start organizing your notes and boost your productivity.
        </p>

        <form onSubmit={onNewUserClick}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="email@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
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

          <div className="icon">
            <h5 style={{ fontFamily: 'Inter, sans-serif' }}>At least 8 characters</h5>
          </div>

          <button type="submit" className="login-button">Sign up</button>
          <hr className="divider" />
        </form>

        <p className="signup">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default CreateAccount;
