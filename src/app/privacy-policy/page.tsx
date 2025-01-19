import { Navbar } from "@/components/nav/Navbar";
import Footer from "@/components/sections/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="relative bg-black pt-28">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        <p className="text-white/70 mb-8">Effective Date: February 19, 2025</p>

        <div className="prose prose-invert max-w-none">
          <p className="text-white/70">
            Welcome to Cromo Studios (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
            &ldquo;us&rdquo;). This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit our website
            or use our services.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-12 mb-6">
            1. Information We Collect
          </h2>
          <p className="text-white/70 mb-6">
            We may collect the following types of information:
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-4">
            1.1. Personal Information
          </h3>
          <ul className="list-disc pl-6 text-white/70 space-y-2 mb-6">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Company name</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-8 mb-4">
            1.2. Non-Personal Information
          </h3>
          <ul className="list-disc pl-6 text-white/70 space-y-2 mb-6">
            <li>Browser type and version</li>
            <li>IP address</li>
            <li>Device information</li>
            <li>
              Website usage data (e.g., pages visited, time spent on the site)
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-12 mb-6">
            2. How We Use Your Information
          </h2>
          <p className="text-white/70 mb-4">
            We may use your information for the following purposes:
          </p>
          <ul className="list-disc pl-6 text-white/70 space-y-2 mb-6">
            <li>To provide and improve our services.</li>
            <li>
              To communicate with you, including responding to inquiries or
              sending updates about our services.
            </li>
            <li>To analyse website usage and optimise user experience.</li>
            <li>To comply with legal obligations or resolve disputes.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-12 mb-6">
            3. How We Share Your Information
          </h2>
          <p className="text-white/70 mb-4">
            We do not sell or rent your personal information to third parties.
            However, we may share your information with:
          </p>
          <ul className="list-disc pl-6 text-white/70 space-y-2 mb-6">
            <li>
              <strong className="text-white">Service Providers:</strong> Trusted
              third parties who assist us in operating our business (e.g.,
              hosting providers).
            </li>
            <li>
              <strong className="text-white">Legal Authorities:</strong> When
              required to comply with legal obligations, court orders, or to
              protect our rights.
            </li>
            <li>
              <strong className="text-white">Business Transfers:</strong> In
              connection with a merger, sale, or acquisition involving our
              company.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-12 mb-6">
            4. Data Security
          </h2>
          <p className="text-white/70 mb-6">
            We implement reasonable technical and organisational measures to
            protect your information from unauthorised access, disclosure,
            alteration, or destruction. However, no method of transmission over
            the Internet is 100% secure, and we cannot guarantee absolute
            security.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-12 mb-6">
            5. Your Rights
          </h2>
          <p className="text-white/70 mb-4">
            Depending on your location, you may have the following rights:
          </p>
          <ul className="list-disc pl-6 text-white/70 space-y-2 mb-6">
            <li>
              <strong className="text-white">Access:</strong> Request access to
              the personal information we hold about you.
            </li>
            <li>
              <strong className="text-white">Correction:</strong> Request
              corrections to inaccurate or incomplete data.
            </li>
            <li>
              <strong className="text-white">Deletion:</strong> Request the
              deletion of your personal information, subject to legal or
              contractual obligations.
            </li>
            <li>
              <strong className="text-white">Data Portability:</strong> Request
              a copy of your information in a machine-readable format.
            </li>
            <li>
              <strong className="text-white">Opt-Out:</strong> Withdraw consent
              or opt out of certain data processing activities, such as
              marketing communications.
            </li>
          </ul>
          <p className="text-white/70 mb-6">
            To exercise your rights, contact us at&nbsp;
            <a
              href="mailto:info@cromostudios.com"
              className="text-white hover:text-white/80 underline"
            >
              info@cromostudios.com
            </a>
            .
          </p>

          <h2 className="text-2xl font-semibold text-white mt-12 mb-6">
            6. Third-Party Links
          </h2>
          <p className="text-white/70 mb-6">
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices of these sites and encourage
            you to review their privacy policies.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-12 mb-6">
            7. Children&apos;s Privacy
          </h2>
          <p className="text-white/70 mb-6">
            Our services are not directed to individuals under the age of 18. We
            don&apos;t knowingly collect personal information from children.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-12 mb-6">
            8. Changes to This Privacy Policy
          </h2>
          <p className="text-white/70 mb-6">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated effective date. We
            encourage you to review this Privacy Policy periodically.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-12 mb-6">
            9. Contact Us
          </h2>
          <p className="text-white/70 mb-2">
            If you have any questions or concerns about this Privacy Policy or
            how we handle your data, please contact us at:
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
