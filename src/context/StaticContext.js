import React from 'react';

// este se consumirá en caso de que en App no se especifique el Provider
const Context = React.createContext({
  name: 'Jaume-sin-provider-en-app',
  lastname: 'Serradell-sin-provider-en-app'
})

export default Context;