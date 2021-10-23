// import { Route } from "react-router-dom"
import Home from './components/public/pages/Home'
import Gallery from './components/public/pages/Gallery'
import News from './components/public/pages/News'
import Profile from './components/public/pages/Profile'

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/gallery', name: 'Gallery', Component: Gallery },
  { path: '/news', name: 'News', Component: News },
  { path: '/profile', name: 'Profile', Component: Profile },
]

export default routes