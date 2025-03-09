import Button from "./Button";
import React from "react";

const First = () => {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center py-20 p-4 max-w-[900px] w-full mx-auto">
      <div className="flex flex-col gap-4">
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Welcome to <span className="text-blue-500 font-medium">Hera</span>
          <span className="text-orange-700 font-medium">cross</span>!
        </h1>
      </div>
      <div className="terms bg-slate-700">
        <h4 className="font-medium text-lg sm:text-lg md:text-xl lg:text-2xl font-light">
          Terms and Conditions
        </h4>
        <div className=" text-sm md:text-base font-light text-justify py-10">
          <p>
            <b>1. Introduction: </b>
            <br />
            These Terms and Conditions ("Terms") govern your use of our mobile
            application ("App"), services, and any related websites, content, or
            features. By accessing or using the App, you agree to comply with
            these Terms. If you do not agree with these Terms, please do not use
            the App.
          </p>
          <br />
          <p>
            <b>2. Account Creation: </b>
            <br />
            To use certain features of the App, you may be required to create an
            account. You agree to provide accurate, current, and complete
            information during the registration process and update your account
            information to keep it accurate. You are responsible for maintaining
            the confidentiality of your account information, including your
            username and password. You agree to notify us immediately if you
            suspect any unauthorized use of your account.
          </p>
          <br />
          <p>
            <b>3. Use of the App: </b>
            <br />
            <i>Eligibility</i>: You must be at least 18 years old or have the
            consent of a parent or guardian to use this App. <br />
            <i>License</i>: We grant you a non-transferable, non-exclusive,
            limited license to access and use the App for personal,
            non-commercial purposes. <br />
            <i>Restrictions</i>: You agree not to: Use the App for any unlawful
            purposes. Interfere with or disrupt the operation of the App. Share
            your account credentials with others or allow unauthorized access.
          </p>
          <br />
          <p>
            <b>4. Payment and Subscription: </b>
            <br />
            Some features of the App may require a paid subscription. If you
            choose to subscribe, you agree to pay the applicable fees and
            charges. Subscription payments will be billed according to the plan
            you selected. Payments are non-refundable unless otherwise stated.
          </p>
          <br />
          <p>
            <b>5. Health Disclaimer: </b>
            <br />
            The content provided by the App is for informational purposes only
            and should not be considered medical advice. Always consult with a
            healthcare provider before beginning any fitness program. By using
            the App, you acknowledge that you do so at your own risk.
          </p>
          <br />
          <p>
            <b>6. User-Generated Content: </b>
            <br />
            You may be able to post, upload, or share content (such as photos,
            reviews, or workout plans) on the App. By doing so, you grant us a
            worldwide, royalty-free, and non-exclusive license to use, modify,
            and display your content within the App. You agree not to post any
            content that is unlawful, offensive, or violates the rights of
            others.
          </p>
          <br />
          <p>
            <b>7. Privacy Policy: </b>
            <br />
            Your privacy is important to us. Please review our Privacy Policy,
            which outlines how we collect, use, and protect your personal
            information. By using the App, you consent to the practices
            described in the Privacy Policy.
          </p>
          <br />
          <p>
            <b>8. Termination: </b>
            <br />
            We reserve the right to suspend or terminate your access to the App
            at our discretion, without notice, for any reason, including
            violation of these Terms.
          </p>
          <br />
          <p>
            <b>9. Limitation of Liability: </b>
            <br />
            To the fullest extent permitted by law, we are not responsible for
            any damages or losses arising from your use of the App, including
            but not limited to, direct, indirect, incidental, punitive, or
            consequential damages.
          </p>
          <br />
          <p>
            <b>10. Modifications: </b>
            <br />
            We reserve the right to modify or update these Terms at any time.
            Any changes will be posted on this page, and the revised Terms will
            take effect immediately upon posting. It is your responsibility to
            review the Terms periodically.
          </p>
          <br />
          <p>
            <b>11. Governing Law: </b>
            <br />
            These Terms are governed by and construed in accordance with the
            laws of United Kingdom. Any disputes arising from these Terms will
            be resolved in the courts of your Jurisdiction.
          </p>
          <br />
          <p>
            <b>12. Contact Us: </b>
            <br />
            If you have any questions or concerns about these Terms, please
            contact us at:
            <br />
            <i>Email</i>: heracross-queries@gmail.com
            <br />
            <i>Address</i>: 123 at madeup ave, A34 986.
            <br />
          </p>
          <p className="py-3">
            <i>
              By clicking the below button, you acknowledge that you have read,
              understood, and agree to be bound by these Terms and Conditions of
              HERACROSS App.
            </i>
          </p>
        </div>
      </div>
      <Button
        func={() => {
          window.location.href = "#generate";
        }}
      >
        {"Accept & Begin!"}
      </Button>
    </div>
  );
};

export default First;
