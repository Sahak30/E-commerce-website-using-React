import "./NewsLetter.css";

function NewsLetter() {
  return (
    <section className="newsletter">
      <h1>Get Exclusive Offers On Your Email</h1>

      <p>Subscribe to our Newsletter and stay updated</p>

      <form
        action="https://formsubmit.co/dream468bob@gmail.com"
        method="POST"
        className="new-form"
      >
        <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          required
        />

        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
}

export default NewsLetter;
