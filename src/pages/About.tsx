
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      title: "Distribution Network & Zone-wise Expansion",
      description: "Comprehensive coverage across multiple zones with strategic distribution partnerships"
    },
    {
      title: "Marketing Strategy & Manpower Solutions",
      description: "Integrated approach combining strategic marketing with optimal manpower deployment"
    },
    {
      title: "Channel-wise Strategy",
      description: "Specialized strategies for GT, MTF, E-Commerce, and Corporate channels"
    },
    {
      title: "NPD & Market Research",
      description: "New Product Development support backed by comprehensive market research capabilities"
    },
    {
      title: "ROI-oriented Execution",
      description: "Data-driven execution models focused on maximizing return on investment"
    }
  ];

  return (
  <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
  <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20 font-sans">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold font-poppins mb-6">About FAVA Group</h1>
            <p className="text-xl text-blue-100">
              Four decades of excellence in business solutions and strategic partnerships
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold font-poppins text-gray-800 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                FAVA Group is a growing enterprise with over four decades of experience in sectors like FMCG, Finance, Export, Warehousing, Distribution, Manpower, and Marketing. We have built our reputation on delivering comprehensive business solutions that drive growth and success.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our journey began with a simple vision: to nurture the seeds of business growth by providing integrated solutions that address every aspect of business development. Today, we stand as a trusted partner for startups and emerging brands seeking to establish themselves in competitive markets.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">40+</div>
                  <div className="text-gray-600">Years of Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-600">Successful Projects</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=600&h=500&fit=crop" 
                alt="Modern business building" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700">
                  "To develop Fava Glocal as a leading solution provider to the FMCG space."
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700">
                  "Lending a hand to start-ups and emerging brands by providing END-TO-END business solutions under one roof."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Value Proposition
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We deliver comprehensive business solutions through strategic partnerships and innovative approaches
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Sectors */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Business Sectors
            </h2>
            <p className="text-lg text-gray-600">
              Diverse expertise across multiple industry verticals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["FMCG", "Finance", "Export", "Warehousing", "Distribution", "Manpower"].map((sector) => (
              <div key={sector} className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-800">{sector}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
