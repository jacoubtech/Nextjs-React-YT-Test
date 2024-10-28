import internal from "stream";



type HeaderParam = {
    name: string;
    num? : boolean;
    
  }
  function Header(props:HeaderParam) {
    return(<> <h1>{props.name}</h1>
        </>
    )
  }

  export default Header ;