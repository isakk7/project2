import React from 'react'



const About = () =>{
    return (
    <div className="container" height="10" width="100"  >
  <div className="card" alt="swimmer" align="center">
  <img src="./bart.jpeg" className="card-img" alt="fix" height="400" width="50"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">An item</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
  </ul>
  <div className="card-body">
    <a href="instagram.com" class="card-link">Card link</a>
    <a href="facebook.com" class="card-link">Another link</a>
  </div>
</div>
</div>
    
    )
}

export default About