import Pet from "./pet";

export default function Results({pets}){
    return (
         <div className="search">
            {(!pets.length)?(
                <h2>No Pet Found!</h2>
            ):(
                pets.map((pet)=>
                   ( <Pet 
                    animal={pet.animal}
                    breed={pet.breed}
                    name={pet.name}
                    id={pet.id}
                    location={`${pet.city},${pet.state}`}
                    images={pet.images}
                    key={pet.id}
                     />)

                    //  <Pet 
                    //  {...pet}
                    //  key={pet.id}/>
                )
            )}
         </div>

    )
}
