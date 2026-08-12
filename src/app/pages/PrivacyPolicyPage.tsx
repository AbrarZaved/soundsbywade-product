import { MotionConfig } from "motion/react";
import { Link } from "react-router";
import { useEffect } from "react";
import { LegalDocument, LegalList, type LegalSection } from "../components/LegalDocument";
import { setPageMeta } from "../lib/meta";

const lastUpdated = "August 10, 2026";

const sections: LegalSection[] = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    shortTitle: "Information We Collect",
    content: (
      <>
        <div>
          <h3 className="text-lg font-semibold text-white">Information you provide</h3>
          <p className="mt-3">
            You may voluntarily provide information when you request a demo, contact Orbital, create an account, or otherwise interact with our website or applicable services. This may include your name, email address, organization or company name, role, number of pools, and information you include in free-text messages or demo requests.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Information collected automatically</h3>
          <p className="mt-3">
            When you visit the website, hosting and infrastructure systems may process technical information needed to deliver, secure, and troubleshoot the site. This may include IP address, browser or device information, operating system, pages requested, timestamps, referring page, and similar technical log information. The reviewed public marketing website code does not include analytics pixels, behavioral advertising trackers, or similar advertising technologies.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Customer and platform information</h3>
          <p className="mt-3">
            Orbital's software may process information on behalf of pool management companies, pool boards, or other organizational customers. When Orbital processes personal information for an organizational customer, that customer's agreements, instructions, and applicable policies may also govern the information. The public marketing website is separate from customer-managed platform workflows.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "how-we-use-information",
    title: "2. How We Use Information",
    shortTitle: "How We Use Information",
    content: (
      <>
        <p>We use information for reasonable business and service purposes, which may include:</p>
        <LegalList>
          <li>providing, operating, and improving the website and applicable services;</li>
          <li>responding to questions, messages, and demo requests;</li>
          <li>communicating about Orbital and our services;</li>
          <li>providing customer support and troubleshooting technical issues;</li>
          <li>maintaining security and preventing misuse or fraud;</li>
          <li>enforcing agreements and protecting rights, users, and services; and</li>
          <li>complying with legal obligations.</li>
        </LegalList>
      </>
    ),
  },
  {
    id: "how-we-share-information",
    title: "3. How We Share Information",
    shortTitle: "How We Share Information",
    content: (
      <>
        <p>We do not use the public marketing website to sell personal information. We may share information in limited circumstances, including:</p>
        <LegalList>
          <li><strong className="font-semibold text-white">Service providers.</strong> Vendors that help with hosting, infrastructure, communications, support, payments, authentication, or similar services.</li>
          <li><strong className="font-semibold text-white">Customers and organizations.</strong> Where information is processed as part of services provided to an organization.</li>
          <li><strong className="font-semibold text-white">Legal and safety reasons.</strong> Where disclosure is required by law or reasonably necessary to protect rights, users, security, or the service.</li>
          <li><strong className="font-semibold text-white">Business transactions.</strong> In connection with a merger, acquisition, financing, reorganization, or sale of assets.</li>
          <li><strong className="font-semibold text-white">With direction or consent.</strong> Where you or an authorized organization direct or authorize disclosure.</li>
        </LegalList>
      </>
    ),
  },
  {
    id: "payment-information",
    title: "4. Payment Information",
    shortTitle: "Payment Information",
    content: (
      <p>
        The reviewed public marketing website code does not process payments or collect payment-card details. If Orbital offers paid services, payment terms and payment processing may be handled under a separate order form, subscription, pilot, service agreement, or other written arrangement. Payment providers may process payment information under their own terms and privacy practices.
      </p>
    ),
  },
  {
    id: "cookies-and-similar-technologies",
    title: "5. Cookies and Similar Technologies",
    shortTitle: "Cookies",
    content: (
      <p>
        The reviewed public marketing website code does not include analytics cookies, advertising cookies, or tracking pixels. Orbital may use cookies or similar technologies that are necessary to operate the website or applicable services, and this policy may be updated if analytics or other technologies are introduced.
      </p>
    ),
  },
  {
    id: "data-retention",
    title: "6. Data Retention",
    shortTitle: "Data Retention",
    content: (
      <p>
        We retain personal information only for as long as reasonably necessary for the purposes described in this policy, including providing services, maintaining appropriate business records, resolving disputes, enforcing agreements, and complying with legal obligations.
      </p>
    ),
  },
  {
    id: "data-security",
    title: "7. Data Security",
    shortTitle: "Security",
    content: (
      <p>
        Orbital uses reasonable administrative, technical, and organizational measures designed to protect personal information. No method of transmission or storage can be guaranteed to be completely secure.
      </p>
    ),
  },
  {
    id: "privacy-rights",
    title: "8. Privacy Rights",
    shortTitle: "Privacy Rights",
    content: (
      <p>
        Depending on where you live and subject to applicable law, you may have rights concerning your personal information. These may include requesting access, correction, deletion, or a copy of certain information, and in some circumstances objecting to or limiting certain processing. To submit a request, please contact Orbital through the website's <Link to="/contact" className="font-semibold text-cyan-100 underline-offset-4 hover:underline">Contact / Book a Demo</Link> page. We may need to verify your request before responding.
      </p>
    ),
  },
  {
    id: "childrens-privacy",
    title: "9. Children's Privacy",
    shortTitle: "Children",
    content: (
      <p>
        The public Orbital website is intended for business users and adults involved with pool management, pool boards, and related organizations. It is not directed to children under 13. If an organizational customer uses Orbital services in a way that involves information about minors, that customer may have responsibilities concerning permissions, consent, and use of the service, and separate customer agreements may apply.
      </p>
    ),
  },
  {
    id: "third-party-links-and-services",
    title: "10. Third-Party Links and Services",
    shortTitle: "Third-Party Links",
    content: (
      <p>
        The website or applicable services may link to third-party websites or services. Those third parties have independent privacy practices, and Orbital is not responsible for their content, security, or privacy practices.
      </p>
    ),
  },
  {
    id: "changes-to-this-policy",
    title: "11. Changes to This Privacy Policy",
    shortTitle: "Changes",
    content: (
      <p>
        We may update this Privacy Policy periodically. When we do, the "Last Updated" date above will reflect the latest version. Continued use of the website or applicable services after an update means the revised policy applies, subject to applicable law.
      </p>
    ),
  },
  {
    id: "contact-us",
    title: "12. Contact Us",
    shortTitle: "Contact",
    content: (
      <p>
        To contact Orbital about this Privacy Policy or privacy-related requests, please use the website's <Link to="/contact" className="font-semibold text-cyan-100 underline-offset-4 hover:underline">Contact / Book a Demo</Link> page.
      </p>
    ),
  },
];

export function PrivacyPolicyPage() {
  useEffect(() => {
    setPageMeta(
      "Privacy Policy | Orbital Aquatics",
      "Learn how Orbital Aquatics handles information when you use our website and services.",
    );
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <LegalDocument
        title="Privacy Policy"
        lastUpdated={lastUpdated}
        sections={sections}
        intro={
          <p>
            Integrated Training Services LLC, doing business as Orbital Aquatics ("Orbital," "we," "us," or "our"), respects user privacy. This Privacy Policy describes how information is collected, used, disclosed, and protected when someone interacts with Orbital's website and applicable services.
          </p>
        }
      />
    </MotionConfig>
  );
}
