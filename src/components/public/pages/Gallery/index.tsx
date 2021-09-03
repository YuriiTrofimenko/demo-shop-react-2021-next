import BackOnTop from '../../../common/BackOnTop'
import SubscriptionModal from '../../../common/Modal'
import Header from '../../../public/base/Header'
import GalleryMain from './GalleryMain'

const gallery: React.FC = () => (
  <BackOnTop>
    <SubscriptionModal/>
    <Header/>
    <GalleryMain/>
  </BackOnTop>
)

export default gallery