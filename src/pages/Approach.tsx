
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Approach = () => {
  const executionModel = [
    { title: "Product", description: "Comprehensive product development and positioning strategy" },
    { title: "Price", description: "Competitive pricing strategies based on market analysis" },
    { title: "Place", description: "Strategic placement and distribution channel optimization" },
    { title: "Promotion", description: "Integrated marketing and promotional campaigns" },
    { title: "People", description: "Skilled manpower deployment and team development" },
    { title: "Process", description: "Streamlined processes for operational excellence" }
  ];

  const marketingMethods = [
    {
      title: "Digital Marketing",
      description: "Comprehensive digital presence through social media, SEO, and online advertising",
      icon: "💻"
    },
    {
      title: "Influencer Marketing",
      description: "Strategic partnerships with key influencers for brand amplification",
      icon: "🎯"
    },
    {
      title: "Public Relations",
      description: "Brand building through strategic PR campaigns and media relations",
      icon: "📰"
    },
    {
      title: "Regional Promotions",
      description: "Localized promotional activities tailored to regional preferences",
      icon: "🌍"
    }
  ];

  const segmentationTechniques = [
    {
      title: "Outlet Profiling",
      description: "Comprehensive analysis and categorization of retail outlets for targeted approach"
    },
    {
      title: "Route Planning",
      description: "Optimized route planning for efficient field force deployment and coverage"
    },
    {
      title: "MIS Dashboards",
      description: "Real-time management information systems for data-driven decision making"
    },
    {
      title: "Performance Analytics",
      description: "Advanced analytics for measuring and optimizing campaign performance"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Approach</h1>
            <p className="text-xl text-blue-100">
              Strategic methodologies and proven frameworks for sustainable business growth
            </p>
          </div>
        </div>
      </section>

      {/* 6P Execution Model */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our 6P Execution Model
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A comprehensive framework that addresses every critical aspect of business development and market penetration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {executionModel.map((item, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Methods */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Marketing Methods & Strategies
            </h2>
            <p className="text-lg text-gray-600">
              Multi-channel marketing approach for maximum brand visibility and engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketingMethods.map((method, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {method.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Segmentation Techniques */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Advanced Segmentation Techniques
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Data-driven segmentation and analytical tools for precise market targeting and operational efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {segmentationTechniques.map((technique, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">{technique.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    {technique.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Strategic Process
            </h2>
            <p className="text-lg text-gray-600">
              Step-by-step approach to ensure successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Analysis", desc: "Market research and business analysis" },
              { step: "02", title: "Strategy", desc: "Development of customized strategies" },
              { step: "03", title: "Implementation", desc: "Execution with dedicated teams" },
              { step: "04", title: "Optimization", desc: "Continuous monitoring and improvement" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Why Our Approach Works
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Data-Driven Decisions</h4>
                    <p className="text-gray-600">Every strategy is backed by comprehensive market research and analytical insights.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Holistic Framework</h4>
                    <p className="text-gray-600">Our 6P model ensures no critical business aspect is overlooked.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Measurable Results</h4>
                    <p className="text-gray-600">Real-time tracking and analytics provide measurable outcomes and ROI.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Adaptive Methodology</h4>
                    <p className="text-gray-600">Flexible approach that adapts to changing market conditions and business needs.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=500&fit=crop" 
                alt="Strategic planning" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Approach;
