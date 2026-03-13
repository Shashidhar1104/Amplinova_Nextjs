"use client";

import { useRef, useState } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  FaArrowRight,
  FaChevronDown,
  FaChevronUp,
  FaQuestionCircle,
} from "react-icons/fa";

interface FAQItemType {
  question: string;
  answer: string | string[];
}

interface FAQProps {
  mode?: "home" | "digital-marketing" | "it-services";
}

interface ThemeConfig {
  gradient: string;
  lightGradient: string;
  border: string;
  badgeText: string;
  iconColor: string;
  buttonBg: string;
  lineColor: string;
  badgeTextContent: string;
}

const FAQ: React.FC<FAQProps> = ({ mode = "home" }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const isInView = useInView(ref, { once: true });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData: Record<string, FAQItemType[]> = {
   home: [
      {
        question: "How much do your digital marketing services cost?",
        answer:
          "We offer flexible, goal-based packages tailored to your specific needs. After understanding your business objectives, target audience, and budget, we'll suggest a customized package that delivers maximum ROI. Our pricing starts from competitive rates suitable for startups and scales for enterprise-level requirements.",
      },
      {
        question: "When will I see results?",
        answer:
          "While some results like improved website traffic and social media engagement can be seen within 2-4 weeks, substantial growth typically occurs within 3-6 months. SEO results take 4-6 months to show significant impact, while PPC and social media campaigns can generate immediate leads. We provide monthly progress reports to track all key metrics.",
      },
      {
        question: "Do you share updates and reports?",
        answer:
          "Absolutely! We believe in complete transparency. You'll receive comprehensive monthly reports detailing campaign performance, ROI metrics, and progress toward your goals. Plus, we schedule regular strategy calls to discuss results, insights, and optimization opportunities. Our dashboard gives you 24/7 access to real-time data.",
      },
      {
        question: "Can you work with small budgets?",
        answer:
          "Yes! We work with businesses of all sizes and tailor our services to fit your budget. We'll help you prioritize the most impactful strategies that align with your financial constraints while ensuring every rupee spent delivers measurable value. Many of our most successful clients started with modest budgets.",
      },
      {
        question: "What makes Mage different from other agencies?",
        answer:
          "We combine data-driven strategies with creative storytelling, ensuring your brand not only performs well in metrics but also connects emotionally with your audience. Our transparent approach, flexible packages, and focus on building long-term partnerships set us apart. We become an extension of your team, deeply invested in your success.",
      },
      {
        question: "Do you work with specific industries?",
        answer:
          "We have experience across multiple industries including e-commerce, healthcare, education, real estate, technology, and hospitality. Our strategies are adaptable to any sector because we focus on understanding your unique audience and business goals rather than applying one-size-fits-all solutions.",
      },
      {
        question: "How do you measure campaign success?",
        answer:
          "We track both quantitative metrics (website traffic, conversion rates, ROI, lead generation) and qualitative indicators (brand sentiment, customer engagement, market positioning). Before starting, we establish clear KPIs aligned with your business objectives, and we continuously optimize based on performance data.",
      },
      {
        question: "What's your onboarding process?",
        answer:
          "Our onboarding begins with a deep-dive discovery session to understand your business, followed by comprehensive competitor and market analysis. We then develop a customized strategy, present it for your feedback, and once approved, we implement while maintaining constant communication throughout the process.",
      },
    ],
    "digital-marketing": [
      {
        question: "What digital marketing services do you offer?",
        answer:
          "SEO, social media marketing, Google Ads, content marketing, branding, automation, and email campaigns.",
      },
      {
        question: "How long does it take to see results?",
        answer: [
          "SEO: 2–4 months \n",
          "Paid Ads: Immediate results \n",
          "Social Media Growth: 30–90 days \n",
        ],
      },
      {
        question: "Do you manage social media pages fully?",
        answer:
          "Yes — content creation, posting, ads, storytelling, and analytics",
      },
      {
        question: "Can you help with branding and content creation?",
        answer: "Yes — logo, brand identity, creatives, videos, copywriting",
      },
      {
        question: "How do you track marketing performance?",
        answer:
          "Using Google Analytics, Search Console, Meta Business Suite, and real-time dashboards.",
      },
      {
        question: "What industries do you work with?",
        answer:
          "Real estate, healthcare, education, e-commerce, tech, and local businesses.",
      },
      {
        question: "Can digital marketing help small businesses?",
        answer:
          "Absolutely — it builds awareness, increases leads, and boosts revenue with minimal cost.",
      },
    ],
    "it-services": [
      {
        question: "What services does an IT company provide?",
        answer:
          "We offer software development, web/app development, cloud solutions, automation, cybersecurity, and IT consulting.",
      },
      {
        question: "How long does a typical IT project take?",
        answer:
          "Depending on scope — from 2 weeks (small website) to 3–6 months (custom software).",
      },
      {
        question: "Do you provide ongoing support after development?",
        answer:
          "Yes. We offer  Annual Maintenance Contract (AMC), maintenance, updates, and performance monitoring.",
      },
      {
        question: "What technologies do you work with?",
        answer:
          "React, Node.js, Java, Python, PHP, AWS, Azure, DevOps tools, and modern cloud-native stacks.",
      },
      {
        question: "How do you ensure project quality?",
        answer:
          "Through QA testing, code reviews, performance audits, and user acceptance testing (UAT).",
      },
      {
        question: "Can you integrate third-party APIs?",
        answer:
          "Absolutely — payment gateways, CRM, ERP, email systems, and custom APIs.",
      },
      {
        question: "Do you work with startups and enterprises?",
        answer:
          "Yes — we support startups, SMEs, and large-scale enterprise systems.",
      },
      {
        question: "Do you offer support?",
        answer:
          "Yes — we support startups, SMEs, and large-scale enterprise systems.",
      },
    ],
  };

  const currentFAQs = faqData[mode] || faqData.home;

  const getThemeConfig = (): ThemeConfig => {
    if (mode === "digital-marketing") {
      return {
        gradient: "from-orange-600 to-red-600",
        lightGradient: "from-orange-500 to-red-500",
        border: "border-orange-100",
        badgeText: "text-orange-700",
        iconColor: "text-orange-600",
        buttonBg: "bg-orange-100",
        lineColor: "bg-orange-200",
        badgeTextContent: "Digital Marketing FAQs",
      };
    }

    if (mode === "it-services") {
      return {
        gradient: "from-blue-600 to-purple-600",
        lightGradient: "from-blue-500 to-purple-500",
        border: "border-blue-100",
        badgeText: "text-blue-700",
        iconColor: "text-blue-600",
        buttonBg: "bg-blue-100",
        lineColor: "bg-blue-200",
        badgeTextContent: "IT Services FAQs",
      };
    }

    return {
      gradient: "from-amber-600 to-orange-600",
      lightGradient: "from-amber-500 to-orange-500",
      border: "border-amber-100",
      badgeText: "text-amber-700",
      iconColor: "text-amber-600",
      buttonBg: "bg-amber-100",
      lineColor: "bg-amber-200",
      badgeTextContent: "Common Questions",
    };
  };

  const themeConfig = getThemeConfig();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="faq"
      className="bg-white pt-5 pb-5 text-gray-800 relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 mb-6"
            >
              <FaQuestionCircle className={`w-5 h-5 ${themeConfig.iconColor}`} />
              <span className={`text-sm font-medium ${themeConfig.badgeText}`}>
                {themeConfig.badgeTextContent}
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-10"
            >
              <span
                className={`bg-gradient-to-r ${themeConfig.gradient} bg-clip-text text-transparent`}
              >
                Frequently Asked Questions
              </span>
            </motion.h2>
          </div>

          {/* FAQ List */}
          <div className="space-y-6">
            {currentFAQs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                index={index}
                openIndex={openIndex}
                toggleFAQ={toggleFAQ}
                themeConfig={themeConfig}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="w-full flex justify-center mt-10">
            <button
              onClick={() => router.push("/contact-us")}
              className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-10 py-4 rounded-xl font-semibold hover:scale-105 transition flex items-center gap-2 shadow-lg"
            >
              Get In Touch with Us
              <FaArrowRight />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface FAQItemProps {
  faq: FAQItemType;
  index: number;
  openIndex: number | null;
  toggleFAQ: (index: number) => void;
  themeConfig: ThemeConfig;
}

const FAQItem: React.FC<FAQItemProps> = ({
  faq,
  index,
  openIndex,
  toggleFAQ,
  themeConfig,
}) => {
  const isOpen = openIndex === index;

  return (
    <motion.div
      className={`bg-white/80 backdrop-blur-sm rounded-2xl border ${themeConfig.border} shadow-sm overflow-hidden`}
    >
      <button
        onClick={() => toggleFAQ(index)}
        className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition"
      >
        <span className="font-semibold text-gray-800 text-lg pr-4">
          {faq.question}
        </span>

        <div
          className={`w-6 h-6 ${themeConfig.buttonBg} rounded-full flex items-center justify-center`}
        >
          {isOpen ? (
            <FaChevronUp className={themeConfig.iconColor} />
          ) : (
            <FaChevronDown className={themeConfig.iconColor} />
          )}
        </div>
      </button>

      {isOpen && (
        <div className="px-6 pb-6">
          <div className={`w-12 h-0.5 ${themeConfig.lineColor} mb-4`} />
          {Array.isArray(faq.answer) ? (
            faq.answer.map((line, i) => (
              <p key={i} className="text-gray-700 mb-2">
                {line}
              </p>
            ))
          ) : (
            <p className="text-gray-700">{faq.answer}</p>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default FAQ;