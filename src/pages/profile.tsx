import type { NextPage } from 'next'

import { Layout } from '../components/template/Layout'
import useAppData from '../data/hook/useAppData'

const profile: NextPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {theme, switchTheme} = useAppData()

  return (
    <div>
      <Layout title='Perfil' subtitle='Construindo perfil...'>
        <button onClick={switchTheme}>Alternar</button>
      </Layout>
    </div>
  )
}

export default profile
