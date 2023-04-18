import "../CSS/Form.css";

const Form = () => {

  const ClearFields =(e) => {
    Array.from(e.target).forEach((e) => (e.value = ""));
  }
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      ClearFields(e);
    }
    }>
      <label htmlFor="name">Full Name</label> <br />
      <input type="text" name="name" id="name" minLength={4} required />
      <br />
      <label htmlFor="email">Email Address</label>
      <br />
      <input type="email" name="email" id="email" required />
      <br />
      <label htmlFor="message">Message</label>
      <br />
      <textarea name="message" id="message" cols="38" rows="3"></textarea>
      <br />
      <button
        type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
