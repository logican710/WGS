import {useEffect,useState} from "react"
function Bow({events})
{
    let [bow_img,set_bow_img]=useState("5.png");
    useEffect(()=>{
        let bow_obj = document.getElementById("bow");
        bow_obj.style.position = "absolute";
        bow_obj.style.transformOrigin="center";

        
        function step() 
        {
                bow_obj.style.left=events.mouse.pos.x+"px";
                bow_obj.style.top=events.mouse.pos.y-(bow_obj.clientHeight/2)+"px";
            
            window.requestAnimationFrame(step);

        }
        window.requestAnimationFrame(step);

    },[])

return(

<img id="bow" src={bow_img}/>
);

}
export default Bow;
