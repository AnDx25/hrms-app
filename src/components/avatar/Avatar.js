import React from 'react'
function Avatar({srcUrl=`https://image.shutterstock.com/image-vector/profile-placeholder-image-gray-silhouette-600w-1153673752.jpg`}) {
    return (
        <div className="avatar">
            <img className="image" src={srcUrl} alt={"User Image"}/>
        </div>
    )
}

export default Avatar
