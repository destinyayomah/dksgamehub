import noImage from '../assets/no-image-placeholder-6f3882e0.webp';

const getCroppedImageUrl = (url: string) => {
    if(!url) return noImage;

    const target = 'media/';
    const urlArray = url?.split(target);
    return urlArray[0] + target + 'crop/600/400/' + urlArray[1];
}

export default getCroppedImageUrl;