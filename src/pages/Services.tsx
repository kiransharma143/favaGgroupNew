
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ServiceCard from "@/components/ui/ServiceCard";

const Services = () => {
  const mainServices = [
    {
      title: "BDaaS (Business Development as a Service)",
      description: "Complete end-to-end business development solutions tailored for startups and emerging brands. Our comprehensive approach covers every aspect of business growth.",
      icon: <span className="text-white text-xl">🚀</span>
    },
    {
      title: "New Product Development (NPD) & Market Research",
      description: "From concept to market launch, we provide comprehensive NPD support backed by thorough market research and consumer insights.",
      icon: <span className="text-white text-xl">🔍</span>
    },
    {
      title: "Distribution Channel Setup",
      description: "Strategic setup and management of distribution channels across GT, Modern Trade, and E-commerce platforms for maximum market penetration.",
      icon: <span className="text-white text-xl">🌐</span>
    },
    {
      title: "Manpower Strategy & Field Force Deployment",
      description: "Strategic manpower planning and field force deployment to ensure optimal coverage and performance across all market segments.",
      icon: <span className="text-white text-xl">👥</span>
    },
    {
      title: "Marketing Support & Brand Building",
      description: "Comprehensive marketing solutions including digital marketing, brand positioning, and integrated marketing communications.",
      icon: <span className="text-white text-xl">📈</span>
    },
    {
      title: "Logistic & Warehousing Support",
      description: "Complete logistics solutions with state-of-the-art warehousing facilities in strategic locations for efficient supply chain management.",
      icon: <span className="text-white text-xl">📦</span>
    },
    {
      title: "End-to-End Export Management",
      description: "Comprehensive export services including documentation, logistics, and international market entry strategies.",
      icon: <span className="text-white text-xl">🌍</span>
    }
  ];

  const channelStrategies = [
    {
      title: "General Trade (GT)",
      description: "Traditional retail channel management with focus on local markets and regional distribution networks."
    },
    {
      title: "Modern Trade Format (MTF)",
      description: "Strategic partnerships with modern retail chains and supermarket networks for premium positioning."
    },
    {
      title: "E-Commerce",
      description: "Digital marketplace management and online retail strategy for maximum digital presence."
    },
    {
      title: "Corporate Sales",
      description: "B2B sales strategies and corporate partnership development for institutional clients."
    }
  ];

  return (
  <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
  <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20 font-sans">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold font-poppins mb-6">Our Services</h1>
            <p className="text-xl text-blue-100">
              Comprehensive Digital Solutions Tailored For Your Success
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-poppins text-gray-800 mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end business solutions designed to accelerate growth and maximize market potential
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Channel Strategies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Channel-wise Strategy
            </h2>
            <p className="text-lg text-gray-600">
              Specialized approaches for different market channels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {channelStrategies.map((strategy, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600">{strategy.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {strategy.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Why Choose Our Services?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">End-to-End Solutions</h4>
                    <p className="text-gray-600">Complete business solutions under one roof, eliminating the need for multiple vendors.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">40+ Years of Experience</h4>
                    <p className="text-gray-600">Proven track record with decades of industry expertise across multiple sectors.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">ROI-Focused Approach</h4>
                    <p className="text-gray-600">Data-driven strategies designed to maximize return on investment and business growth.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Strategic Infrastructure</h4>
                    <p className="text-gray-600">Well-established logistics and warehousing infrastructure for seamless operations.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&h=500&fit=crop" 
                alt="Business innovation" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
