export const getSecurityURL = (symbol: string) =>
  `${
    import.meta.env.VITE_BACKEND_URL
  }/query?function=GLOBAL_QUOTE&symbol=${symbol.toUpperCase()}&apikey=${
    import.meta.env.VITE_API_KEY
  }`;
