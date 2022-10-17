import { useEffect } from "react";
import Bow from "./game_managers/bow_system";
import  Event_manager from "./game_managers/event_manager";
function set_screen_size(screen_obj,w,h)
{
    screen_obj.style.width = w;
    screen_obj.style.height = h;
}
function Game()
{
    let key_state = {enter:"",down:"",up:""};
    const Mouse = {pos:{x:0,y:0},btn:{click:0,down:0,up:0},scr:0};
    const Keyboard = Object.create(key_state);
    const event_info =  {mouse:Mouse,keyboard:Keyboard}; 
    
    useEffect(()=>{
        let screen_obj = document.getElementById("screen");
        set_screen_size(screen_obj,"100vmax","100vmax");

    },[])
    

    return(
        <div id="screen">
        <Event_manager events={event_info}/>
        <Bow events={event_info}/>
        </div>
    );
}

export default Game;
