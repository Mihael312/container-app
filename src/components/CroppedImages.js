const CroppedImages = ({ croppedImages }) => {
  return (
    <div className='gap-5'>
      {croppedImages && croppedImages.map((img, index) => {
        return (
          <img
            className={`img-fluid`}
            style={{ border: index === 0 && "5px solid rgb(100, 255, 95)"}}
            key={index}
            src={img}
            alt={`Cropped ${index}`}
          />
        );
      })}
    </div>
  );
};

export default CroppedImages;
