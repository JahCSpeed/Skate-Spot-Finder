import {Link, useMatch, useResolvedPath} from "react-router-dom";
export default function NavBar(){
    return(
        <nav className="nav">
            <Link to="/" className="site-title"> 
                Skate Finder
            </Link>
            <ul>
                <CustomLink to="/about"> About</CustomLink>
                <CustomLink to="/sign-up"> Sign Up</CustomLink>
                <CustomLink to="/sign-in"> Sign In</CustomLink>
            </ul>
        </nav>
    );
}

function CustomLink({to,children,...props}){
    const resolvedPath = useResolvedPath(to);
    const isActice = useMatch({path:resolvedPath.pathname,end:true});
    return(
        <li className={isActice? "active" : ""}> 
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>  
    );
    
}