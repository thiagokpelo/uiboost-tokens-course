import React from 'react';

const styles = {
  footer: {
    width: '100%',
    textAlign: 'center',
    padding: 24,
  },
  header: {
    width: '100%',
    padding: 24,
  },
  layout: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'auto',
    minHeight: '100vh',
    width: '100vw',
  },
  main: {
    display: 'grid',
    rowGap: '24px',
    padding: '0 24px',
    maxWidth: 640,
    width: '100%',
  },
};

const Layout = ({ children }) => (
  <>
    <header style={styles.header}>Header</header>
    <div style={styles.layout}>
      <main style={styles.main}>{children}</main>
    </div>
    <footer style={styles.footer}>Footer</footer>
  </>
);

export default Layout;
