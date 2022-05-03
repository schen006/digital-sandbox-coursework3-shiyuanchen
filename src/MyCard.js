import React from 'react'

export default function MyCard(props) {
      return (
        <div className="card">
          <img src={props.img} className="tou" />
          <div className="zhong">
              <h2>{props.name}</h2>
              <h4>{props.position}</h4>
              <button className="button">{props.email}</button>
          </div>
          <div className="wei">
              <h3>{props.introduce}</h3>
              <h3>{props.phone}</h3>
          </div>
        </div>
      )
    }
//上面的props可以随便命名一个，但是强烈建议弄props
    //然后，还是老样子，不过打数据的时候要用上上面命名的props
    // function Mycard() {
    //   return
    //     <div>
    //       <MyCard
    //           img="xxx"
    //           name="xxx"
    //           position="xxx"
    //           email="xxx"
    //           others="xxx"
    //           phone="xxx"
    //       />
    //     </div>
    // }
