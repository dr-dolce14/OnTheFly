import './ImageList.css';
import React from 'react';

const ImageList = (props) => {
    // const images = props.images.map((image) => {
    //     return <img key={image.id} src={image.urls.regular} alt={image.description} />
    // })

    const images = props.images.map(({ description, id, urls }) => {
        return <img alt={description} key={id} src={urls.regular} />;
    });

    return <div className="image-list">{images}</div>;
};

export default ImageList;