
function Products(props){
    // const itemsName="JBH";
    return(
        <div>
            {props.name}
            {props.children}
        </div>
    );
}
export default  Products;