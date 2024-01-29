import { useContext } from "react";
import { procedurelist } from "../store/procedurestore";

function Procedure() {
    const { list } = useContext(procedurelist);

    return (
        <>
            <div className="col-12 col-lg-8">
                {list.steps&&list.steps.map((step,index)=>(
                    <div key={index}>
                    <p><h5>{index}.</h5>
                    <p>{step}</p></p>
                    </div>
                ))}
                
            </div>
        </>
    );
}

export default Procedure;
