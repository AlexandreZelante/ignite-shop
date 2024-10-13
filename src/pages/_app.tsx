import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import logoImg from '../assets/logo.svg'
import { Container, Header } from "../styles/pages/app";
import Image from "next/image";
// Call stitches global styles
globalStyles();

// Global Wrapper
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="logo-nice" />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
