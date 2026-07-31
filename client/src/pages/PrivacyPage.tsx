import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        title="Privacy Policy"
        subtitle="Last updated: July 2026"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Privacy Policy", href: "/privacy-policy" }]}
      />

      <section className="py-24 section-light">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100 shadow-sm space-y-8"
            >
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We collect information you provide directly to us, including name, email address, phone number, company name, and message content when you use our contact forms. We also collect technical information such as IP addresses, browser type, and usage data through standard web analytics.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use the information we collect to respond to your inquiries, provide our services, improve our website, send relevant communications, and comply with legal obligations. We do not sell or rent your personal information to third parties.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">3. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. All contact form data is stored securely in our encrypted database.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">4. Cookies & Tracking</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use essential cookies to ensure the website functions properly. We may use analytics cookies to understand how visitors interact with our site. You can control cookie preferences through your browser settings.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">5. Third-Party Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may contain links to third-party services. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You have the right to access, correct, or delete your personal information at any time. To exercise these rights, please contact us at office@enfycon.com.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at office@enfycon.com or call us at +1 201.201.7078.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
