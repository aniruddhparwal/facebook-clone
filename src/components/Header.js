import SearchIcon from '@material-ui/icons/Search'
import React from 'react'

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/600px-Facebook_f_logo_%282019%29.svg.png" alt="facebook logo" srcset="" />
                <div className="header__input">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="header__middle"></div>
            <div className="header__right"> </div>
        </div>
    )
}

export default Header
