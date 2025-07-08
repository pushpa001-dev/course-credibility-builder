
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Users, Clock, Award, TrendingUp } from "lucide-react";

const Index = () => {
  const modules = [
    {
      number: 1,
      title: "Digital Marketing Fundamentals",
      lessons: [
        "Understanding the digital landscape",
        "Setting up your marketing foundation",
        "Choosing the right channels for your business"
      ]
    },
    {
      number: 2,
      title: "SEO Mastery",
      lessons: [
        "Keyword research and strategy",
        "On-page optimization techniques",
        "Building high-quality backlinks"
      ]
    },
    {
      number: 3,
      title: "Social Media Marketing",
      lessons: [
        "Platform-specific strategies",
        "Content creation and scheduling",
        "Community building and engagement"
      ]
    },
    {
      number: 4,
      title: "Paid Advertising",
      lessons: [
        "Google Ads fundamentals",
        "Facebook and Instagram advertising",
        "Campaign optimization and scaling"
      ]
    },
    {
      number: 5,
      title: "Analytics & Optimization",
      lessons: [
        "Setting up tracking systems",
        "Interpreting data and metrics",
        "Continuous improvement strategies"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "E-commerce Entrepreneur",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      quote: "I doubled my income in 3 months using the strategies from this course! The step-by-step approach made everything so clear.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Marketing Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote: "Finally, a course that delivers real results. I got promoted within 6 months of completing the program.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Small Business Owner",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote: "The instructor's expertise is unmatched. My business revenue increased by 250% after implementing these techniques.",
      rating: 5
    }
  ];

  const certifications = [
    "Google Ads Certified",
    "Facebook Blueprint Certified",
    "HubSpot Content Marketing Certified",
    "Analytics Individual Qualification"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 lg:py-20">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            #1 Rated Digital Marketing Course
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Master Digital Marketing & Transform Your Career
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Learn the proven strategies that have helped over 5,000 students build successful marketing careers 
            and grow their businesses exponentially.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-10 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              <span>5,000+ Students Taught</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-600" />
              <span>12+ Hours of Content</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-600" />
              <span>Industry Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <span>Proven Results</span>
            </div>
          </div>

          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Enroll Now - $297
          </Button>
          
          <p className="text-sm text-gray-500 mt-4">
            30-day money-back guarantee • Lifetime access • Certificate of completion
          </p>
        </div>
      </section>

      {/* Instructor Bio */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Meet Your Instructor</h2>
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face"
                  alt="Instructor"
                  className="w-64 h-64 rounded-full object-cover shadow-xl"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">Alex Thompson</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  With over 10 years of experience in digital marketing, Alex has helped Fortune 500 companies 
                  and startups alike achieve remarkable growth. Having taught more than 5,000 students worldwide, 
                  Alex brings real-world expertise and a passion for making complex marketing concepts accessible to everyone.
                </p>
                <p className="text-gray-600 mb-6">
                  Alex's teaching philosophy focuses on practical, actionable strategies that deliver immediate results. 
                  Students don't just learn theory—they implement proven systems that transform their marketing efforts.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm text-gray-600">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Complete Curriculum</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              A comprehensive, step-by-step program designed to take you from beginner to expert in digital marketing.
            </p>
            
            <div className="grid gap-6">
              {modules.map((module, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {module.number}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3">Module {module.number}: {module.title}</h3>
                        <ul className="space-y-2">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <li key={lessonIndex} className="flex items-center gap-2 text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                              <span>{lesson}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Student Success Stories</h2>
            <p className="text-center text-gray-600 mb-12">
              Real results from real students who transformed their careers and businesses.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 mb-6 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <img 
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Marketing Skills?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of successful students who have already mastered digital marketing. 
              Your journey to marketing excellence starts today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Enroll Now - $297
              </Button>
              <div className="text-center">
                <div className="text-sm opacity-80">One-time payment</div>
                <div className="text-sm opacity-80">30-day money-back guarantee</div>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm opacity-80">
              <span>✓ Lifetime access</span>
              <span>✓ Mobile & desktop</span>
              <span>✓ Certificate of completion</span>
              <span>✓ 24/7 support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
