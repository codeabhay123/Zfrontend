import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductsPage() {
  return (
    <>
      <Hero />

      <LeftSection
        imageURL="media/image/kite.png"
        productName="Kite"
        productDescription={
          <>
            Our ultra-fast flagship trading platform with streaming market data, <br />
            advanced charts, and a sleek, intuitive UI. <br />
            Trade seamlessly across web, Android, and iOS—anytime, anywhere.
          </>
        }
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <RightSection
        imageURL="media/image/console.png"
        productName="Console"
        productDescription={
          <>
            The central dashboard for your Zerodha account. <br />
            Get a comprehensive overview of your trading and investing journey. <br />
            Track profits/losses, analyze trends, and gain insights with reports & interactive visualisations. <br />
            Take better control of your financial decisions—all in one place.
          </>
        }
        learnMore=""
      />

      <LeftSection
        imageURL="media/image/coin.png"
        productName="Coin"
        productDescription={
          <>
            Buy direct mutual funds online—completely commission-free. <br />
            Funds are delivered directly to your Demat account. <br />
            A smooth and simple way to grow wealth with long-term investments.
          </>
        }
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <RightSection
        imageURL="media/image/kiteconnect.png"
        productName="Kite Connect API"
        productDescription={
          <>
            Build powerful trading platforms and investment experiences <br />
            using simple HTTP/JSON APIs. <br />
            Ideal for startups looking to scale with custom solutions. <br />
            Join our ecosystem and access one of India's largest client bases.
          </>
        }
        learnMore=""
      />

      <LeftSection
        imageURL="media/image/varsity.png"
        productName="Varsity mobile"
        productDescription={
          <>
            Learn the stock market the easy way—on your phone. <br />
            Varsity offers bite-sized, in-depth lessons with illustrations. <br />
            Whether you're a beginner or seasoned trader, there's always more to explore.
          </>
        }
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <p className="text-center mt-5 mb-5">
        Want to know more about our technology stack? Check out the Zerodha.tech blog.
      </p>

      <Universe />
    </>
  );
}

export default ProductsPage;
