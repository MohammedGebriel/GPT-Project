import React from 'react'
import './article.css'
function Article({imgUrl, date, title}) {
    return (
        <div className='article d-flex flex-column'>
            <div className="article-image">
                <img src={imgUrl} alt="" />
            </div>
            <div className="article-content d-flex flex-column justify-content-between">
                <div>
                    <p>{date}</p>
                    <h3>{title}</h3>
                </div>
                <p>Read Full Article</p>
            </div>
        </div>
    )
}

export default Article