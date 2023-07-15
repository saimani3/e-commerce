import React from 'react'
import '../Assets/styles/About.css';
import Iframe from 'react-iframe';
const Contacts = () => {
  return (
    <div >
      <section id='about' className="bg-parlex">
        <div className="parlex-back">
            <div className="container  text-center">
				<h2>Contacts</h2>
            </div>
        </div>
    </section>
    <section id="contactUs" className="page-section secPad">
        <div className="container">

            <div className="row">
                <div className="heading text-center">
                    <h2>Let's Keep In Touch!</h2>
                    <p id='thanknote'>Thank you for visiting out my profile. If you would like to get into contact with me go through the below address and phone Numbers.</p>
                </div>
            </div>

            <div className="row mrgn30">

                
                <div className="col-sm-6" >
                <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7687.3061237175125!2d73.75076855!3d15.55671855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfea1cd8a1deff%3A0xba7066c0ee35c1e0!2sBaga%20Beach!5e0!3m2!1sen!2sin!4v1666336559328!5m2!1sen!2sin" width="570" height="350"  allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></Iframe>
                </div>
                <div className="col-sm-5" style={{marginLeft:"20px"}}>
                    <h4>Address:</h4>
                    <address>
                        Goa,North Goa<br/>
                        Bardez,403516<br/>
                       AreaCode:083227<br/>
                       
                    </address>
                    <h4>Phone:</h4>
                    <address>
                        +91 8328099775(What's app Number)<br/>
                        +91 6304541179<br/>
                        +91 9133635238<br/>
                    </address>
                    <h4>Branches:</h4>
                    <address>
                    Goa(Head Office),Delhi,Ooty,hyderabad,vizag,kakinada.
                    </address>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Contacts;