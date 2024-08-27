import React from 'react'

const Designs = () => {
  return (
    <div>
        {/* Additional Design Elements */}
        <div className="absolute inset-0 z-0">
                {/* Blobs */}
                <div className="absolute -top-10 left-10 w-96 h-96 bg-gradient-to-r from-sky-500 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
                <div className="absolute -bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-sky-500 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

                {/* Dots */}
                <div className="absolute top-10 left-10 w-24 h-24 2xl:w-32 2xl:h-32 bg-dots opacity-20"></div>
                <div className="absolute bottom-10 right-10 w-24 h-24 2xl:w-32 2xl:h-32 bg-dots opacity-20"></div>

                {/* Grid */}
                <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-10 pointer-events-none"></div>
                
            </div>
    </div>
  )
}

export default Designs