import React from 'react';

const ImageList = props => {
    //desttructing props
    const images = props.images.map(({ urls, description, id }) => {
        return <img src={urls.regular} alt={description} key={id} />
    });
    return <div>{images}</div>
};

export default ImageList;