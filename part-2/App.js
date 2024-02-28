function App(){
    return(
        <div>
            <Tweet
            name="Alejandro"
            username="Megapretzel"
            date={new Date().toDateString()}
            message="Hello there"/>
            <Tweet 
            name="Squirmy"
            username="catthang"
            date={new Date().toDateString()}
            message="I am a cat"/>
            <Tweet 
            name="Paisly"
            username="Floof"
            date={new Date().toDateString()}
            message="Also a cat"/>
        </div>
    )
}