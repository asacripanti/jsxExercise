function Tweet(prop){
    return(
        <div>
            <span>{prop.username}</span>
            <span>{prop.date}</span>
            <span>{prop.message}</span>
            <span>{prop.data}</span>
        </div>
        
    )
}