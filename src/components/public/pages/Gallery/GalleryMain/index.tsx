// import { useEffect/* , useState */ } from 'react'
import GalleryMainNavbar from './GalleryMainNavbar'
import GalleryMainContent from './GalleryMainContent'
import GalleryMainFooter from './GalleryMainFooter'

const GalleryMain: React.FC = () => {
  return (
    <main>
      <div className="container">
        <GalleryMainNavbar/>
        <GalleryMainContent/>
        <GalleryMainFooter/>
      </div>
    </main>
  )
}

export default GalleryMain