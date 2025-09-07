import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-24 pb-16">
        <div className="section-container">
          <div className="text-center mb-12">
            <h1 className="section-title mb-4">Get Started with INAW</h1>
            <p className="section-subtitle mx-auto">
              Ready to transform your displays into revenue streams? Contact us to learn more about our digital advertising marketplace.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-elegant">
              <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your displays or advertising needs..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit" className="w-full button-primary">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-elegant">
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-pulse-500" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:info@hept.de" className="text-gray-600 hover:text-pulse-500">
                        info@hept.de
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-pulse-500" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+49123456789" className="text-gray-600 hover:text-pulse-500">
                        +49 123 456 789
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-pulse-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">Why Choose INAW?</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-pulse-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Two-sided marketplace connecting display owners with advertisers</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-pulse-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Transparent LED film installations at subsidized costs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-pulse-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Programmatic, location-based advertising platform</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-pulse-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Revenue sharing for display and shop owners</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;