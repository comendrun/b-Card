import React from 'react'
import "./intro.css"

const Intro = () => {
  return(
    <div className="intro">
      <div className="introduction">
        <h1 className='name'>Kamran Rouhani</h1>
        <h2 className='job-position'>Web Developer</h2>
        <h3 className='website'>kamran.ruhani.com</h3>
      </div>
      <div className='introsocial'>
        <form className='introform' method="post" action="mailto:kamran.ruhani@gmail.com" >
          <button className='btn email-btn' type="submit" value="Email"><i class="fa-solid fa-envelope fa-xl"></i>   Email</button>
        </form>
        <a href='https://www.linkedin.com/in/kamran-rouhani-webdev/'>
          <button className='btn linkedin-btn' type='submit'><i class="fa-brands fa-linkedin fa-xl"></i> LinkedIn</button>
        </a>
      </div>
    </div>
  )
}

export default Intro;
