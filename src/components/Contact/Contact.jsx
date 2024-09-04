import React from 'react'
import './Contact.css'
import messageIcon from '../../assets/messageIcon.png'
import telephoneIcon from '../../assets/telephoneIcon.png'
import addressIcon from '../../assets/addressIcon.png'
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "badec78f-992a-48b4-8c03-2b1d4be210a1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
      <div className='contactCol'>
        <h3>Book a Reservation:</h3>
        <p>Our reservation team is available 24/7 to assist you promptly and ensure a seamless booking experience. Count on us for quick, friendly service whenever you need to reserve a table.</p>
      <ul>
        <li> <img src={messageIcon} alt="" /> table@mapleLeaf.com</li>
        <li> <img src={telephoneIcon} alt="" /> +91 95811 95269</li>
        <li> <img src={addressIcon} alt="" /> Ved Vihar, Trimulgherry, Secunderabad.</li>
      </ul>
      </div>
      <div className="contactCol">
        <form onSubmit={onSubmit}>
          <label>Full Name</label>
          <input type="text" name="name" placeholder="Enter your Full Name" required />
          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter your Phone Number" required/>
          <label>Number of people</label>
          <input type="number" name="people" placeholder="Enter the count of people" required/>
          <label>Specifications(if any):</label>
          <textarea name="message" rows="6" placeholder="Enter your Specifications"
          required></textarea>
          <button type='submit' className='btn dark-btn'>Submit</button>
          </form>
          <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
