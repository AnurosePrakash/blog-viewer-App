import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Format({ children }) {
  return (
    <>
      <Head>
        <title>Blog Viewer</title>
      </Head>

      <Header/>
      <main>{ children }</main>
      <Footer/>
    </>
  )
}
