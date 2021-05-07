import React, { useState } from 'react';

const AccessForm = () => {
  const [email, setEmail] = useState('');
  const [valid, setValid] = useState(true);

  const handle_form_input = (e) => 
  {
    let value = e.target.value;
    setEmail(value);
  }

  const validate_email = (e_mail) =>
  {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e_mail))
    {
      return (true);
    }
    return (false);
  }

  const handle_form_submit = (e) => 
  {
    e.preventDefault();
    setValid(validate_email(email));
  }

  return (
    <div className="AccessForm">
      <div className="container">
        <h1>Get early access today</h1>
        <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
        <form action="">
          <input 
            type="email" 
            placeholder="email@example.com" 
            value={email}
            onChange={e => handle_form_input(e)}
          />
          <button 
            onClick={e => handle_form_submit(e)}>
            Get Started For Free
          </button>
        </form>
        
        { (valid === false) && <h6><i class="fas fa-times-circle"></i> invalid email!!!</h6>}
      </div>
    </div>
  );
}
 
export default AccessForm;