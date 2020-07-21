import Link from 'next/link';


function Menu(){
    return (
        <div>
        <link rel="stylesheet" href="/css/menu.css" />
        <input type="checkbox" id="menuShowHide" />
        <label for="menuShowHide"></label>
        <ul id="mainMenu">
            <li><Link href="/"><a>HOME</a></Link></li>
            <li><Link href="/game"><a>GAME</a></Link></li>
            <li><Link href="/howtojoin"><a>HOW TO JOIN</a></Link></li>
            <li><Link href="/tipsandtrick"><a>TIPS AND TRICK</a></Link></li>
            <li><Link href="/about"><a>ABOUT</a></Link></li>
            {/* <li><a href="forum">FORUM</a></li> */}
        </ul> 
        </div> 
    );
}

export default Menu;