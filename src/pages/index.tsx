import type { NextPage } from 'next'

import { Layout } from '../components/template/Layout'

const Home: NextPage = () => {
  return (
    <div>
      <Layout title='Pagina Inicial' subtitle='Construindo...'>
        <h3>Conteudo!!!</h3>
      </Layout>
    </div>
  )
}

export default Home
