import { useAuth0 } from '@auth0/auth0-react';

const Dashboard = () => {
  const { logout, user } = useAuth0();

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  const accessToken = localStorage.getItem("accessToken");
  const idToken = localStorage.getItem("idToken");

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      gap: '20px'
    }}>
      <h1>Hello!</h1>
      {user && (
        <div style={{ textAlign: 'center' }}>
          <p>Welcome, {user.name || user.email}!</p>
          {accessToken && <p><b>Access Token:</b> {accessToken}</p>}
          {idToken && <p><b>ID Token:</b> {idToken}</p>}
        </div>
      )}
      <button 
        onClick={handleLogout}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: '#dc3545',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default Dashboard;
