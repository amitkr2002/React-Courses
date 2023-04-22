import { useState } from "react";

function Products(props){
    // const itemsName="JBH";
    const [title1 ,setName] = useState(props.name);
    function clickHandler(){
        setName("Hello Amit Kumar Welcome");
        console.log("click hare");
      }

    return(
        <div>
            {title1}
            {props.children}
            <button onClick={clickHandler}>Click Here</button>
        </div>
    );
}
export default  Products;