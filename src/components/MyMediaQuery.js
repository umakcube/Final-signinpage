import Form from './Form';
import FromSiginUp from './FromSiginUp';
import Media from 'react-media';


function MyMediaQuery()  {
    return(

        <div className="App">
  
        <Media query="(min-width:600px)">
        { matches =>{
          return matches ? <Form /> : <FromSiginUp />;
        }
        }
        </Media>
     </div>
    );
}

export default MyMediaQuery
