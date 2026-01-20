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
      icon: Activity,
      title: "Orthopedic Physiotherapy",
      description: "Assessment and rehabilitation for musculoskeletal conditions and injuries.",
      details: [
        "Low Back Pain",
        "Neck Pain",
        "Shoulder Pain",
        "Knee Pain",
        "Ankle Pain",
        "Post-Traumatic Rehabilitation",
        "Post-Surgical Rehabilitation",
        "Osteoarthritis",
        "Ergonomic advice",
        "ACL and Other Knee Ligament Injuries"
      ]
    },
    {
      icon: Brain,
      title: "Neurological Physiotherapy",
      description: "Specialized therapy for disorders affecting the brain, spinal cord, and nerves.",
      details: [
        "Stroke Management",
        "Head & Spinal Cord Injury",
        "Spinal disc Diseases",
        "Vertigo Management",
        "Peripheral Nerve Injuries",
        "Parkinsonism and Other Movement Disorders",
        "Facial Palsy"
      ]
    },
    {
      icon: HeartPulse,
      title: "Cardiac Rehabilitation",
      description: "Structured programs to improve cardiovascular health and recovery.",
      details: [
        "Post CABG",
        "Post Valve Replacement",
        "Post Heart Attack"
      ]
    },
    {
      icon: Move,
      title: "Sports Injury Rehabilitation",
      description: "Return to sport safely with targeted rehab for acute and chronic injuries.",
      details: [
        "Throwing Injuries (Shoulder & Elbow)",
        "Ankle Injuries",
        "Acute Muscle Strains",
        "Ligament Sprains",
        "Chronic Overuse Tendon Injuries",
        "Joint Instability"
      ]
    },
    {
      icon: Shield,
      title: "Geriatric Physiotherapy",
      description: "Holistic care to improve function and quality of life in older adults.",
      details: [
        "Physiotherapy for Geriatric population to improve quality of life",
        "Exercises, manual therapy, and therapeutic techniques",
        "Individualized plans to regain and maintain physical abilities"
      ]
    },
    {
      icon: Baby,
      title: "Women's Health",
      description: "Physiotherapy care tailored for women's specific health needs.",
      details: [
        "Pelvic Floor Rehabilitation",
        "Antenatal and postnatal exercise program"
      ]
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
                      <div className="space-y-2 flex-1">
                        <h3 className="text-xl md:text-2xl font-semibold">{service.title}</h3>
                        <p className="text-base text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 pl-0 md:pl-18">
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                        What We Offer:
                      </h4>
                      <ul className="space-y-2">
                        {service.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
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
