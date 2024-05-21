import React from 'react'
import "./style.css"
interface buttontype{
  title: string,
}

const WhiteButton = ({title}:buttontype) => {
  return (
    <div>
        <button className="white-btn">{title}</button>
    </div>
  )
}

export default WhiteButton;

