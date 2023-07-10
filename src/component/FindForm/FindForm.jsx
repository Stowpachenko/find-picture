// import React, { Component } from 'react'
// import { toast } from 'react-toastify';
// import * as SC from '../styled-component/styled';

// export default class FindForm extends Component {
//     state = {
//         findImageName: '',
//       }
    
//       handleInputChange = (e) => {
//         const { value, name } = e.target;
//         this.setState({
//           [name]: value
//         })
//       }
    
//       handleSubmit = (e) => {
//         e.preventDefault();
//         const searchInfo = e.currentTarget.elements.findImageName.value;

//        if(searchInfo.trim() ==='' ) {
//         return toast.warn('You must enter a keyword');
//       }
//         const { findImageName } = this.state;
//         const { onSubmit } = this.props;
//         onSubmit(findImageName);
       
//       }
    
//       render() {
//         const { findImageName } = this.state;
//         const { handleInputChange, handleSubmit } = this;
//         return (
//           <SC.FindForm onSubmit={handleSubmit}>
//             <label>
//               <SC.FindInput name='findImageName' onChange={handleInputChange} value={findImageName} type='search' placeholder='Search picture' />
//             </label>
//           </SC.FindForm>
//         )
//       }
//     }

// import React, { useState } from 'react';
// import { toast } from 'react-toastify';
// import * as SC from '../styled-component/styled';

// const FindForm = ({ onSubmit }) => {
//   const [findImageName, setFindImageName] = useState('');

//   const handleInputChange = (e) => {
//     const { value } = e.target;
//     setFindImageName(value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const searchInfo = e.currentTarget.elements.findImageName.value;

//     if (searchInfo.trim() === '') {
//       return toast.warn('You must enter a keyword');
//     }
//     onSubmit(findImageName);
//   };

//   return (
//     <>

//     <div>
//     <SC.StyledFindText>Find <br /> picture</SC.StyledFindText>
//     </div>
    
//     <SC.FindForm onSubmit={handleSubmit}>
//     <SC.StyledCenteredLabel>
//       <SC.FindInput name='findImageName' onChange={handleInputChange} value={findImageName} type='search' placeholder='Search picture' />
//     </SC.StyledCenteredLabel>
//   </SC.FindForm>
  
//   </>
//   );
// };

// export default FindForm;


// 12345678

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import * as SC from '../styled-component/styled';

const StyledFindFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledFindText = styled.span`
  margin-right: 10px;
`;

const FindForm = ({ onSubmit }) => {
  const [findImageName, setFindImageName] = useState('');

  const handleInputChange = (e) => {
    const { value } = e.target;
    setFindImageName(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchInfo = e.currentTarget.elements.findImageName.value;

    if (searchInfo.trim() === '') {
      return toast.warn('You must enter a keyword');
    }
    onSubmit(findImageName);
  };

  return (
    <SC.FindForm onSubmit={handleSubmit}>
      <StyledFindFormWrapper>
        {/* <StyledFindText>Find <br/> picture</StyledFindText> */}
        <SC.FindInput name='findImageName' onChange={handleInputChange} value={findImageName} type='search' placeholder='Search picture' />
      </StyledFindFormWrapper>
    </SC.FindForm>
  );
};

export default FindForm;

