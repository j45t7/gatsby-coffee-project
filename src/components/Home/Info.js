import React from "react"
import { Link } from "gatsby"
import Title from "../Global/Title"
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              minus earum deserunt ipsum nemo aut doloremque consequuntur
              repudiandae odit nostrum similique recusandae, saepe quae quos
              ducimus voluptates quasi nam animi sed mollitia impedit sequi?
              Reiciendis sequi facilis molestiae? Nisi quibusdam hic repellendus
              necessitatibus nobis esse et. Dolorum sequi libero dolor!
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
