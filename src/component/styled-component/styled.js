// import styled from 'styled-components';

// export const ImageTags = styled.h2`
//   position: absolute; 
//   top: 0; 
//   left: 0; 
//   margin: 10px; 
//   color: white; 
// `;

// export const FindForm = styled.form`
 
//  /* background-color: #63717f;
//   text-align: center;
//   margin: 0 ;
//   height: 50%; */
// /* position: absolute; */
// height: 88px;
// left: 0px;
// top: 0px;

// background: #242324;

// `;

// export const FindInput = styled.input`
//   width:400px;
//   margin: 10px;
//   white-space: nowrap;
//   position: relative;
//   outline: none; 
// `;

// export const ImageLikes = styled.span`
//   position: absolute;
//   top: 30px; 
//   left: 0; 
//   margin: 10px; 
//   color: white; 
// `;

// // export const ListAllPicture = styled.ul`
// // justify-content:space-between;
// //   list-style: none;
// //   display: flex;
// //    /* flex-wrap: wrap-reverse; */
// // `;

// // export const ImageItem = styled.li`
// //   position: relative;
// //   width: 100%;
// //   margin-bottom: 10px;
// // `;

// export const ListAllPicture = styled.ul`
//   list-style: none;
//   display: flex;
//   flex-wrap: wrap; 
//   justify-content: space-between; 
// `;

// export const ImageItem = styled.li`
//   position: relative;
//   flex-basis: calc(33.33% - 10px); 
//   margin-bottom: 10px;
// `;

// export const Image = styled.img`
//   display: block; 
//   width: 100%;
//   height: auto; 
// `;


import styled from 'styled-components';

export const ImageTags = styled.h2`
  position: absolute; 
  top: 0; 
  left: 0; 
  margin: 10px; 
  color: white; 
`;

export const FindForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 88px;
  background: #242324;
`;

export const FindInput = styled.input`
  width: 400px;
  padding: 10px;
  border: none;
  background: white;
  color: black;
  outline: none;
  transition: border-color 0.3s ease, border-radius 0.3s ease; 

  &:hover,
  &:focus {
    border-color: white;
    border-radius: 30px; 
  }
`;

export const ImageLikes = styled.span`
  position: absolute;
  top: 30px; 
  left: 0; 
  margin: 10px; 
  color: white; 
`;

export const ListAllPicture = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap; 
  justify-content: space-between; 
`;

export const ImageItem = styled.li`
  position: relative;
  flex-basis: calc(33.33% - 10px); 
  margin-bottom: 10px;
`;

export const Image = styled.img`
  display: block; 
  width: 100%;
  height: auto; 
`;

// export const StyledFindLabel = styled.label`
//   display: flex;
//   align-items: flex-start; /* Расположение элементов внутри */
// `;

export const StyledFindText = styled.p`
  margin-right: 2000px; 
  /* color: white; */

  /* display: flex; */
  /* align-items: flex-start; */
`;

// export const StyledCenteredLabel = styled.label`
//   display: flex;
//   justify-content: center;
// `;