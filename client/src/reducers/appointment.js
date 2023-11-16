 const appointments = (appointments = [], action ) => {
  switch(action.type){
    case 'FETCH_ALL':
      
      return action.payload;
  
    case 'CREATE_APPOINTMENT':
      return [...appointments, action.payload]; 
    default:
      return appointments;
}
} 
 
export default appointments