import { useContext ,useState} from "react";
import Ingredients from "./ingredients";
import Procedure from "./procedure";
import { procedurelist } from "../store/procedurestore";


function Recipepost(){
   const {list} = useContext(procedurelist);
   function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${date}/${month}/${year}`;
  }
   const [currentDate, setCurrentDate] = useState(getDate());
    return(
        <>
          <div class="breadcumb-area bg-img bg-overlay">
        <div class="container h-100">
            <div class="row h-100 align-items-center">
                <div class="col-12">
                    <div class="breadcumb-text text-center">
                        <h2>Todays Recipe</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner recipeimg">
    <div className="carousel-item active">
        <center>
      <img src={list.image} className="d-block w-100 recipeimage" alt="..."/>
      </center>
    </div>
  </div>
</div>
         <div className="receipe-content-area">
            <div className="container">

                <div className="row">
                    <div className="col-12 col-md-8">
                        <div className="receipe-headline my-5">
                            <span>{currentDate}</span>
                            <h2>{list.name}</h2>
                            <div className="receipe-duration">
                                <h6>Prep: {list.prepareTime} min</h6>
                                <h6>Cook: {list.cookTime} mins</h6>
                                <h6>Yields: {list.servings} Servings</h6>
                            </div>
                        </div>
                    </div>

                    
                </div>

                <div className="row">
                <Procedure></Procedure>
                <Ingredients></Ingredients>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="section-heading text-left">
                            <h3>Leave a comment</h3>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="contact-form-area">
                            <form action="#" method="post">
                                <div className="row">
                                    <div className="col-12 col-lg-6 row2">
                                        <input type="text" className="form-control" id="name" placeholder="Name"/>
                                    </div>
                                    <div className="col-12 col-lg-6 row2">
                                        <input type="email" className="form-control" id="email" placeholder="E-mail"/>
                                    </div>
                                    <div className="col-12 row2">
                                        <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                                    </div>
                                    <div className="col-12 row2">
                                        <textarea name="message" className="form-control" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                                    </div>
                                    <div className="col-12 postbutton">
                                        <button className="btn delicious-btn mt-30" type="submit">Post Comments</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Recipepost;