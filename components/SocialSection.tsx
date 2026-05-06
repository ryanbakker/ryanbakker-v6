import ContactSection from "./ContactSection";
import SocialGallery, { SocialCard } from "./SocialGallery";

interface SocialSectionProps {
  socialCards?: SocialCard[] | null;
  contactDescription?: string | null;
  location?: string | null;
  email?: string | null;
}

function SocialSection({
  socialCards,
  contactDescription,
  location,
  email,
}: SocialSectionProps) {
  return (
    <section className="section-parent py-12 md:py-20 bg-linear-330 from-[#00092E] via-[#442A55] to-[#FFC58E]">
      <SocialGallery socialCards={socialCards} />
      <ContactSection
        contactDescription={contactDescription}
        location={location}
        email={email}
      />
      <div className="h-20" />
    </section>
  );
}

export default SocialSection;
