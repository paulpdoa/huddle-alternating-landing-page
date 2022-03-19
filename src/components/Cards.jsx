
const Cards = () => {

  return (
    <section className="container">
        <div className="subcontainer card">
            <div className="card__block">
                <article>
                    <h2 className="card__title">Grow Together</h2>
                    <p className="card__paragraph">Generate meaningful discussions with your audience and build a strong, loyal community. 
                    Think of the insightful conversations you miss out on with a feedback form.</p>
                </article>
                <img className="card__img" src="/images/illustration-grow-together.svg" alt="Grow Together" />
            </div>

            <div className="card__block card--flowing">
                <article>
                    <h2 className="card__title">Flowing Conversations</h2>
                    <p className="card__paragraph">You wouldn't paginate a conversation in real life, so why do it online? Our threads 
                    have just-in-time loading for a more natural flow.</p>
                </article>
                <img className="card__img" src="/images/illustration-flowing-conversation.svg" alt="Flowing Conversations" />
            </div>

            <div className="card__block">
                <article>
                    <h2 className="card__title">Your Users</h2>
                    <p className="card__paragraph">It takes no time at all to integrate Huddle with your app's authentication solution. 
                    This means, once signed in to your app, your users can start chatting immediately.</p>
                </article>
                <img className="card__img" src="/images/illustration-your-users.svg" alt="Your Users" />
            </div>

            <div className="modal">
                <h2 className="modal__title">Ready To Build Your Community?</h2>
                <button className="modal__btn">Get Started For Free</button>
            </div>
        </div>
    </section>
  )
}

export default Cards