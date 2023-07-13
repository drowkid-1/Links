import React from 'react'

import '../css/skeleton.css'
import '../css/normalize.css'
import '../css/components.css'

function Footer(): JSX.Element {
    return (
        <div className="Footer container">
            <p>Derechos Reservados <span className="heart">❤️</span> by <a href={"https://drowkid.bswc.net "}> DrowKid </a></p>
        </div>
    )
}

export default Footer
