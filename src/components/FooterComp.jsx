import React, { Component } from 'react'
import './Footer.css'
class FooterComp extends Component {
  render() {
    return (
        <section className='bg-dark'>
            <div className='container text-white text-center'>
            <div className='row'>
                <div className='col-lg-12 mt-3'>
                    <p>© 2022 All Rights Reserved Terms of Use and Privacy Policy</p>
                </div>
            </div>
            </div>
        </section>
    )
  }
}
export default FooterComp;
