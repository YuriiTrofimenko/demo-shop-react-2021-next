import GalleryMainNavbar from './GalleryMainNavbar'
import GalleryMainContent from './GalleryMainContent'
import GalleryMainFooter from './GalleryMainFooter'

const galleryMain: React.FC = () => (
  <main>
    <div className="container">
      <GalleryMainNavbar/>
      <GalleryMainContent/>
      <GalleryMainFooter/>
    </div>
  </main>
)

export default galleryMain