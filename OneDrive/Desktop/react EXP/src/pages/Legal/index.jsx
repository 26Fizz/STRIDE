// ─── LEGAL PAGES ──────────────────────────────────────────────────────────────

import React from 'react';
import { C, F } from '../../data';
import SectionLabel from '../../components/SectionLabel';

export function LegalPage({ title, sections }) {
  return (
    <section style={{ minHeight: "100svh", padding: "120px 20px 80px", background: C.ink }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <SectionLabel light>Legal</SectionLabel>
        <h1 style={{ fontFamily: F.display, fontSize: "clamp(32px,4vw,48px)", fontWeight: 600, letterSpacing: "-0.025em", color: C.mist, marginBottom: 48 }}>{title}</h1>
        {sections.map((s, i) => (
          <div key={i} style={{ marginBottom: 28, paddingBottom: 28, borderBottom: i < sections.length - 1 ? "1px solid rgba(242,239,232,0.07)" : "none" }}>
            <h2 style={{ fontFamily: F.display, fontSize: 20, fontWeight: 600, color: C.mist, marginBottom: 10 }}>{s.heading}</h2>
            <p style={{ fontFamily: F.body, fontSize: 14, color: "rgba(242,239,232,0.42)", lineHeight: 1.82, fontWeight: 300 }}>{s.body}</p>
          </div>
        ))}
        <div style={{ marginTop: 48, paddingTop: 24, borderTop: "1px solid rgba(242,239,232,0.07)" }}>
          <p style={{ fontFamily: F.mono, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(242,239,232,0.18)", lineHeight: 1.8 }}>
            Stride Ventures · UDYAM-KR-04-0146894 · Registered 03/05/2025<br />
            House No. 03, Arsheen, Bazar Galli Khasabag, Belagavi, Karnataka – 590003<br />
            Grievance Officer: Hafiz Patel · connect@strideindia.in · +91 94811 11786<br />
            Response within 48 hours · © 2025 Stride Ventures
          </p>
        </div>
      </div>
    </section>
  );
}

export const TERMS_S = [
  {
    heading: "Service description",
    body: "Stride Ventures (UDYAM-KR-04-0146894, MSME registered) is a weekly membership platform. Members pay ₹10/week as a membership fee for platform access and participation in monthly community deployments to verified social sector partners. This is not a charitable donation service and does not qualify for tax benefits under Section 80G of the Income Tax Act, 1961."
  },
  {
    heading: "Eligibility",
    body: "You must be 18 years or older to register as a member of Stride India. By joining, you confirm you meet this requirement and that the information provided during registration is accurate."
  },
  {
    heading: "Billing & Cancellation",
    body: "₹10 is processed automatically each week via our payment service partner. Cancel anytime from your dashboard — no fee, no questions asked. Cancellation takes effect from the following billing cycle. Previously processed membership fees are non-refundable except as specified in our Refund Policy."
  },
  {
    heading: "Nature of membership fee",
    body: "Weekly payments made to Stride Ventures are membership fees, not donations. Stride Ventures is a registered MSME under the Micro, Small and Medium Enterprises Development Act, 2006. Membership fees are not eligible for deduction under Section 80G or any other provision of the Income Tax Act, 1961."
  },
  {
    heading: "Intellectual property",
    body: "All content, branding, copy, and visual design on this platform belongs to Stride Ventures. Unauthorized reproduction is prohibited."
  },
  {
    heading: "Limitation of liability",
    body: "Stride Ventures is not liable for indirect, incidental, or consequential damages. Our total liability shall not exceed the amount paid by you in the preceding 30 days."
  },
  {
    heading: "Governing law",
    body: "These terms are governed by the laws of the Republic of India. Exclusive jurisdiction: courts in Belagavi, Karnataka."
  },
];

export const PRIVACY_S = [
  {
    heading: "Data collected",
    body: "We collect your name, phone number, email address, and payment status. We do not store card details or any payment credentials. Payment processing is handled exclusively by our PCI-DSS certified payment service partner."
  },
  {
    heading: "How it's used",
    body: "Your information is used to manage your membership, process weekly payments through our verified payment service partner, and send you WhatsApp updates about your membership activity."
  },
  {
    heading: "Security",
    body: "Payments are processed via a verified, PCI-DSS compliant payment service partner. We do not store payment credentials. Member data is encrypted at rest and in transit in accordance with industry standards."
  },
  {
    heading: "Your rights",
    body: "In accordance with the Digital Personal Data Protection Act, 2023, you have the right to access, correct, or request deletion of your personal data at any time. Contact connect@strideindia.in. We respond within 48 hours."
  },
  {
    heading: "Data retention",
    body: "Membership records are retained for 3 years for legal and compliance purposes. Data is anonymised within 30 days of account closure upon written request."
  },
  {
    heading: "Grievance redressal",
    body: "Grievance Officer: Hafiz Patel, Founder, Stride Ventures. Contact: connect@strideindia.in · +91 94811 11786. Address: Khasabag, Belagavi, Karnataka – 590003. We acknowledge within 48 hours and resolve within 15 working days."
  },
  {
    heading: "Governing law",
    body: "This policy is governed by the Information Technology Act 2000 and the Digital Personal Data Protection Act 2023. Jurisdiction: Belagavi, Karnataka."
  },
];

export const REFUND_S = [
  {
    heading: "General policy",
    body: "Membership fees of ₹10 per week are generally non-refundable once processed, as fees are allocated to the monthly deployment cycle immediately upon collection."
  },
  {
    heading: "Eligible refunds",
    body: "Duplicate charges resulting from a verified technical error, and unauthorised transactions confirmed as fraudulent by our payment service partner, qualify for a full refund. Contact connect@strideindia.in within 7 days of the charge with your registered phone number and transaction ID."
  },
  {
    heading: "Processing timeline",
    body: "Approved refunds are initiated within 48 hours and reflected in the original payment method within 5–7 business days."
  },
  {
    heading: "Cancellation",
    body: "You may cancel your membership at any time from your dashboard. No cancellation fee applies. Cancellation takes effect at the end of the current billing week. No pro-rata refund is issued for the remaining period."
  },
  {
    heading: "Governing law",
    body: "Refund disputes are governed by the Consumer Protection Act 2019. Jurisdiction: Belagavi, Karnataka. Grievance Officer: Hafiz Patel · connect@strideindia.in · +91 94811 11786."
  },
];