const theme = {
  colors: {
    primary: {
      main: '#667eea',
      dark: '#764ba2',
      light: '#f5f7fa'
    },
    secondary: {
      main: '#c3cfe2',
      dark: '#333',
      light: '#fff'
    },
    background: {
      main: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      card: '#ffffff',
      hover: '#f8f9fa'
    },
    text: {
      primary: '#333',
      secondary: '#666',
      light: '#999',
      white: '#ffffff'
    },
    accent: {
      success: '#28a745',
      warning: '#ffc107',
      error: '#dc3545',
      info: '#17a2b8'
    }
  },
  
  fonts: {
    primary: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    secondary: "'Arial', sans-serif"
  },
  
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    '4xl': '2.5rem'
  },
  
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  },
  
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '2.5rem',
    '3xl': '3rem',
    '4xl': '4rem'
  },
  
  borderRadius: {
    none: '0',
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    full: '50%'
  },
  
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.15)'
  },
  
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1200px'
  },
  
  transitions: {
    fast: '0.15s ease',
    normal: '0.3s ease',
    slow: '0.5s ease'
  }
};

export default theme;