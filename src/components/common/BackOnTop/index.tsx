import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IProps {
  children: React.ReactNode
}

const BackOnTop: React.FC<IProps> = props =>
  {
    const [visibilityStyle, setVisibilityStyle] = useState('')
    const anchorRef = useRef<null | HTMLDivElement>(null)
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
    const handleClick = () => {
      if (anchorRef && anchorRef.current) {
        anchorRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    return (
      <>
        <div id="back-on-top" ref={anchorRef}></div>
        {props.children}
        <div className={['to-top', visibilityStyle].join(' ')} onClick={handleClick}>
          <FontAwesomeIcon icon={['fas', 'chevron-up']} />
        </div>
      </>
  )}

export default BackOnTop