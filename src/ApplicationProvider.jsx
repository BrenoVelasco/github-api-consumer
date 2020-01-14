import React from 'react'
// import ApplicationStyle from './ApplicationStyle'
import { StateProvider } from './utils/contextManagement'
import { SET_USER } from './constants/reducers'

/**
 * Application layer that handles global variables
 */
const ApplicationProvider = () => {
  const initialState = {
    user: null,
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case SET_USER:
        return {
          ...state,
          user: action.value,
        }
      default:
        return state
    }
  }

  return (
    <StateProvider
      initialState={initialState}
      reducer={reducer}
      // children={<ApplicationStyle />}
    />
  )
}

export default ApplicationProvider
