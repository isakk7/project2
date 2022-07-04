import React from 'react'



const About = () =>{
    return (
    <div className="container-info" height="100" width="100">
  <div className="card-info" alt="swimmer" align="center">
  <img src="./me.jpg" className="card-img" alt="fix" height="400" width="50"/>
  <div className="card-body">
    <h5 className="card-title">Isaac Adan Lopez</h5>
    <p className="card-text">19189</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">8°</li>
    <li className="list-group-item">Grupo "B"</li>
    <li className="list-group-item">IDGS</li>
  </ul>
  <div className="card-body">
    <a href="http://www.facebook.com" class="card-link">Facebook</a>
    <a href="http://www.instagram.com" class="card-link">Instagram</a>
  </div>
</div>
</div>
    
    )
}

export default About