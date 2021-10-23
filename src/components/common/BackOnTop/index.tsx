import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IProps {
  children: React.ReactNode
}

const BackOnTop: React.FC<IProps> = props =>
  {
    const [visibilityStyle, setVisibilityStyle] = useState('')
    useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setVisibilityStyle('to-top__show')
      } else if (window.scrollY < 100) {
        setVisibilityStyle('')
      }
    }
    return (
      <>
        <div id="back-on-top"></div>
          {props.children}
        <a href="#back-on-top">
          <div className={['to-top', visibilityStyle].join(' ')}>
            <FontAwesomeIcon icon={['fas', 'chevron-up']} />
          </div>
        </a>
      </>
  )}

export default BackOnTop