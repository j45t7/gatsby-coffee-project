import React from "react"
import Title from "../Global/Title"

export default function Contact() {
  return (
    <section className="contact py-5">
      <Title title="Contact Us" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form
            action="https://formspree.io/f/justy.marciniak@gmail.com"
            method="post"
          >
            {/* name */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="john smith"
              />
            </div>
            {/* email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="johnsmith@gmail.com"
              />
            </div>
            {/* description */}
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                rows="5"
                className="form-control"
                placeholder="your description..."
              />
            </div>
            {/* submit */}
            <button
              type="submit"
              className="btn btn-yellow btn-block text-capitalize"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
