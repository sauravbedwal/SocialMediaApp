import React from 'react'
import "./style.css"
import { Link } from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Followers = () => {
    return (
        <div className='container container-padding2'>
            <div style={{ display: 'flex', alignItems: 'center', height: "85px", width:"300px" }}>

                <div style={{ width: "14vw" }}>
                    <Link to="/menu">
                        <div className="followersButton-back">
                            <div className="arrow-icon">
                                <ArrowBackIcon />
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="followersMenuProfile">

                    <div style={{ fontWeight: "bold", fontSize: "14px" }}>
                        Followers(4K)
                    </div>
                </div>
            </div>

            <div className='menuSection'></div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: 'center', width: "300px", height: "100px" }}>
                <div style={{ display: 'flex', justifyContent: "flex-start" }}>

                    <div className='followersMenuAvatarImage'></div>
                    <div style={{ margin: "0 0 0 5px", display: "flex", flexDirection: "column" }}>
                        <div style={{ fontWeight: "bold" }}>Shah Rukh Khan</div>
                        <div>@srk</div>
                    </div>
                </div>
                <div className='followersMenuTotalBorder'>
                    <p>Follow</p>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: 'center', width: "300px" }}>
                <div style={{ display: 'flex', justifyContent: "flex-start" }}>

                    <div className='followersMenuAvatarImage'></div>
                    <div style={{ margin: "0 0 0 5px", display: "flex", flexDirection: "column" }}>
                        <div style={{ fontWeight: "bold" }}>Robert Downey Jr.</div>
                        <div>@rdj</div>
                    </div>
                </div>
                <div className='followersMenuTotalBorder'>
                    <p >Follow</p>
                </div>
            </div>
            <Link to="/chat" style={{ textDecoration: "none" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: 'center', width: "300px", height: "100px" }}>
                    <div style={{ display: 'flex', justifyContent: "flex-start" }}>

                        <div className='followersMenuAvatarImage'></div>
                        <div style={{ margin: "0 0 0 5px", display: "flex", flexDirection: "column" }}>
                            <div style={{ fontWeight: "bold" }}>Tom Cruise</div>
                            <div>@tomcruise</div>
                        </div>
                    </div>
                    <div className='followersMenuTotalBorder'>
                    <p>Follow</p>
                </div>
                </div>
            </Link>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: 'center', width: "300px", height: "100px" }}>
                <div style={{ display: 'flex', justifyContent: "flex-start" }}>

                    <div className='followersMenuAvatarImage'></div>
                    <div style={{ margin: "0 0 0 5px", display: "flex", flexDirection: "column" }}>
                        <div style={{ fontWeight: "bold" }}>Elezabeth</div>
                        <div>@elezabeth</div>
                    </div>
                </div>
                <div className='followersMenuTotalBorder'>
                    <p>Follow</p>
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: 'center', width: "300px", height: "100px" }}>
                <div style={{ display: 'flex', justifyContent: "flex-start" }}>

                    <div className='followersMenuAvatarImage'></div>
                    <div style={{ margin: "0 0 0 5px", display: "flex", flexDirection: "column" }}>
                        <div style={{ fontWeight: "bold" }}>Shah Rukh Khan</div>
                        <div>@srk</div>
                    </div>
                </div>
                <div className='followersMenuTotalBorder'>
                    <p>Follow</p>
                </div>
            </div><div style={{ display: "flex", justifyContent: "space-between", alignItems: 'center', width: "300px", height: "100px" }}>
                <div style={{ display: 'flex', justifyContent: "flex-start" }}>

                    <div className='followersMenuAvatarImage'></div>
                    <div style={{ margin: "0 0 0 5px", display: "flex", flexDirection: "column" }}>
                        <div style={{ fontWeight: "bold" }}>Shah Rukh Khan</div>
                        <div>@srk</div>
                    </div>
                </div>
                <div className='followersMenuTotalBorder'>
                    <p>Follow</p>
                </div>
            </div>

            {/* <div>
        <div>
            <span>Image</span>
            <span>
                <h1>Shah Rukh Khan</h1>
                <p>@srk</p>
            </span>
            <span>
                <button>follow</button>
            </span>
        </div>

        <div>
            <span>Image</span>
            <span>
                <h1>Robert Downey Jr.</h1>
                <p>@rdj</p>
            </span>
            <span>
                <button>following</button>
            </span>
        </div>

        <div>
            <span>Image</span>
            <span>
                <h1>Tom Cruise</h1>
                <p>@tomcruise</p>
            </span>
            <span>
                <button>follow</button>
            </span>
        </div>

        <div>
            <span>Image</span>
            <span>
                <h1>Elezabeth</h1>
                <p>@elezabeth</p>
            </span>
            <span>
                <button>follow</button>
            </span>
        </div>

        <div>
            <span>Image</span>
            <span>
                <h1>Kate Winslet</h1>
                <p>@KateWinslet</p>
            </span>
            <span>
                <button>follow</button>
            </span>
        </div>

        <div>
            <span>Image</span>
            <span>
                <h1>Saoirse Hopper</h1>
                <p>@saoirsehop</p>
            </span>
            <span>
                <button>following</button>
            </span>
        </div>

        <div>
            <span>Image</span>
            <span>
                <h1>Melina Charlton</h1>
                <p>@melinacharlton</p>
            </span>
            <span>
                <button>following</button>
            </span>
        </div>

        </div> */}





        </div>
    )
}

export default Followers;