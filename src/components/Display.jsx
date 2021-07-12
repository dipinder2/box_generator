import React from 'react';

const Display = ({div}) => {
  return (
    <div style={{display:'flex'}}>
		{
          div.map(d => {
                    let divStyle = {
                      background: d.background,
                      width:d.width+"px",
                      height:d.height+"px",
                      marginLeft:"5px"
                    }
                  return <div style={divStyle}></div>
                })

          }
    </div>
  )
}

export default Display;