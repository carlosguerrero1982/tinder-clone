import React,  { useState }  from 'react';
import './tindercards.css'; 
import TinderCard from 'react-tinder-card';

 
 function Tindercard() {

    const [people, setpeople] = useState([
    
        useEffect(() => {
       async function fetchData(){
            const req = await axios.get('/tinder/cards');
             setpeople(req.data);
       }
        fetchData();

    }, [])

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
                    style={{ backgroundImage: "url(" + person.imgUrl + ")" }}

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
