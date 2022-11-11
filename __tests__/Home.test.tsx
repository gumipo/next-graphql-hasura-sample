import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from '../pages/index'
import { getPage } from 'next-page-tester'

describe('設置テスト', () => {
  it('Should render title text', async () => {
    const { page } = await getPage({
      route: '/index',
    })
    render(page)
    expect(screen.getByText('Next.js!')).toBeInTheDocument()
  })
})
