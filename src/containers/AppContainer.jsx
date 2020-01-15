import React, { useState } from 'react'
import { useRequest } from '../utils/hooks'
import Header from '../components/Header/Header.jsx'
import UsersCards from '../components/UsersList/UsersCards.jsx'

const AppContainer = () => {
  const pagination = 20

  const [query, setQuery] = useState('')

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
      />
    </>
  )
}

export default AppContainer
