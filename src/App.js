import React, { useEffect,useState } from 'react';
import * as SC from './component/styled-component/styled';
import { url } from './helpers/apiServices';
import { Modal}  from './component/Modal/Modal';
import FindForm from './component/FindForm/FindForm';
import ListAllPicture from './component/ListAllPicture/ListAllPicture';
import ErrorMessage from './component/errorMessage/ErrorMessage';
import Spinner from './component/spinner/Spinner';
import PropTypes from 'prop-types';
// import LargeImage from './component/LargeImage/LargeImage'

const CURRENT_STATE ={
  panding:'panding',
  fullField: 'fullField',
  rejected: 'rejected'
};

export  const App  = () => {

  const [response, setResponse] = useState([]);
  const [keyWord, setKeyWord] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [loadMoreButn, setLoadMoreButn] = useState(false);
  const [isSmootheScrol, setIsSmootheScrol] = useState(false);
  const [isLoadModal, setIsLoadModal] = useState(false);
  const [isTotalImage, setisTotalImage] = useState(false);
  // const [isLoadSpinner, setisLoadSpinner] = useState(false);
  // const [isError, setIsError] = useState(false);

  const [isCurrentState, setIsCurrentState] = useState('');

  const [largeImg, setLargeImg] = useState([]);


  useEffect(()=>{

    if (keyWord !== '') {
    const func = async (word,page) =>{
      try{
            if (isTotalImage && pageNumber !== 0 ) {

              setIsCurrentState(CURRENT_STATE.panding);
            

                  const data = await url(word, page);
            
                  if (data.total === 0) return;
                  const { hits } = data;
                  setisTotalImage(false);
                  setLoadMoreButn(true);
                  setIsSmootheScrol(true);
                  setResponse(prev =>[...prev,...hits])
                  
                  setIsCurrentState(CURRENT_STATE.fullField);
                
                  if(pageNumber === Math.ceil(data.totalHits/12)){    
                    setIsSmootheScrol(false);
                  }
                
                }

                if(pageNumber > 1) {
                  const data = await url(word, page);
            
                  if (data.total === 0) return;
                  const { hits } = data;
                  setResponse(prev =>[...prev,...hits])
                  
                
                }
      } catch(error){
        setIsCurrentState(CURRENT_STATE.rejected);
        setIsSmootheScrol(false);
        setLoadMoreButn(false);
      }
      
    
      }
      func(keyWord,pageNumber);
    }
 
   
  },[isSmootheScrol,keyWord,pageNumber])

  useEffect(()=>{
    if(isSmootheScrol) {
      windowScroll();
    }
  })


 const  windowScroll = () => {
    window.scrollBy({
      top: 220,
      left: 0,
      behavior: 'smooth',
    });
  };


  const handleFindFormSubmit = (value) => {
   
    setisTotalImage(true);
      setKeyWord(value);
      setPageNumber(1);
      setResponse([]) ;
      setIsLoadModal (false);
  
  }

  

  const toggleOpenModal=(e) => {
  const alt = e.target.alt;
  const newRespp = response.filter(item => item.tags === alt)

   
      setIsLoadModal(!isLoadModal);
      // setIsLoadModal(!isLoadModal);
      setLargeImg ([...newRespp]);
   
  }

//  const onError = ()=>{
//   setisError(true);
//     };
//    //}

  const handleClickLoad = () => {
      setPageNumber(prev=> prev + 1);
  }

  const closeModal = () => {
      setIsLoadModal(false);
  };


 
  return (
    <>
 

    <div>
     <FindForm onSubmit={handleFindFormSubmit} />
     {isCurrentState === CURRENT_STATE.panding &&  <Spinner/> } 
    <ListAllPicture response={response} toggleOpenModal={toggleOpenModal}/>   
      {loadMoreButn && <button onClick={handleClickLoad} type='button'>Load more</button>}
    </div>
   {isLoadModal && <Modal closeModal={closeModal}>
    <img src={largeImg[0].largeImageURL} alt={largeImg[0].tags}/>
    </Modal>}
    {isCurrentState === CURRENT_STATE.rejected && <ErrorMessage/>}
   </>
  )
 
}

App.propTypes = {
  response: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired
  })),
  keyWord: PropTypes.string,
  pageNumber: PropTypes.number,
  loadMoreButn: PropTypes.bool,
  isSmootheScrol: PropTypes.bool,
  isLoadModal: PropTypes.bool,
  }

