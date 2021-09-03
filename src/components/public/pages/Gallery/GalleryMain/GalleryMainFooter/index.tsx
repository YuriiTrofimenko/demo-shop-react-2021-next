const footer: React.FC = () => (
  <section className="promo">
    <div className="promo__title">
      <h1>Hurry up to buy!</h1>
      <p>Subscribe now <br />and get all promotions!</p>
    </div>
    <div className="promo__form">
      <form action="" id="form">
        <input
          className="promo__form-email"
          type="email"
          placeholder="Email"
          id="email"
        />
        <input
          className="promo__form-button"
          type="submit"
          value="Subscribe"
          id="submit"
        />
        <div className="promo__form-subscribe">
          <input type="checkbox" id="news" />
          <label htmlFor="news">Subscribe for the news latters</label>
        </div>
      </form>
    </div>
  </section>
)

export default footer