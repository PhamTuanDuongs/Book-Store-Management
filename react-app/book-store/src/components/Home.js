
function home(){

    const role = JSON.parse(sessionStorage.getItem('role'));



    return(

        <div>
            <h1>Xin chao ngai</h1>
            {role}
            <br/>

        </div>


    )
}


export default home
