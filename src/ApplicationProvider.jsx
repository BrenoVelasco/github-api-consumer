import React from 'react'
import ApplicationStyle from './ApplicationStyle'
import { StateProvider } from './utils/contextManagement'
import { SET_USER, SET_LANGUAGE } from './constants/reducers'

/**
 * Application layer that handles global variables
 */
const ApplicationProvider = () => {
  const initialState = {
    user: null,
    language: {
      id: 'pt-BR',
      name: 'Português',
    },
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case SET_USER:
        return {
          ...state,
          user: action.value,
        }
      case SET_LANGUAGE:
        return {
          ...state,
          language: action.value,
        }
      default:
        return state
    }
  }

  return (
    <StateProvider
      initialState={initialState}
      reducer={reducer}
      children={<ApplicationStyle />}
    />
  )
}

export default ApplicationProvider
