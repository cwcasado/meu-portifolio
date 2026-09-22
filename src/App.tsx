import Header from './Header'
import Hero from './Hero'
import Sobre from './Sobre'
import Projetos from './Projetos'
import Contato from './Contato'
import Footer from './Footer'
import './App.css'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Sobre />
        <Projetos />
        <Contato />
      </main>
      <Footer />
    </>
  )
}
