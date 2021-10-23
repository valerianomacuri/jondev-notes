import React from 'react'

export const Header = () => {
    return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignSelf: 'flex-start',
            alignItems: 'center',
          }}
        >
          <img
            src="./logo.png"
            alt='logo'
            style={{
              width: '30px',
              height: '30px',
              boxShadow: '0px 5px 50px rgba(32, 35, 41, 0.15)',
              borderRadius: '5px',
              display: 'inline-block',
              marginRight: '10px'
            }}
          />
          <p
            style={{
              fontWeight: 'bold',
            }}

          >Jondev Notes</p>
        </div>
    )
}
