"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyEight from '@/components/sections/feature/FeatureCardTwentyEight';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import TextAbout from '@/components/sections/about/TextAbout';
import { Award, GraduationCap, Heart, Sparkles, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="small"
        sizing="medium"
        background="noise"
        cardStyle="gradient-radial"
        primaryButtonStyle="flat"
        secondaryButtonStyle="solid"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "About Us",
          id: "#about",
        },
        {
          name: "Features",
          id: "#features",
        },
        {
          name: "Success Stories",
          id: "#testimonials",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="BeyondLove"
      button={{
        text: "Start Your Journey",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "radial-gradient",
      }}
      imagePosition="right"
      title="Find Your Perfect Match with BeyondLove"
      description="BeyondLove is Hong Kong's premier one-to-one dating and matchmaking service. We connect discerning individuals with compatible partners, guided by professional relationship advisors. Start your journey to a lasting relationship today."
      buttons={[
        {
          text: "Get Started Now",
          href: "#contact",
        },
        {
          text: "Learn More",
          href: "#about",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/happy-smiling-couple-diversity-love-moment-together_1150-9296.jpg"
      imageAlt="Happy couple laughing together, symbol of successful dating"
      mediaAnimation="slide-up"
      fixedMediaHeight={true}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-cheerful-blond-girl-happily-looking-place-advertisement-promotional-text-isolated-white-background_574295-2161.jpg",
          alt: "Happy woman avatar",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1628.jpg",
          alt: "Smiling man avatar",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-african-american-woman-posing-against-white-background_185193-161740.jpg",
          alt: "Confident woman avatar",
        },
        {
          src: "http://img.b2bpic.net/free-photo/modern-man-with-coffee-urban-environment_23-2147961368.jpg",
          alt: "Friendly man avatar",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-beautiful-model-grey-shirt-leaning-pillar-stairs-she-is-smiling_197531-2598.jpg",
          alt: "Young woman avatar",
        },
      ]}
      avatarText="Trusted by over 1000+ happy singles"
      marqueeItems={[
        {
          type: "text",
          text: "Personalized Matches",
        },
        {
          type: "text-icon",
          text: "Expert Coaching",
          icon: GraduationCap,
        },
        {
          type: "text",
          text: "Exclusive Events",
        },
        {
          type: "text-icon",
          text: "Proven Success",
          icon: Sparkles,
        },
        {
          type: "text",
          text: "Confidential Service",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={true}
      tag="About Us"
      title="Your Trusted Partner in Love and Relationships"
      buttons={[
        {
          text: "Our Approach",
          href: "#features",
        },
      ]}
      description="At BeyondLove, we believe everyone deserves a fulfilling relationship. Our bespoke one-to-one matching process goes beyond superficial connections, focusing on compatibility, shared values, and long-term potential. Our experienced relationship consultants provide personalized guidance, ensuring a supportive and effective path to finding your ideal partner."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          title: "Professional One-to-One Matching",
          subtitle: "Our expert matchmakers hand-select compatible partners for you, ensuring quality introductions.",
          category: "Service",
          value: "Personalized",
          buttons: [
            {
              text: "Discover",
            },
          ],
        },
        {
          id: "f2",
          title: "Expert Relationship Coaching",
          subtitle: "Receive confidential advice and support from certified relationship consultants to navigate your dating journey with confidence.",
          category: "Support",
          value: "Guidance",
          buttons: [
            {
              text: "Learn More",
            },
          ],
        },
        {
          id: "f3",
          title: "Curated Social Events",
          subtitle: "Participate in exclusive events designed to foster genuine connections in relaxed and engaging environments.",
          category: "Community",
          value: "Engage",
          buttons: [
            {
              text: "Explore",
            },
          ],
        },
      ]}
      title="Our Personalized Matching Process"
      description="Experience a refined approach to dating designed for success. We tailor every step to your unique preferences and goals."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "90%",
          title: "Success Rate",
          description: "Clients find meaningful relationships within a year.",
          icon: Heart,
        },
        {
          id: "m2",
          value: "1000+",
          title: "Happy Couples",
          description: "Connections fostered and flourishing relationships built.",
          icon: Users,
        },
        {
          id: "m3",
          value: "10+",
          title: "Years of Experience",
          description: "Expert matchmakers and coaches dedicated to your journey.",
          icon: Award,
        },
      ]}
      title="Our Impact: Building Happy Relationships"
      description="BeyondLove is dedicated to fostering genuine connections. Our metrics reflect our commitment to your success and happiness."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Chan Kelly",
          handle: "@ChanKelly",
          testimonial: "I never thought a matching company would work for me until I found BeyondLove. Micky's detailed guidance and understanding of my desired partner led me to my boyfriend in less than a month!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/girl-trying-look-like-grown-up_23-2148244890.jpg",
          imageAlt: "Chan Kelly",
        },
        {
          id: "2",
          name: "Lyra WW",
          handle: "@LyraWW",
          testimonial: "This was my first activity with BeyondLove, and it was so different from others. The arrangements were excellent, no awkward silences, and friendly staff. Even though I didn't find 'the one' at the event, I made new friends!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-pretty-young-woman-showing-thumb-up-park_1262-20240.jpg",
          imageAlt: "Lyra WW",
        },
        {
          id: "3",
          name: "Sarah Shek",
          handle: "@SarahShek",
          testimonial: "After two years single, I found BeyondLove on Facebook. The comfortable atmosphere and their personalized, attentive follow-ups really set them apart. I feel confident I'll find my partner soon.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/caucasian-businesswoman-with-elegance-confidence-standing-generative-ai_188544-7684.jpg",
          imageAlt: "Sarah Shek",
        },
        {
          id: "4",
          name: "David L.",
          handle: "@DavidL",
          testimonial: "BeyondLove transformed my dating life. The quality of matches was exceptional, and the coaching helped me understand what I truly needed in a partner. Highly recommend for serious individuals.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-standing-smiling_1187-3162.jpg",
          imageAlt: "David L.",
        },
        {
          id: "5",
          name: "Emily C.",
          handle: "@EmilyC",
          testimonial: "The consultants at BeyondLove are truly amazing. They listen, they care, and they deliver. I've never felt so supported in my search for love. It's more than just matching; it's about genuine connection.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-cartoon-woman-portrait_23-2151839663.jpg",
          imageAlt: "Emily C.",
        },
      ]}
      showRating={true}
      title="Success Stories from Our Clients"
      description="Hear directly from those who found love and partnership through BeyondLove."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Happy Couples",
        "Successful Dates",
        "Lasting Bonds",
        "True Love Found",
        "New Beginnings",
        "Meaningful Connections",
        "Joyful Futures",
      ]}
      title="Where Love Stories Begin"
      description="BeyondLove has successfully brought together countless individuals, creating joyful partnerships and lasting memories. Your journey to happiness starts here."
      showCard={true}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "How does BeyondLove ensure compatibility?",
          content: "Our matchmakers conduct in-depth interviews and profile assessments to understand your personality, values, and relationship goals, ensuring highly compatible matches.",
        },
        {
          id: "q2",
          title: "Is my personal information kept confidential?",
          content: "Absolutely. We prioritize your privacy and confidentiality. All personal details are handled with the utmost discretion and are only shared with your explicit consent.",
        },
        {
          id: "q3",
          title: "What kind of support do relationship consultants provide?",
          content: "Our consultants offer personalized advice on dating etiquette, communication skills, confidence building, and post-date feedback to help you grow throughout your journey.",
        },
        {
          id: "q4",
          title: "How long does it take to find a match?",
          content: "The timeline varies for each individual, but our dedicated team works efficiently to introduce you to suitable partners. Many clients find success within the first few months.",
        },
        {
          id: "q5",
          title: "Are there any exclusive events for members?",
          content: "Yes, we organize exclusive social events and gatherings for our members, providing relaxed and fun opportunities to meet like-minded individuals beyond one-on-one dates.",
        },
      ]}
      sideTitle="Your Questions, Answered."
      sideDescription="Find answers to the most common questions about our matchmaking services, process, and membership."
      faqsAnimation="slide-up"
      textPosition="left"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "radial-gradient",
      }}
      tag="Contact Us"
      title="Ready to Find Your Someone Special?"
      description="Take the first step towards a fulfilling relationship. Schedule a confidential consultation with our expert matchmakers today."
      imageSrc="http://img.b2bpic.net/free-photo/stylish-handsome-man-looking-blonde-young-woman_23-2147891215.jpg"
      imageAlt="Couple holding hands in a cafe, symbolizing connection"
      mediaAnimation="slide-up"
      mediaPosition="right"
      inputPlaceholder="Enter your email"
      buttonText="Schedule Consultation"
      termsText="By clicking Schedule Consultation, you agree to our privacy policy and terms of service."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Services",
          items: [
            {
              label: "Matchmaking",
              href: "#features",
            },
            {
              label: "Coaching",
              href: "#features",
            },
            {
              label: "Events",
              href: "#features",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Testimonials",
              href: "#testimonials",
            },
            {
              label: "FAQ",
              href: "#faq",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 BeyondLove. All rights reserved."
      bottomRightText="Made with ❤️ in HK"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
