function PropsFunctional(PropData){
    //console.log(PropData)
    return(
        <div style={{backgroundColor:"grey"}}>
            <h6>Name: {PropData.Name}</h6>
            <h6>Mob: {PropData.Mob}</h6>
            <h6>Add: {PropData.Other.Add}</h6>
            <h6>Pin: {PropData.Other.Pin}</h6>
        </div>
    )
} 

export default PropsFunctional