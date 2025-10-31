import React from "react";
import PageWrapper from "../components/Layout/PageWrapper";

const TermsConditions = () => {
  return (
    <PageWrapper title="Terms & Conditions">
      <div className="bg-[#0c0c0c] border border-white/10 rounded-2xl p-6 md:p-8 text-gray-300 space-y-6 shadow-lg shadow-black/20">
        <p className="text-lg font-semibold text-white">
          ⚖️ 2️⃣ Terms & Conditions — STRIDE
        </p>

        <p className="text-sm italic text-gray-400">
          Last updated: October 2025
        </p>

        <p>
          Welcome to{" "}
          <span className="text-emerald-400 font-medium">STRIDE</span> — India’s
          first lifestyle philanthropy + learning platform. By accessing or
          using our website or services, you agree to the terms outlined below.
          Please read them carefully before using STRIDE.
        </p>

        <div className="space-y-5">
          <section>
            <h3 className="text-white font-semibold mb-2">
              1. Nature of Service
            </h3>
            <p>
              STRIDE enables users to make weekly micro-subscriptions of{" "}
              <span className="text-emerald-400 font-medium">₹10/week</span>{" "}
              that support verified youth-impact programs and unlock exclusive
              learning content. These contributions are impact-linked
              subscriptions provided by STRIDE Ventures, not direct charitable
              donations.
            </p>
          </section>

          <section>
            <h3 className="text-white font-semibold mb-2">
              2. User Responsibility
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>You must be at least 16 years old to use STRIDE.</li>
              <li>
                You agree to provide accurate details during registration and
                not misuse the platform.
              </li>
              <li>
                All payments must be made only through approved STRIDE links or
                payment partners.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-white font-semibold mb-2">
              3. Intellectual Property
            </h3>
            <p>
              All content available on STRIDE — including text, visuals,
              learning summaries, and design — is owned or licensed by{" "}
              <span className="text-emerald-400 font-medium">
                STRIDE Ventures
              </span>
              . Reproduction, redistribution, or reuse without written
              permission is strictly prohibited.
            </p>
          </section>

          <section>
            <h3 className="text-white font-semibold mb-2">
              4. Subscription & Renewal
            </h3>
            <p>
              Weekly plans can be renewed manually or through monthly
              collection. If you skip a week, your streak may reset — but you
              can resume anytime and continue your journey toward impact.
            </p>
          </section>

          <section>
            <h3 className="text-white font-semibold mb-2">5. Refunds</h3>
            <p>
              Payments made through STRIDE are non-refundable as funds are
              instantly allocated to verified impact programs and learning
              access. Refunds are handled only under the cases listed in our{" "}
              <span
                onClick={() => (window.location.href = "/RefundPolicy")}
                className="text-emerald-400 underline cursor-pointer hover:text-emerald-300"
              >
                Refund Policy
              </span>
              .
            </p>
          </section>

          <section>
            <h3 className="text-white font-semibold mb-2">
              6. Limitation of Liability
            </h3>
            <p>
              STRIDE shall not be liable for indirect or consequential losses
              resulting from third-party errors, delays, or unavoidable
              technical issues. Payments are securely handled by verified
              partners like Razorpay and Firebase-backed infrastructure.
            </p>
          </section>

          <section>
            <h3 className="text-white font-semibold mb-2">
              7. Updates to Terms
            </h3>
            <p>
              STRIDE may periodically update these Terms to reflect operational
              or legal changes. The latest version will always be available on
              this page, and continued use signifies acceptance of the updated
              terms.
            </p>
          </section>
        </div>

        <div className="pt-4 border-t border-white/10">
          <p className="text-gray-400">
            For any questions regarding these Terms, please contact us at{" "}
            <span className="text-emerald-400 font-semibold">
              connect@strideindia.in
            </span>
            .
          </p>
          <p className="text-sm italic text-gray-500 mt-2">
            By using STRIDE, you become part of a transparent, youth-driven
            impact network where every rupee creates change.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
};

export default TermsConditions;
