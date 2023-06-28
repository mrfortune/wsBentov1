import react from 'react';

const myLoader = ({ src, width, quality }) => {
    return `https://worldshaker.imgix.net/${src}?w=${width}&q=${quality || 75}`
}

export default myLoader;
