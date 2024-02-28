function App(){
    return(
        <div>
            <Person 
            name="Alejandro"
            age={30}
            hobbies={["Guitar", "video games", "coding"]}/>
            <Person 
             name="Squirmy"
             age={1}
             hobbies={["sleeping", "fetch"]}/>
            <Person
             name="Floof"
             age={5}
             hobbies={["chasing string", "pets"]} />
        </div>
    );
}