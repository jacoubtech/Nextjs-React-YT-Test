import internal from "stream";


type Footerparam = {
    footname : string ; 
}

function Footer(props:Footerparam) {
    return(
        <><div>da best</div><p className="footer">{props.footname}</p></>
        
    )
}
export default Footer;