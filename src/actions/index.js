import axios from 'axios';

export const MOVE_OBJECTS = 'MOVE_OBJECTS';
export const START_GAME = 'START_GAME';

// export const moveObjects = (id) => ({
//   const url = `http://localhost:8008/profile.json`
   
// });
 
export const getUser = () => {
  const url = `http://localhost:8008/profile.json`
  axios.get(url).then((data) => {
    console.log(data, '=======')
  })
}