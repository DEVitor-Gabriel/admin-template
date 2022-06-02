import type { NextPage } from 'next'

import { Layout } from '../components/template/Layout'
import useAppData from '../data/hook/useAppData'

const notifications: NextPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {theme, switch_theme} = useAppData()

  return (
    <div>
      <Layout title='Notificações' subtitle='Construindo Notificações...'>
        <h3>{theme}</h3>
        <button onClick={switch_theme}>Alternar</button>
      </Layout>
    </div>
  )
}

export default notifications
