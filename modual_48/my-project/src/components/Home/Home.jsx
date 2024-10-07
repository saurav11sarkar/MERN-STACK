import { Helmet } from "react-helmet-async"
import Books from "../Books/Books"
import Bannder from "./Bannder"

function Home() {
  return (
    <>
    <Helmet>
      <title>Book || Home</title>
    </Helmet>
    <Bannder></Bannder>
    <Books></Books>
    </>
    
  )
}

export default Home