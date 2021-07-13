function PassFunctionAsProps(data){
    return(
        <div>
            <h3>Hello PassFunctionAsProps</h3>
            <button onClick={data.data}>Call Parent(App) funtion</button>
        </div>
    )
}

export default PassFunctionAsProps