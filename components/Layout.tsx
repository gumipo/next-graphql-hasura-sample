import React from 'react'
import Link from 'next/link'

type LayoutProps = {
  children: React.ReactNode
  title: string
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <div>
      <nav>
        <Link href="/home">
          <a>Home</a>
        </Link>
        <Link href="/make_var">
          <a>makeVar</a>
        </Link>
        <Link href="/hasura">
          <a>Hasura</a>
        </Link>
        <Link href="/hasura_crud">
          <a>hasuraCRUD</a>
        </Link>
        <Link href="/hasura_ssg">
          <a>hasuraSSG</a>
        </Link>
      </nav>
      <div>{title}</div>

      <div>{children}</div>
    </div>
  )
}

export default Layout
