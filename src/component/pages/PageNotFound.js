import React from 'react'
import {Link} from 'react-router-dom'

export default function PageNotFound() {
    return (
        <div>
            <h1 className="text-center mt-5">Page Not found </h1>
            <Link to="/">Got back to Home  </Link>
        </div>
    )
}
