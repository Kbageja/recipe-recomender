import { useContext } from "react";
import { procedurelist } from "../store/procedurestore";

function Ingredients(){
    const { list } =  useContext(procedurelist);
    return(<>
     <div className="col-12 col-lg-4">
                        <div className="ingredients">
                            <h4>Ingredients</h4>
                            {list.ingredients && list.ingredients.map((ingredient,index)=>(
                                 <div className="custom-control custom-checkbox " key={index}>
                                 <input type="checkbox" className="custom-control-input checkbox" id="customCheck1"/>
                                 <label className="custom-control-label" htmlFor="customCheck1">{ingredient.name} {ingredient.servingSize.desc}</label>
                             </div>))}                            
                           </div>
       </div>
    </>);

}
export default Ingredients;