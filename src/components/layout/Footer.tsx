import { Link } from "react-router-dom";

const scrollToSection = (e, id) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="space-x-2 -mt-2">
              <img
                src="/images/logo_bg_removed.png"
                alt="FAVA Glocal"
                className="h-25 w-32 -mt-12"
              />
            </Link>
            <p className="text-gray-300 mb-4 max-w-md -mt-4">
              Nurturing the Seeds - A growing enterprise with over four decades
              of experience in FMCG, Finance, Export, Warehousing, Distribution,
              Manpower, and Marketing.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p>📧 favaglocal@gmail.com</p>
              <p>📧 lotus.marketing@rediffmail.com</p>
              <p>📞 +91 9223056246 / 9930801016</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={(e) => scrollToSection(e, "about")}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={(e) => scrollToSection(e, "services")}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#approach"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={(e) => scrollToSection(e, "approach")}
                >
                  Our Approach
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={(e) => scrollToSection(e, "team")}
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={(e) => scrollToSection(e, "contact")}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-md">
              <li className="text-gray-300">BDaaS</li>
              <li className="text-gray-300">Distribution Channel Setup</li>
              <li className="text-gray-300">Manpower Strategy</li>
              <li className="text-gray-300">Marketing Support</li>
              <li className="text-gray-300">Logistics & Warehousing</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Fava Glocal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
