import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import {
  adminPanelScreenShots,
  content,
  guestUIScreenShots,
  heading,
  section2Content,
  section2Title,
  section4Content,
  section4Title,
  tempContent,
} from "@/utils/constants";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main data-theme="dark">
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
        </div>
      </Navbar>
    </main>
  );
}
