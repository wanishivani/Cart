import {Card} from 'react-bootstrap'

export function Footer(){
return  (
<Card style={{backgroundColor:'grey'}}>   
    <div style={{bottom:'0',backgroundColor:'grey' ,padding:'20px' ,textAlign:"left"}}><h1 className="display-1">The Generse</h1></div>
    <Card.Img className="rounded-circle"  src="./image/spoty.png" variant="left"  style ={{height:'200px' , width: '300px'}}>
      </Card.Img>
      <Card.Img className="rounded-circle"  src="./image/youtube.png" variant="left"  style ={{height:'200px' , width: '300px' ,textAlign:'center'}}>
      </Card.Img>
    
     </Card>
    
    

)




}