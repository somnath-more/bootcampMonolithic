import React from 'react';

export interface ImageProps {
  image: string;
  imageStyle?: object;
}
const ImageComponent = (props: ImageProps) => {
  return <img src={props.image} style={props.imageStyle} />;
};

export default ImageComponent;
