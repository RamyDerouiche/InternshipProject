import React from 'react';
import './Assistance.css';

function Assistance() {
  return (
    <section id="contact" className="contact section assistance-page">
      <div className="container section-title" data-aos="fade-up">
        <h2>Assistance</h2>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 mb-5 justify-content-center">
          <div className="col-lg-12 col-md-14" data-aos="fade-up" data-aos-delay="200">
            <div className="info-card">
              <div className="icon-box">
                <i className="bi bi-telephone" />
              </div>
              <h3>Numéro de contact</h3>
              <p>
                Mobile: +216 20700600
                <br />
                Email: admin@soprahr.com
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="form-wrapper" data-aos="fade-up" data-aos-delay="400">
              <form className="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <div className="input-group">
                      <span className="input-group-text"><i className="bi bi-person" /></span>
                      <input type="text" name="name" className="form-control" placeholder="Your name*" required />
                    </div>
                  </div>
                  <div className="col-md-6 form-group">
                    <div className="input-group">
                      <span className="input-group-text"><i className="bi bi-envelope" /></span>
                      <input type="email" name="email" className="form-control" placeholder="Email address*" required />
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6 form-group">
                    <div className="input-group">
                      <span className="input-group-text"><i className="bi bi-phone" /></span>
                      <input type="text" name="phone" className="form-control" placeholder="Phone number*" required />
                    </div>
                  </div>
                  
                  <div className="form-group mt-3">
                    <div className="input-group">
                      <span className="input-group-text"><i className="bi bi-chat-dots" /></span>
                      <textarea name="message" className="form-control" rows="6" placeholder="Write a message*" required />
                    </div>
                  </div>
                  <div className="my-3">
                    <div className="error-message" />
                  </div>
                  <div className="text-center">
                    <button type="submit">Submit Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Assistance;