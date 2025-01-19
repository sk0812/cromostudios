import { Navbar } from "@/components/nav/Navbar";
import Footer from "@/components/sections/Footer";

export default function TermsOfService() {
  return (
    <main className="relative bg-black pt-28">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        <p className="text-white/70 mb-8">Effective Date: March 12, 2024</p>

        <div className="prose prose-invert max-w-none">
          <p className="text-white/70">
            Welcome to Cromo Studios (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
            &ldquo;us&rdquo;). These Terms of Service (&ldquo;Terms&rdquo;)
            govern your use of our website and services. By accessing or using
            our services, you agree to comply with these Terms. If you do not
            agree, please do not use our services.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-12 mb-6">
            1. Use of Our Services
          </h2>

          <h3 className="text-xl font-semibold text-white mt-8 mb-4">
            1.1. Eligibility
          </h3>
          <p className="text-white/70 mb-6">
            You must be at least 18 years old to use our services. By using our
            services, you confirm that you meet this requirement.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-4">
            1.2. Permitted Use
          </h3>
          <p className="text-white/70 mb-4">
            You agree to use our services only for lawful purposes and in
            compliance with these Terms. You may not:
          </p>
          <ul className="list-disc pl-6 text-white/70 space-y-2 mb-6">
            <li>
              Use the services in any way that violates applicable laws or
              regulations.
            </li>
            <li>
              Interfere with or disrupt the integrity or performance of our
              services.
            </li>
            <li>Attempt to gain unauthorised access to our systems or data.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-12 mb-6">
            2. Intellectual Property
          </h2>
          <p className="text-white/70 mb-6">
            All content on our website, including text, graphics, logos, and
            software, is the property of Cromo Studios or its licensors and is
            protected by copyright, trademark, and other intellectual property
            laws. You may not use, reproduce, or distribute any content without
            our prior written permission.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-12 mb-6">
            3. Limitation of Liability
          </h2>
          <p className="text-white/70 mb-6">
            To the fullest extent permitted by law, Cromo Studios shall not be
            liable for any indirect, incidental, special, or consequential
            damages arising out of or in connection with your use of our
            services. Our total liability to you for any claims arising under
            these Terms shall not exceed the amount you paid (if any) for using
            our services.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-12 mb-6">
            4. Third-Party Links
          </h2>
          <p className="text-white/70 mb-6">
            Our website may contain links to third-party websites or services.
            We are not responsible for the content, policies, or practices of
            these third-party sites. Access them at your own risk.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-12 mb-6">
            5. Termination
          </h2>
          <p className="text-white/70 mb-6">
            We reserve the right to suspend or terminate your access to our
            services at any time, without notice, if you violate these Terms or
            engage in activities that harm our business or users.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-12 mb-6">
            6. Changes to These Terms
          </h2>
          <p className="text-white/70 mb-6">
            We may update these Terms from time to time. Any changes will be
            posted on this page with an updated effective date. Your continued
            use of our services constitutes acceptance of the updated Terms.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-12 mb-6">
            7. Governing Law
          </h2>
          <p className="text-white/70 mb-6">
            These Terms shall be governed by and construed in accordance with
            the laws of the United Kingdom, without regard to its conflict of
            law principles.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-12 mb-6">
            8. Contact Us
          </h2>
          <p className="text-white/70 mb-2">
            If you have any questions about these Terms or our services, please
            contact us at:
          </p>
          <div className="text-white/70 mt-4">
            <p className="font-semibold text-white">Cromo Studios</p>
            <p>
              Email:{" "}
              <a
                href="mailto:info@cromostudios.com"
                className="text-white hover:text-white/80 underline"
              >
                info@cromostudios.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:+447724280130"
                className="text-white hover:text-white/80 underline"
              >
                +44 7724 280 130
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
