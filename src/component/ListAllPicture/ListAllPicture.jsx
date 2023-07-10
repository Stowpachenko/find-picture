import React from 'react';
import * as SC from '../styled-component/styled';




const ListAllPicture = ({ response, toggleOpenModal }) => {
  return (
    <SC.ListAllPicture>
      {response.map(({ id, largeImageURL, webformatURL, tags, likes }) => (
        <SC.ImageItem key={id}>
          <SC.Image onClick={toggleOpenModal} src={webformatURL} alt={tags} />
          <SC.ImageTags>{tags}</SC.ImageTags> 
          <SC.ImageLikes>{likes}</SC.ImageLikes>
        </SC.ImageItem>
      ))}
    </SC.ListAllPicture>
  );
};

export default ListAllPicture;
