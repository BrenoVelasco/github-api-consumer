import React, { useState, useEffect } from 'react'
import { useRequest } from '../utils/hooks'
import Header from '../components/Header/Header.jsx'
import UsersCards from '../components/UsersList/UsersCards.jsx'

const AppContainer = () => {
  const pagination = 20

  const [query, setQuery] = useState('')
  const [storedUsers, setStoredUsers] = useState([])
  const [usersBuffer, setUsersBuffer] = useState([])

  const [users, statusRequestUsers, fetchUsers] = useRequest(
    [],
    {
      url: `search/users`,
      method: 'get',
      params: {
        q: query,
        per_page: pagination,
      },
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    },
    null
  )

  const [, , fetchUser] = useRequest(
    [],
    {
      url: `users/${usersBuffer.login}`,
      method: 'get',
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    },
    null,
    {
      onComplete: data => {
        // populates in an array of users already fetched
        setStoredUsers([...storedUsers, data])
      },
    }
  )

  useEffect(() => {
    if (usersBuffer.login) {
      fetchUser()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usersBuffer])

  const search = () => {
    if (query !== '') {
      fetchUsers()
    }
  }

  return (
    <>
      <Header search={search} query={query} setQuery={setQuery} />
      <UsersCards
        users={users.items ? users.items : []}
        statusRequestUsers={statusRequestUsers}
        pagination={pagination}
        storedUsers={storedUsers}
        setUsersBuffer={setUsersBuffer}
      />
    </>
  )
}

export default AppContainer
