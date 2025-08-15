
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const keyPartnerships = [
    {
      title: "Sea Buck Essence Cosmetics",
      category: "Beauty & Cosmetics",
      description: "Complete distribution channel setup and brand positioning strategy for premium cosmetics line",
      services: ["Distribution Setup", "Brand Positioning", "Market Penetration"],
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=200&fit=crop"
    },
    {
      title: "Mr. Munchido",
      category: "Food & Beverage",
      description: "End-to-end market penetration and retail channel development for snack food brand",
      services: ["Market Penetration", "Retail Channel Development", "Brand Building"],
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=400&h=200&fit=crop"
    },
    {
      title: "Bonn & Americana",
      category: "FMCG",
      description: "Strategic market entry and distribution network establishment",
      services: ["Market Entry", "Distribution Network", "Channel Management"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop"
    },
    {
      title: "Red Americasa Juice",
      category: "Beverages",
      description: "Complete beverage market penetration with focus on modern trade channels",
      services: ["Modern Trade Setup", "Market Penetration", "Brand Promotion"],
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=200&fit=crop"
    },
    {
      title: "HPCL Partnership",
      category: "Audit Systems",
      description: "Strategic audit system implementation and process optimization",
      services: ["System Implementation", "Process Optimization", "Compliance Management"],
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=200&fit=crop"
    }
  ];

  const businessModels = [
    {
      title: "Consignee Agent Model",
      description: "Acting as consignee agent for efficient inventory management and distribution"
    },
    {
      title: "C&F (Carrying & Forwarding) Agent",
      description: "Complete logistics and forwarding services for seamless supply chain management"
    },
    {
      title: "Mega/Super Stockists",
      description: "Large-scale stockist operations for bulk distribution and regional coverage"
    },
    {
      title: "Corporate Canteens",
      description: "Specialized B2B solutions for corporate food service and canteen management"
    },
    {
      title: "Direct Distribution",
      description: "Direct-to-retail distribution model for maximum market penetration"
    },
    {
      title: "E-commerce Fulfillment",
      description: "Complete e-commerce logistics and fulfillment solutions"
    }
  ];

  const infrastructureHighlights = [
    {
      location: "Mira Road Office",
      type: "Business Operations Center",
      description: "Strategic business operations and administrative headquarters"
    },
    {
      location: "Bhiwandi Warehouse",
      type: "Logistics Hub",
      description: "State-of-the-art warehousing facility with advanced logistics capabilities"
    }
  ];

  return (
  <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
  <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20 font-sans">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold font-poppins mb-6">Projects & Engagements</h1>
            <p className="text-xl text-blue-100">
              Successful partnerships and strategic implementations across diverse industries
            </p>
          </div>
        </div>
      </section>

      {/* Key Partnerships */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-poppins text-gray-800 mb-4">
              Our Key Partnerships
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Showcasing successful collaborations that have driven growth and market expansion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyPartnerships.map((project, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {project.description}
                  </CardDescription>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-800">Services Provided:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, serviceIndex) => (
                        <span 
                          key={serviceIndex}
                          className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Models */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Business Models
            </h2>
            <p className="text-lg text-gray-600">
              Flexible business models tailored to meet diverse client requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessModels.map((model, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600">{model.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {model.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Infrastructure & Reach
            </h2>
            <p className="text-lg text-gray-600">
              Strategic locations and state-of-the-art facilities for optimal service delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {infrastructureHighlights.map((facility, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">{facility.location}</CardTitle>
                  <CardDescription className="text-orange-600 font-medium">{facility.type}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-gray-600">
              Measurable results from our strategic partnerships and implementations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Brand Partnerships</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
              <div className="text-gray-600">Retail Outlets</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
