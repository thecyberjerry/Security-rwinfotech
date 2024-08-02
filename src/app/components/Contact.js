import React from "react";
import Heroheading from "./minicomponents/Heroheading";
import Button from "./minicomponents/Button";

export default function Contact({ contactData }) {
  return (
    <div className="container-fluid contact">
      {contactData && (
        <div className="contact__form container">
          <div className="contact__heading">
            {contactData?.heroheading && (
              <Heroheading
                content={
                  contactData?.heroheading?.content &&
                  contactData?.heroheading?.content
                }
                size={
                  contactData?.heroheading?.size &&
                  contactData?.heroheading?.size
                }
              />
            )}
          </div>
          {contactData?.form && (
            <div className="contact__inputs">
              <form>
                <div className="contact__names">
                  <input
                    name="firstname"
                    type="text"
                    placeholder={contactData?.form?.firstName}
                  />
                  <input
                    name="secondname"
                    type="text"
                    placeholder={contactData?.form?.secondName}
                  />
                </div>
                <input
                  name="Email"
                  type="email"
                  placeholder={contactData?.form?.email}
                />
                <input
                  name="Phone Number"
                  type="tel"
                  placeholder={contactData?.form?.phone}
                />
                <textarea
                  name="message"
                  type="text"
                  placeholder={contactData?.form?.textArea}
                  rows={5}
                />
                <div>
                  {contactData?.btn && <Button btn={contactData?.btn} />}
                </div>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
