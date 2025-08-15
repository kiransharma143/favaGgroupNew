import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Team = () => {
  const teamMembers = [
    {
      name: "Mr. APS Ahluwalia",
      position: "Business Strategy, Operations & Training",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Mr. Santosh Rane",
      position: "Business Development Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const departments = [
    {
      title: "Business Strategy",
      description: "Strategic planning and business development initiatives",
      icon: "🎯"
    },
    {
      title: "Operations",
      description: "Day-to-day operational management and process optimization",
      icon: "⚙️"
    },
    {
      title: "Finance & Compliance",
      description: "Financial management and regulatory compliance",
      icon: "💼"
    },
    {
      title: "Human Resources",
      description: "Talent management and organizational development",
      icon: "👥"
    },
    {
      title: "Information Technology",
      description: "Digital transformation and technology solutions",
      icon: "💻"
    },
    {
      title: "Marketing & Sales",
      description: "Brand building and revenue generation strategies",
      icon: "📈"
    }
  ];

  return (
  <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
  <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20 font-sans">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold font-poppins mb-6">Meet Our Team</h1>
            <p className="text-xl text-blue-100">
              Experienced professionals driving innovation and excellence in business solutions
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-poppins text-gray-800 mb-4">
              Our Core Leadership
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Driving strategy, operations, and business growth with expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md flex flex-col items-center p-8"
              >
                <div className="w-32 h-32 mb-4 flex items-center justify-center rounded-full bg-white shadow">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-28 h-28 rounded-full object-cover border-4 border-white"
                  />
                </div>
                <div className="text-xl font-bold font-poppins text-gray-900 mb-2">{member.name}</div>
                <div className="text-gray-700 font-normal">{member.position}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-poppins text-gray-800 mb-4">
              Our Team Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide our team's approach to business excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardHeader>
                <div className="text-4xl mb-4">🤝</div>
                <CardTitle className="text-xl font-poppins">Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Working together as a unified team to achieve shared goals and deliver exceptional results
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <div className="text-4xl mb-4">💡</div>
                <CardTitle className="text-xl">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Continuously seeking new ways to improve processes and deliver cutting-edge solutions
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <div className="text-4xl mb-4">🎯</div>
                <CardTitle className="text-xl">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Maintaining the highest standards of quality and professionalism in everything we do
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Departments
            </h2>
            <p className="text-lg text-gray-600">
              Specialized teams working together to deliver comprehensive business solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-3xl mb-2">{dept.icon}</div>
                  <CardTitle className="text-lg">{dept.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {dept.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Join Our Growing Team
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're always looking for talented individuals who share our passion for excellence and innovation. 
              If you're ready to make a difference and grow your career with us, we'd love to hear from you.
            </p>
            <div className="space-y-4">
              <p className="text-gray-600">
                <strong>Current Opportunities:</strong> Business Development, Marketing, Operations, and IT roles
              </p>
              <p className="text-gray-600">
                Send your resume to: <a href="mailto:favaglocal@gmail.com" className="text-blue-600 hover:underline">favaglocal@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
