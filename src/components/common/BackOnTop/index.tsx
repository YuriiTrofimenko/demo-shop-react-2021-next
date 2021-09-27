import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IProps {
  children: React.ReactNode
}

const backOnTop: React.FC<IProps> = props =>
  <>
    <div id="back-on-top"></div>
      {props.children}
    <a href="#back-on-top">
      <div className="to-top">
        {/* <i className="fas fa-chevron-up"></i> */}
        <FontAwesomeIcon icon={['fas', 'chevron-up']} />
      </div>
    </a>
  </>

export default backOnTop