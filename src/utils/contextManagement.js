import React, { createContext, useContext, useReducer } from 'react'

export const StateContext = createContext({})

/**
 * Simulates react-redux using Context and Reducer
 * @param {*} param0
 */
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)
