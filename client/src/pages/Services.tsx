import { Card, CardContent } from "@/components/ui/card";
import {
  Activity,
  Zap,
  AlertCircle,
  Move,
  Brain,
  Moon,
  Baby,
  Shield,
  HeartPulse,
  Stethoscope
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Move,
      title: "Sports Physiotherapy",
      intro: "Achieve peak performance with our tailored injury prevention and recovery programs.",
      final: "We provide the elite care you need to stay active and reach your fitness goals.",
    },
    {
      icon: Shield,
      title: "Geriatric Rehabilitation",
      intro: "Enhance your mobility and independence through our specialized osteoporosis and balance programs.",
      final: "We focus on proven techniques that ensure your safety and confidence in every step.",
    },
    {
      icon: Activity,
      title: "Pain Management",
      intro: "Find sustainable relief from chronic and acute pain through our personalized treatment strategies.",
      final: "We prioritize your comfort by restoring function and improving your daily quality of life.",
    },
    {
      icon: Baby,
      title: "Pediatric Physiotherapy",
      intro: "Supporting children with developmental milestones through compassionate and play-based therapeutic care.",
      final: "Our specialized approach helps every child thrive by reaching their full physical potential.",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-accent/30 to-background">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold font-serif" data-testid="text-services-title">
            Our Specialized Services
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Comprehensive health care tailored to your specific needs. Explore our specialized
            programs designed to assess, treat, and rehabilitate a wide range of conditions.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-service-${index}`}>
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <div className="space-y-4 flex-1">
                        <h3 className="text-xl md:text-2xl font-bold font-serif">{service.title}</h3>
                        <div className="space-y-2">
                          <p className="text-base text-muted-foreground leading-relaxed">
                            {service.intro}
                          </p>
                          <p className="text-base font-bold text-foreground leading-relaxed">
                            {service.final}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-primary/5 to-accent/20">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold font-serif">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Schedule a health care consultation to discuss your needs and explore the best
            treatment options for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/book-appointment" data-testid="link-services-book">
              <button className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover-elevate active-elevate-2 transition-all duration-300 shadow-md w-full sm:w-auto">
                Book Appointment
              </button>
            </a>
            <a href="/contact" data-testid="link-services-contact">
              <button className="px-8 py-3 border border-border bg-background font-semibold rounded-lg hover-elevate active-elevate-2 transition-all duration-300 w-full sm:w-auto">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
