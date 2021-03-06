// import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Container from '../components/Container/Container'

function MyApp({ Component, pageProps }) {

  return (
    <Container>
    <Component {...pageProps} />
    </Container>
    )
}

export default MyApp
