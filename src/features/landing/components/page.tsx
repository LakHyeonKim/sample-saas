import { Header1 } from "@/components/layout/header";
import { Hero } from "./hero";
import { Footer } from "@/components/layout/footer";
import Image from 'next/image';
import { FAQ } from "./faq";
import { Testimonial } from "./testimonial";

export function LandingPage() {
  return (
    <div>
      <Header1 />
      <Hero
        title="Build SaaS apps in minutes, not months"
        description="Create sophisticated SaaS applications with our intuitive template. No coding expertise required."
        primaryCta={{
          text: "Get Started",
          href: "/signup",
        }}
        secondaryCta={{
          text: "View on GitHub",
          href: "https://github.com/easynextjs/easynext",
        }}
        mockupImage={{
          alt: "AI Platform Dashboard",
          width: 1248,
          height: 765,
          src: "https://www.launchuicomponents.com/app-light.png",
        }}
      />
      {/* Test Thumbnail */}
      <div className="flex justify-center my-8">
        <Image
          src="https://picsum.photos/seed/picsum/600/400"
          alt="Test Thumbnail"
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
      {/* Testimonial Section */}
      <Testimonial />
      {/* FAQ Section */}
      <FAQ />
      <Footer />
    </div>
  );
}
