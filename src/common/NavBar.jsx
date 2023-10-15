import logo from './static/banco-union.png'

function NavBar() {
    return ( 
        <div style={{height:'72px',width:'100%', display:'flex', flexDirection:'row', justifyContent:'center', position:'fixed', top:'0px', zIndex:'999', backgroundColor:'white'}}>
            <div style={{width:'90%', height:'60px'}}>
                <a href="/"><img src={logo} alt="banco-union.png" style={{height:'90%', margin:'10px'}} /></a>
            </div>
        </div>
     );
}

export default NavBar;