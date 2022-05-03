import React from "react";
import './indexnew.css';

export default function Footer() {
      return (
        <div style={{display: "flex",flexDirection: "column",alignItems: "center",justifyContent:"flex-end",flexGrow: 1}}>
            <footer id="footer">
                <h6 className="description"><br />Design and Developed by Shiyuan Chen, User experience enginnering, goldsmiths university of London <br /> Contact email: schen006@gold.ac.uk</h6>
           </footer>
       </div>
      );
    }
