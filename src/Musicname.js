import React from "react"
import './indexnew.css';

export default function Musicname(props) {
    return (
        <div className="introduce">
            <ul>
               <tr>
                 <td>{props.musicname}</td>
               </tr>
            </ul>
        </div>
    )
}
