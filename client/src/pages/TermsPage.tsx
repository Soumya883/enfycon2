import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        title="Terms & Conditions"
        subtitle="Last updated: July 2026"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Terms & Conditions", href: "/terms-and-conditions" }]}
      />

      <section className="py-24 section-light">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100 shadow-sm space-y-8"
          >
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using the enfycon website and services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">2. Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                enfycon provides AI solutions, IT staffing, data analytics, cybersecurity, and digital marketing services. Specific service terms are outlined in individual engagement agreements.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">3. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on this website, including text, graphics, logos, and software, is the property of enfycon Inc. or its content suppliers and is protected by intellectual property laws.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">4. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall enfycon be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services or website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">5. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of the State of Texas, United States, without regard to its conflict of law provisions.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">6. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to this page. Your continued use of the services constitutes acceptance of the modified terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">7. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions regarding these Terms and Conditions, please contact us at office@enfycon.com or call +1 201.201.7078.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
