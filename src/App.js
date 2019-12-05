import React from 'react';
import { HashRouter , Route} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App(){
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;

/*STUDY
const foodILike = [
  {
    id: 1,
    name : "pasta",
    image: 
      "https://www.seriouseats.com/2019/08/20190809-burst-tomato-xo-pasta-vicky-wasik21-.jpg",
    rating: 5
  },
  {
    id: 2,
    name : "kimbop",
    image: 
      "http://imagescdn.gettyimagesbank.com/500/18/737/617/0/1086805950.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name : "tteockbokki",
    image: 
      "https://i.pinimg.com/originals/de/20/a0/de20a0fab5c850422caee9cfd3e0a147.jpg",
    rating: 4.8
  },
  {
    id: 4,
    name : "jajjangmen",
    image: 
      "https://pickledplum.com/wp-content/uploads/2017/10/jajangmyeon-330.jpg",
    rating: 5.5
  },
  {
    id: 5,
    name : "BBQ",
    image: 
      "https://media-cdn.tripadvisor.com/media/photo-s/12/ba/e3/61/getlstd-property-photo.jpg",
    rating: 4.7
  }
];*/

/* Food( props={fav} )  /  { props.fav = fav }*/
/*function Food({name, picture, rating}){
  return <div>
     <h2> I like {name}</h2>
     <h4>{rating}/5.0</h4>
     <img src={picture} alt={name}/>
    </div>
  }

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};// String number / Object의 유무확인

function App() {
  return (
    <div>
     {foodILike.map(dish => (
       <Food 
          key={dish.id} 
          name={dish.name} 
          picture={dish.image} 
          rating={dish.rating}
        /> 
     ))}
    </div>
    //<Food fav = "chicken" />
  );
}*/