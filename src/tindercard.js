import React,  { useState }  from 'react';
import './tindercards.css'; 
import TinderCard from 'react-tinder-card';

 
 function Tindercard() {

    const [people, setpeople] = useState([
    
        {
            name:'Elon Musk',
            url:'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/07/elon-musk.jpg?itok=8tWjadE3',

        },
        {
            name:'Jeff Bezos',
            url:'https://cdn.forbes.com.mx/2020/08/Jeff-Bezos-amazon-acciones-640x360.jpg',

        },
        {
            name:'Bill Gates',
            url:'https://www.eldigitalcastillalamancha.es/images/carpeta_relacionados/2020/09/17/156620_bill.gates.jpg',

        },

    ]);

    const swiped=(direction,nametodelete)=>{
        console.log("removing: " +nametodelete);

    };

    const outOfFrame=(name)=>{
        console.log(name + "left the screen");

    };

    return (
        <div className="tindercards">
            <div className="tinderCards_cardContainer">

                {people.map((person)=>(

                  <TinderCard
                      className="swipe"
                      key={person.name}
                      preventSwipe={["up","down"]}
                      onSwipe={(dir)=>swiped(dir,person.name)}
                      onCardLeftScreen={()=>outOfFrame(person.name)}
                    >

                    <div 
                    style={{ backgroundImage: "url(" + person.url + ")" }}

                    className="card"

                    >
                    <h3>{person.name}</h3>

                    </div>
                  </TinderCard>
               
        )) }
         </div>
    </div>

    );
}

export default Tindercard