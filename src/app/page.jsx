'use client'
import Pricing from "@/components/Pricing";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import {
  adminPanelScreenShots,
  content,
  guestUIScreenShots,
  heading,
  pricingContent,
  section2Content,
  section2Title,
  section3Content,
  section3Title,
  section4Content,
  section4Title,
  tempContent,
} from "@/utils/constants";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { SnackbarProvider } from "notistack";
import SignUp from "./signup/page";

export default async function Home() {

  const data = await (await fetch("https://api.apnascanner.com/api/subscription-plan")).json()

  console.log(data);

  return (
    <main>
      <SnackbarProvider 
      maxSnack={3}
      anchorOrigin={{
        vertical:'bottom',
        horizontal:'center'
      }}
      >
      <Navbar>
        <div className="scroll_container">
          <section className="scroll_item">
            <Hero heading={heading} content={content} />
          </section>
          <section className="scroll_item">
            <Section1
              title={"Why Apna Scanner ?"}
              content={tempContent}
              imageList={guestUIScreenShots}
            />
          </section>
          <section className="scroll_item">
            <Section2
              title={section2Title}
              content={section2Content}
              imageList={adminPanelScreenShots}
            />
          </section>
          <section className="scroll_item">
            <Section3
              title={section4Title}
              content={section4Content}
              imageList={adminPanelScreenShots}
            />
          </section>
          <section className="scroll_item">
            <Section2
              title={section3Title}
              content={section3Content}
              check={require("@/lottiefiles/dashboard.json")}
            />
          </section>
          <section className="scroll_item">
            <Pricing content={data}/>
          </section>
        </div>
        
      </Navbar>
    </SnackbarProvider>
    </main>
  );
}
