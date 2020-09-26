import React from 'react'

const Header = (props) => {
    const { branding } = props;
    return (
        <nav class="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
            <div className="container">
                 <a className="navbar-brand" href="/">
                {branding}
                </a>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">
                                Home 
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;

