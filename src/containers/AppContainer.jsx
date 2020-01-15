import React, { useState } from 'react'
import { useRequest } from '../utils/hooks'
import Header from '../components/Header'
import UsersCards from '../components/UsersCards'

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

  return (
    <>
      <Header search={fetchUsers} setQuery={setQuery} />
      <UsersCards
        users={users.items ? users.items : []}
        statusRequestUsers={statusRequestUsers}
        pagination={pagination}
      />
    </>
  )
}

export default AppContainer
