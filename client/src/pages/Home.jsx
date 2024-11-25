import { Analytics } from "../components/Analytics";
export const Home = () => {
  return (
    <>
    <main>
      <section>
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            <p>We are the best of best cyber cafe</p>
            <h1>Welcome to NET.POOL</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Curabitur vitae nunc sed velit dignissim sodales ut eu sem.
              Proin sagittis nisl rhoncus mattis rhoncus. Morbi quis commodo
               odio aenean sed adipiscing diam donec adipiscing.
               </p>
               <div className="btn btn-group">
                <a href="/contact"><button className="btn">connect now</button></a>

                <a href="/services"><button className="btn secondary-btn">learn more</button></a>

               </div>

          </div>
         <div className="hero-image">
          <img src="/images/home.png" alt="coding together" width="400" height="500"/>
         </div>

        </div>
      </section>
    </main>
          {/* 2nd analytics section */}

       <Analytics/>

 {/* 3rd section  */}
 <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src="/images/design.png"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              let's discuss how Thapa Technical can help your business thrive in
              the digital age.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>


    </>
  )
};

