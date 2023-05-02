const getCroppedImageUrl = (url: string) => {
    if(!url) return;
     
    const target = 'media/';
    const urlArray = url?.split(target);
    return urlArray[0] + target + 'crop/600/400/' + urlArray[1];
}

export default getCroppedImageUrl;