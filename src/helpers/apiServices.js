 import axios from "axios";

 export const url = async (name,pageNumber=1) => {
  const API_KEY = '35176721-04c1f6333192b2aa464c60371';
  const searchParams = new URLSearchParams({key:API_KEY,
                                            image_type: 'photo',
                                            orientation: 'horizontal',
                                            safesearch: 'true',
                                            per_page: 12,
                                            page: pageNumber,
                                            q: `${name}`,
                                          });
const url = `https://pixabay.com/api/?${searchParams}`;
 const response = await axios.get(url);

 return response.data;
 }
