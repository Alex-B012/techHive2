import "./map.css"

function Map() {
   return (
      <div className="map__container">
         <iframe className="map__iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470.5167705776718!2d-122.24417510868312!3d37.50209391411741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fa2159f5f4cd1%3A0x398b3a1d4d9638f2!2sBest%20Buy!5e0!3m2!1sru!2sru!4v1754000118134!5m2!1sru!2sru"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
         </iframe>
      </div>
   )
}

export default Map