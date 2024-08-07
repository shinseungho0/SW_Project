import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { Outlet } from "react-router-dom";
import '../css/Header.css'

function Header() {
    return (
        <div className = "Header">
            <h1 className = "Header-h1" style={{ display: 'flex', justifyContent: 'center'}}>Dong-A 3D Model WYSIWYG Editor &nbsp;
                <Badge bg="secondary" as={Button}>
                 React & Node
                </Badge>
            </h1>
            <Outlet/>
        </div>
    )
}
export default Header;