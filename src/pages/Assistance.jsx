import React from 'react';
import './Assistance.css';

function Assistance() {
  return (
    <section id="contact" className="contact section assistance-page">
      <div className="container section-title" data-aos="fade-up">
        <h2>Assistance</h2>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 mb-5">
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="info-card">
              <div className="icon-box">
                <i className="bi bi-telephone" />
              </div>
              <h3>Numéro de contact</h3>
              <p>
                Mobile: +216 20700600
                <br />
                Email: info@example.com
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
                  <div className="col-md-6 form-group">
                    <div className="input-group">
                      <span className="input-group-text"><i className="bi bi-list" /></span>
                      <select name="subject" className="form-control" required>
                        <option value="">Select service*</option>
                        <option value="Service 1">test1</option>
                        <option value="Service 2">test2</option>
                        <option value="Service 3">test3</option>
                        <option value="Service 4">test4</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <div className="input-group">
                      <span className="input-group-text"><i className="bi bi-chat-dots" /></span>
                      <textarea name="message" className="form-control" rows="6" placeholder="Write a message*" required />
                    </div>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message" />
                    <div className="sent-message">Your message has been sent. Thank you!</div>
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