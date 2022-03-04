import React from 'react'
import ImageUploading from "react-images-uploading";

function ImageUploader() {

    const [images, setImages] = React.useState([]);
    const maxNumber = 69;
    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
        console.log(imageList["0"]["data_url"]);
    };

    return (
        <div className="image_uploader"
            style={{
                "height": "180px",
                "width": "1171p",
                "border": "1px dashed #7A7A7A",
                "boxSizing": "border-box"
            }}>
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
            >
                {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps
                }) => (
                    // write your building UI
                    <div className="upload__image-wrapper"
                        style={{}}>
                        <button className="upload_image_button"
                            style={isDragging ? { color: "red" } : null}
                            onClick={onImageUpload}
                            {...dragProps}
                        >
                            Upload image
                        </button>
                        {imageList.map((image, index) => (
                            <div key={index} className="image-item"
                                style={{
                                    "display ": "flex",
                                    "margin": "10px 0"
                                }}>
                                <img src={image.data_url} alt="" width="100" />
                                {/* <input type="text" value={image.data_url}/> */}
                                <div className="image-item__btn-wrapper"
                                >
                                    <button className="btn btn-primary" onClick={() => onImageUpdate(index)}>Update</button>
                                    <button className="btn btn-danger" onClick={() => onImageRemove(index)}>Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )
                }
            </ImageUploading >
        </div >
    )
}

export default ImageUploader