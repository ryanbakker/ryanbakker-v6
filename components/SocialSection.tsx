import ContactSection from "./ContactSection";
import SocialGallery from "./SocialGallery";

function SocialSection() {
  return (
    <section className="section-parent py-20 bg-linear-330 from-[#00092E] via-[#442A55] to-[#FFC58E]">
      <SocialGallery />
      <ContactSection />
    </section>
  );
}

export default SocialSection;
