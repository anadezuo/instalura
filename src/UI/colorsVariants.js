const colorStatus = {
  error: {
    main: {
      color: '#dc3545',
      contrastText: '#fff',
    },
  },
  success: {
    main: {
      color: '#28a745',
      contrastText: '#fff',
    },
  },
};

export const colorsLight = {
  background: {
    main: {
      color: '#FFFFFF',
    },
  },
  borders: {
    main: {
      color: '#F2F2F2',
    },
  },
  primary: {
    main: {
      color: '#D7385E',
      contrastText: '#fff',
    },
  },
  secondary: {
    main: {
      color: '#FB7B6B',
      contrastText: '#fff',
    },
  },
  tertiary: {
    main: {
      color: '#070C0E',
      contrastText: '#fff',
    },
    light: {
      color: '#88989E',
      contrastText: '#fff',
    },
  },
  logo: {
    main: {
      color: '#070C0E',
    },
  },
  backgroundImage: {
    main: {
      color: '#F2F2F2',
      contrastColor: '#fff',
    },
  },
  modal: {
    main: {
      color: 'rgba(0, 0, 0, 0.1)',
    },
  },
  ...colorStatus,
};

export const colorsDark = {
  background: {
    main: {
      color: '#030506',
    },
  },
  borders: {
    main: {
      color: '#181F22',
    },
  },
  primary: {
    main: {
      color: '#D7385E',
      contrastText: '#fff',
    },
  },
  secondary: {
    main: {
      color: '#FB7B6B',
      contrastText: '#fff',
    },
  },
  tertiary: {
    main: {
      color: '#fff',
      contrastText: '#030506',
    },
    light: {
      color: '#D4D4D4',
      contrastText: '#030506',
    },
  },
  logo: {
    main: {
      color: '#fff',
    },
  },
  backgroundImage: {
    main: {
      color: '#F2F2F2',
      contrastColor: '#030506',
    },
  },
  modal: {
    main: {
      color: 'rgba(255, 255, 255, 0.1)',
    },
  },
  ...colorStatus,
};
