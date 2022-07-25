import { ReactElement } from 'react'
import { Footer, Navbar } from '../../components'
import ImageCarousel from './ImageCarousel'

function ProjectDetails():ReactElement {
  return (
    <>
      <Navbar />
      <ImageCarousel />
      <Footer />
    </>
  )
}

export default ProjectDetails
