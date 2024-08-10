import { assets } from '../../assets/images/assets'
import './AppDownload.css'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For a better experience, download <br/> the Tomato App!</p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="play-store" />
        <img src={assets.app_store} alt="app-store" />
      </div>
    </div>
  )
}

export default AppDownload