
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    const mailtoLink = `mailto:ramchandmakwan@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;

    window.location.href = mailtoLink;

    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: "✉️",
      title: "Email Me",
      value: "ramchandmakwan@gmail.com",
      link: "mailto:ramchandmakwan@gmail.com",
    },
    {
      icon: "💻",
      title: "GitHub",
      value: "github.com/Ramchandmk",
      link: "https://github.com/Ramchandmk",
    },
    {
      icon: "🔗",
      title: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/ramchand-kolhi-7a3932372",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#080e1b] px-6 py-24"
    >
      {/* Background Glow */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="mb-4 inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
            Let's Connect
          </p>

          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Get In <span className="text-blue-400">Touch</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-400">
            Have a project in mind or want to collaborate?
            Feel free to contact me. I'm always open to
            discussing new opportunities and ideas.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left Side */}
          <div>
            <h3 className="mb-5 text-2xl font-bold text-white">
              Let's Work Together
            </h3>

            <p className="mb-10 max-w-lg leading-8 text-gray-400">
              I'm passionate about building modern web
              applications and creating amazing digital
              experiences. Let's turn your ideas into reality!
            </p>

            {/* Contact Information */}
            <div className="space-y-5">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 rounded-xl border border-white/10 bg-[#111c30]/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-[#14233b]"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-2xl transition group-hover:bg-blue-500/20">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="font-semibold text-white">
                      {item.title}
                    </h4>

                    <p className="mt-1 text-sm text-gray-400 transition group-hover:text-blue-400">
                      {item.value}
                    </p>
                  </div>

                  <span className="ml-auto text-xl text-gray-500 transition group-hover:translate-x-1 group-hover:text-blue-400">
                    ↗
                  </span>
                </a>
              ))}
            </div>

            {/* Availability */}
            <div className="mt-10 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
              </span>

              <p className="text-sm text-gray-400">
                Open to new opportunities and collaborations
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="rounded-2xl border border-white/10 bg-[#111c30]/80 p-6 shadow-2xl shadow-blue-500/5 sm:p-9">

            <h3 className="mb-2 text-2xl font-bold text-white">
              Send Me a Message
            </h3>

            <p className="mb-8 text-sm text-gray-400">
              Fill out the form below and let's start a conversation.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-lg border border-white/10 bg-[#080e1b] px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Your Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  required
                  className="w-full rounded-lg border border-white/10 bg-[#080e1b] px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  required
                  className="w-full rounded-lg border border-white/10 bg-[#080e1b] px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Your Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Write your message here..."
                  required
                  className="w-full resize-none rounded-lg border border-white/10 bg-[#080e1b] px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-lg bg-blue-500 px-6 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20"
              >
                Send Message
                <span>↗</span>
              </button>

              {submitted && (
                <p className="text-center text-sm text-green-400">
                  Your email app should open with your message.
                </p>
              )}

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
