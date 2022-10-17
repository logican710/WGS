import {useEffect} from "react"
function Event_manager({events})
{


   
    useEffect(()=>{

        let move= (event)=>{
            events.mouse.pos.x = event.pageX;
            events.mouse.pos.y = event.pageY;
        };
        let click= (event)=>{
            events.mouse.btn.click=event.buttons;
        };
        let down= (event)=>{
            if((events.mouse.btn.up==1||events.mouse.btn.up==3)&&event.buttons!=2)
            {
                events.mouse.btn.up-=1;
            }
            if((events.mouse.btn.up==2||events.mouse.btn.up==3)&&event.buttons!=1)
            {
                events.mouse.btn.up-=2;
            }
            events.mouse.btn.down=event.buttons;

        };
        let up= (event)=>{

            if((events.mouse.btn.down==1||events.mouse.btn.down==3)&&event.buttons!=1)
            {

                events.mouse.btn.down-=1;
            }
            if((events.mouse.btn.down==2||events.mouse.btn.down==3)&&event.buttons!=2)
            {

                events.mouse.btn.down-=2;
            }
            events.mouse.btn.up=event.buttons;
           
       
        };
        let wheel= (event)=>{
            events.mouse.scr=event.deltaY;
        };
       
        window.addEventListener("mousemove",move);
        window.addEventListener("click",click);
        window.addEventListener("wheel",wheel);

        window.addEventListener("mousedown",down);
        window.addEventListener("mouseup",up);
   



        return (() => 
            {
            window.removeEventListener("mousemove",move);
            window.removeEventListener("click",click);
            window.removeEventListener("wheel",wheel);

            window.removeEventListener("mousedown",down);
            window.removeEventListener("mouseup",up);

            });
    },[])

return;

}
export default Event_manager;
