import { MotionConfig } from "motion/react";
import { Link } from "react-router";
import { useEffect } from "react";
import { LegalDocument, LegalList, type LegalSection } from "../components/LegalDocument";
import { setPageMeta } from "../lib/meta";

const lastUpdated = "August 10, 2026";

const sections: LegalSection[] = [
  {
    id: "about-orbital",
    title: "1. About Orbital",
    shortTitle: "About Orbital",
    content: (
      <p>
        Orbital Aquatics provides software and related services designed for pool management companies, pool boards, staff, and related users. Features, availability, and functionality may evolve as the platform develops.
      </p>
    ),
  },
  {
    id: "eligibility-authorized-use",
    title: "2. Eligibility and Authorized Use",
    shortTitle: "Authorized Use",
    content: (
      <p>
        You may use the website and applicable services only for lawful purposes and in accordance with these Terms. If you access or use Orbital on behalf of an organization, you represent that you have authority to act for that organization and to bind it to applicable terms.
      </p>
    ),
  },
  {
    id: "accounts",
    title: "3. Accounts",
    shortTitle: "Accounts",
    content: (
      <p>
        If you create or receive access to an Orbital account, you are responsible for providing accurate account information, maintaining the confidentiality of credentials, and activity that occurs under your account. Please notify Orbital if you suspect unauthorized use of an account.
      </p>
    ),
  },
  {
    id: "customer-agreements",
    title: "4. Customer Agreements",
    shortTitle: "Customer Agreements",
    content: (
      <p>
        Organizations may enter into separate agreements with Integrated Training Services LLC covering subscriptions, pilots, implementation, fees, payment processing, service levels, support, data handling, or other terms. If a separate written agreement conflicts with these general Terms, the separate written agreement controls for the applicable customer or service.
      </p>
    ),
  },
  {
    id: "acceptable-use",
    title: "5. Acceptable Use",
    shortTitle: "Acceptable Use",
    content: (
      <>
        <p>You agree not to misuse the website or applicable services. Prohibited conduct includes:</p>
        <LegalList>
          <li>using the website or services unlawfully or to violate another person's rights;</li>
          <li>attempting unauthorized access to systems, accounts, or data;</li>
          <li>interfering with or burdening systems, networks, or service operation;</li>
          <li>transmitting malicious code or harmful content;</li>
          <li>harassing, abusing, or harming other users;</li>
          <li>scraping or automated access in ways that burden systems or violate these Terms;</li>
          <li>reverse engineering or attempting to extract source code except where allowed by law; and</li>
          <li>submitting false, misleading, or fraudulent information.</li>
        </LegalList>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "6. Intellectual Property",
    shortTitle: "Intellectual Property",
    content: (
      <p>
        The website, software, branding, logos, text, graphics, product interfaces, and other proprietary materials are owned by or licensed to Integrated Training Services LLC and are protected by applicable intellectual-property law. Subject to these Terms and any applicable customer agreement, you receive only the limited right needed to access and use the website or applicable services.
      </p>
    ),
  },
  {
    id: "customer-content-data",
    title: "7. Customer Content and Data",
    shortTitle: "Customer Data",
    content: (
      <p>
        Users and customers retain their rights in information they provide to Orbital. You grant Orbital the rights reasonably necessary to host, process, transmit, display, and otherwise use that information to provide, secure, support, and improve the applicable services. Orbital does not claim ownership of customer data.
      </p>
    ),
  },
  {
    id: "third-party-services",
    title: "8. Third-Party Services",
    shortTitle: "Third-Party Services",
    content: (
      <p>
        Orbital may integrate with or rely on third-party services. Third-party terms and privacy practices may separately apply. Orbital is not responsible for third-party services outside its reasonable control.
      </p>
    ),
  },
  {
    id: "fees-and-payment",
    title: "9. Fees and Payment",
    shortTitle: "Fees",
    content: (
      <p>
        Certain services may require fees as specified in an applicable order form, subscription, service agreement, pilot agreement, or other written arrangement. Payment terms in those agreements control. These Terms do not publish or establish Orbital pricing or refund policies.
      </p>
    ),
  },
  {
    id: "availability-and-changes",
    title: "10. Availability and Changes",
    shortTitle: "Availability",
    content: (
      <p>
        The website and services may evolve over time. Orbital may modify, update, improve, suspend, or discontinue portions of the website or services, subject to applicable customer agreements and law.
      </p>
    ),
  },
  {
    id: "disclaimers",
    title: "11. Disclaimers",
    shortTitle: "Disclaimers",
    content: (
      <p>
        The public website and general services are provided subject to applicable agreements and law. Orbital does not guarantee that the website or services will be uninterrupted, error-free, or available at all times. Nothing in these Terms limits specific warranties that Orbital may separately provide in a written customer agreement.
      </p>
    ),
  },
  {
    id: "limitation-of-liability",
    title: "12. Limitation of Liability",
    shortTitle: "Liability",
    content: (
      <p>
        To the fullest extent permitted by applicable law and subject to any separate written customer agreement, Integrated Training Services LLC will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages arising from use of the website or applicable services. Some jurisdictions do not allow certain limitations, so some limitations may not apply.
      </p>
    ),
  },
  {
    id: "indemnification",
    title: "13. Indemnification",
    shortTitle: "Indemnification",
    content: (
      <p>
        To the extent permitted by applicable law and subject to any separate written customer agreement, you agree to be responsible for claims, losses, liabilities, damages, costs, and expenses arising from your unlawful misuse of the website or services, your violation of these Terms, or your violation of another person's rights.
      </p>
    ),
  },
  {
    id: "termination",
    title: "14. Termination",
    shortTitle: "Termination",
    content: (
      <p>
        Orbital may restrict or terminate access to the website or applicable services for a material violation of these Terms, subject to applicable agreements and law. Where a separate customer agreement applies, termination rules in that agreement control for the applicable customer or service.
      </p>
    ),
  },
  {
    id: "changes-to-terms",
    title: "15. Changes to These Terms",
    shortTitle: "Changes",
    content: (
      <p>
        Orbital may update these Terms periodically. When we do, the "Last Updated" date above will reflect the latest version. Continued use of the website or applicable services after an update means the revised Terms apply, subject to applicable law and any separate written customer agreement.
      </p>
    ),
  },
  {
    id: "contact",
    title: "16. Contact",
    shortTitle: "Contact",
    content: (
      <p>
        To contact Orbital about these Terms, please use the website's <Link to="/contact" className="font-semibold text-cyan-100 underline-offset-4 hover:underline">Contact / Book a Demo</Link> page.
      </p>
    ),
  },
];

export function TermsPage() {
  useEffect(() => {
    setPageMeta(
      "Terms of Service | Orbital Aquatics",
      "Review the terms that govern access to the Orbital Aquatics website and applicable services.",
    );
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <LegalDocument
        title="Terms of Service"
        lastUpdated={lastUpdated}
        sections={sections}
        intro={
          <p>
            These Terms of Service ("Terms") govern access to and use of the Orbital Aquatics website and applicable services provided by Integrated Training Services LLC, doing business as Orbital Aquatics ("Orbital," "we," "us," or "our"). By accessing or using the website or applicable services, you agree to these Terms, subject to applicable law.
          </p>
        }
      />
    </MotionConfig>
  );
}
