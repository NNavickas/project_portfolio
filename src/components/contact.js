import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      isSubmitted: false,
      isSending: false,
      error: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ isSending: true });
    // Send email or submit form data to a server using an AJAX request.
    // On success, set isSubmitted to true.
    // On failure, set error to an error message and isSending to false.
  }

  render() {
    return (
      <div className="contact">
        <h2>Contact Me</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={this.state.message} onChange={this.handleChange} required />

          <button type="submit" disabled={this.state.isSending}>Send</button>
        </form>

        {this.state.isSubmitted && (
          <p>Thank you for your message!</p>
        )}

        {this.state.error && (
          <p>An error occurred: {this.state.error}</p>
        )}

        <div className="contact-info">
          <h3>Get in touch</h3>
          <p>Email: <a href={`mailto:${this.props.email}`}>{this.props.email}</a></p>
          <p>GitHub: <a href={this.props.github}>{this.props.github}</a></p>
          <p>LinkedIn: <a href={this.props.linkedin}>{this.props.linkedin}</a></p>
          <p>CV: <a href={this.props.cv} download>Download my CV (PDF)</a></p>
        </div>
      </div>
    );
  }
}

export default Contact;
