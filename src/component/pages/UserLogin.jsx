import React from 'react';

const UserLogin = () => {
  const styles = {
    body: {
      background: '#e9ebee',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'sans-serif',
      margin: 0,
      padding: 0,
    },
    container: {
      width: '80%',
      display: 'flex',
      height: '100%',
    },
    login: {
      flex: 1,
      backgroundColor: '#fafafa',
      borderRadius: '10px 0 0 10px',
      textAlign: 'center',
      paddingTop: '100px',
      boxSizing: 'border-box',
    },
    loginTitle: {
      marginBottom: '40px',
      fontSize: '2.5em',
    },
    input: {
      width: '80%',
      padding: '10px',
      marginBottom: '30px',
      border: 'none',
      backgroundColor: '#eeeeef',
    },
    checkbox: {
      float: 'left',
      marginRight: '5px',
    },
    loginSpan: {
      float: 'left',
    },
    loginLink: {
      float: 'right',
      textDecoration: 'none',
      color: '#000',
      transition: '0.3s all ease-in-out',
    },
    loginLinkHover: {
      color: '#9526a9',
      fontWeight: 'bold',
    },
    loginButton: {
      width: '80%',
      margin: '30px 0',
      padding: '10px',
      border: 'none',
      backgroundColor: '#9526a9',
      color: '#fff',
      fontSize: '20px',
      cursor: 'pointer',
      transition: '0.3s all ease-in-out',
    },
    loginButtonHover: {
      width: '97%',
      fontSize: '22px',
      borderRadius: '5px',
    },
    hr: {
      width: '30%',
      display: 'inline-block',
    },
    p: {
      display: 'inline-block',
      margin: '0 10px 30px',
    },
    ul: {
      listStyle: 'none',
      marginBottom: '40px',
      padding: 0,
    },
    li: {
      display: 'inline-block',
      marginRight: '30px',
      cursor: 'pointer',
    },
    liLastChild: {
      marginRight: 0,
    },
    liHover: {
      opacity: 0.6,
    },
    clearfix: {
      display: 'inline-block',
      float: 'none',
    },
    register: {
      flex: 1,
      backgroundImage: 'linear-gradient(135deg, #23212f 5%, #9526a9 95%)',
      color: '#fff',
      borderRadius: '0 10px 10px 0',
      textAlign: 'center',
      padding: '100px 0',
      boxSizing: 'border-box',
    },
    registerTitle: {
      margin: '30px 0',
      fontSize: '50px',
      letterSpacing: '3px',
    },
    registerText: {
      fontSize: '18px',
      marginBottom: '30px',
    },
    registerButton: {
      backgroundColor: 'transparent',
      border: '1px solid #FFF',
      borderRadius: '20px',
      padding: '10px 20px',
      color: '#fff',
      fontSize: '20px',
      textTransform: 'uppercase',
      transition: '0.2s all ease-in-out',
    },
    registerButtonHover: {
      color: '#9526a9',
      backgroundColor: '#fff',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <div style={styles.login}>
          <div>
            <h1 style={styles.loginTitle}>Log in</h1>
            <input type="email" placeholder="Email" style={styles.input} />
            <input type="password" placeholder="Password" style={styles.input} />
            <br />
            <input type="checkbox" style={styles.checkbox} />
            <span style={styles.loginSpan}>Remember me</span>
            <a href="#" style={styles.loginLink}>Forgot password?</a>
            <button style={styles.loginButton}>Log in</button>
            <hr style={styles.hr} />
            <p style={styles.p}>Or Connect With</p>
            <hr style={styles.hr} />
            <ul style={styles.ul}>
              <li style={styles.li}>
                <i className="fab fa-facebook-f fa-2x"></i>
              </li>
              <li style={styles.li}>
                <i className="fab fa-twitter fa-2x"></i>
              </li>
              <li style={styles.li}>
                <i className="fab fa-github fa-2x"></i>
              </li>
              <li style={{ ...styles.li, ...styles.liLastChild }}>
                <i className="fab fa-linkedin-in fa-2x"></i>
              </li>
            </ul>
            <div style={styles.clearfix}></div>
            <span className="copyright">©2019</span>
          </div>
        </div>
        <div style={styles.register}>
          <div>
            <i className="fas fa-user-plus fa-5x"></i>
            <h2 style={styles.registerTitle}>Hello, friend!</h2>
            <p style={styles.registerText}>Enter your personal details and start your journey with us</p>
            <button style={styles.registerButton}>
              Register <i className="fas fa-arrow-circle-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
