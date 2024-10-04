import React, { useState } from 'react';
import './styles.css'
import Navbar from '../../components/Navbar';

const SettingsPage = (props) => {
  const [profile, setProfile] = useState({
    username: 'Pedro Gustavo',
    email: 'Email@gmail.com',
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    smsNotifications: false,
  });

  const [preferences, setPreferences] = useState({
    theme: 'light',
  });

  // Função para atualizar perfil
  const handleProfileChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  // Função para atualizar notificações
  const handleNotificationChange = (e) => {
    setNotifications({
      ...notifications,
      [e.target.name]: e.target.checked,
    });
  };

  // Função para atualizar preferências
  const handlePreferencesChange = (e) => {
    setPreferences({
      ...preferences,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    console.log('Configurações salvas:', { profile, notifications, preferences });
  };

  return (
    <>
    <body>
    <Navbar />
    <div style={{ padding: '20px' }}>
  
      <h1>Configurações</h1>

     

      <section>
        <h2>Perfil</h2>
        <label>
          Nome de Usuário:
          <input
            type="text"
            name="username"
            value={profile.username}
            onChange={handleProfileChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleProfileChange}
          />
        </label>
      </section>

      <hr />

      <section>
        <h2>Notificações</h2>
        <label>
          Notificações por Email:
          <input
            type="checkbox"
            name="emailNotifications"
            checked={notifications.emailNotifications}
            onChange={handleNotificationChange}
          />
        </label>
        <br />
        <label>
          Notificações por SMS:
          <input
            type="checkbox"
            name="smsNotifications"
            checked={notifications.smsNotifications}
            onChange={handleNotificationChange}
          />
        </label>
      </section>

      <hr />

    
      <section>
        <h2>Preferências</h2>
        <label>
          Tema:
          <select
            name="theme"
            value={preferences.theme}
            onChange={handlePreferencesChange}
          >
            <option value="light">Claro</option>
            <option value="dark">Escuro</option>
          </select>
        </label>
      </section>

      <br />


      <button onClick={handleSave}>Salvar Configurações </button>
      
    </div>
    </body>
    </>
  );
  
};



export default SettingsPage;
