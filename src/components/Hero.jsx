
const Hero = () => {
  return (
    <section className="container--hero">
        <img className="hero__bg" src="/images/bg-hero-desktop.svg" alt="asd" />
        <div className="container">
            <div className="subcontainer hero">
                <article>
                    <h1 className="hero__title">Build The Community Your Fans Will Love</h1>
                    <p className="hero__paragraph">Huddle re-imagines the way we build communities. You have a voice
                    but so does your audience. Create connections with your users as you
                    engage in genuine discussion.</p>
                    <button className="hero__btn">Get Started For Free</button>
                </article>
                <img className="hero__img" src="/images/illustration-mockups.svg" alt="Screen Mockup" />
            </div>
        </div>
    </section>
  )
}

export default Hero