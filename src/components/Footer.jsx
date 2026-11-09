
const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/" },
    { name: "LinkedIn", href: "https://linkedin.com/" },
    { name: "Instagram", href: "https://instagram.com/" },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#080e1b] text-gray-400">

      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

          {/* Logo & Description */}
          <div>
            <a href="#home" className="text-2xl font-bold text-white">
              <span className="text-blue-400">{"<"}</span>
              Ramchand
              <span className="text-blue-400">{"/>"}</span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7">
              I'm a passionate developer who loves building
              modern, responsive and user-friendly web applications.
              Let's create something amazing together!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h2>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm transition hover:text-blue-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="mb-5 text-lg font-semibold text-white">
              Follow Me
            </h2>

            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm transition hover:text-blue-400"
                  >
                    {link.name} ↗
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm">
              Email:
              <a
                href="mailto:ramchandmakwan@gmail.com"
                className="ml-2 text-blue-400 hover:underline"
              >
                ramchandmakwan@gmail.com
              </a>
            </p>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center text-sm md:flex-row">

          <p>
            © {new Date().getFullYear()} Ramchand. All rights reserved.
          </p>

          <p>
            Designed & Built with
            <span className="mx-1 text-red-500">♥</span>
            by Ramchand
          </p>

          <a
            href="#home"
            className="transition hover:text-blue-400"
          >
            Back to Top ↑
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
