
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="text-2xl font-bold">FAVA Group</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Nurturing the Seeds - A growing enterprise with over four decades of experience in FMCG, Finance, Export, Warehousing, Distribution, Manpower, and Marketing.
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
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/approach" className="text-gray-300 hover:text-white transition-colors">Our Approach</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">BDaaS</li>
              <li className="text-gray-300">Distribution Channel Setup</li>
              <li className="text-gray-300">Manpower Strategy</li>
              <li className="text-gray-300">Marketing Support</li>
              <li className="text-gray-300">Logistics & Warehousing</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 FAVA Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
