import banner from './static/banner.jpg'
import './banner.css'

function Banner() {
    return ( 
        <div className='banner-container'>
            <img  className='image-banner' src={banner} alt="banner.jpg" />
        </div>
    );
}

export default Banner;