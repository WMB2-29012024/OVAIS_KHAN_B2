import Card from './card';
import './card.css';

const CardComponents = () => {
  const userName = ["Ovais","Kunal","Ajay","Yash","Nitin","asish","Akshu"]
  return(
  <>
   {userName.map((name) => <Card name={name} />)}
   </>
  );
}
export default CardComponents ;