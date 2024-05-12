import React from 'react';

const CroppedImages = ({containerCode, croppedImages}) => {
    return(
        <>
        {containerCode && croppedImages && <div className='d-flex gap-5 me-3'>
          {croppedImages.map((img, index) => {
              console.log(img)
            return(
                <img className={index == 0 && "border border-3 border-warning"} width={"20em"} key={index} src={img} alt={`Cropped Image ${index}`} />
            )
            })}
        </div>}
        </>
    )
}

export default CroppedImages;