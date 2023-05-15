import React from 'react'

const Card = ({ movie}) => {
    return (
        <div className="movie w-64 min-h-72 rounded-xl overflow-hidden shadow-gray-900 shadow-lg ">
            <img src={movie.image} alt="image" />
            <h1 className='text-3xl text-slate-200'>{movie.title}</h1>
            <p className='text-slate-200'>{movie.description}</p>
        </div>
    )
}

export default Card