import React  from 'react'

const createcontext = React.createContext();
const UserProvider = createcontext.Provider
const UserConsumer = createcontext.Consumer

export {UserProvider,UserConsumer}