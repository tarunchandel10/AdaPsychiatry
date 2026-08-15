import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/data/images";
import { footerLinkGroups } from "@/lib/data/faq";

const socialLinks = [
  { id: "facebook", label: "Facebook", iconSrc: images.socials.facebook },
  { id: "instagram", label: "Instagram", iconSrc: images.socials.instagram },
  { id: "twitter", label: "Twitter", iconSrc: images.socials.twitter },
  { id: "tiktok", label: "TikTok", iconSrc: images.socials.tiktok },
  { id: "linkedin", label: "LinkedIn", iconSrc: images.socials.linkedin },
];

export function Footer() {
  return (
    <footer className="bg-black pt-10 pb-6 text-white md:pt-16">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-2">
            <p className="font-display text-[18px] font-bold text-gold-rod">Quick Links</p>
            <ul className="mt-5 flex flex-col gap-3">
              {footerLinkGroups[0].links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="font-sans text-sm text-white/80 hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="font-display text-[18px] font-bold text-gold-rod">Resources</p>
            <ul className="mt-5 flex flex-col gap-3">
              {footerLinkGroups[1].links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="font-sans text-sm text-white/80 hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          
          <div className="lg:col-span-2">
            <p className="font-display text-[18px] font-bold text-gold-rod">Legal</p>
            <ul className="mt-5 flex flex-col gap-3">
              {footerLinkGroups[2].links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="font-sans text-sm text-white/80 hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          
          <div className="lg:col-span-3">
            <p className="font-display text-[18px] font-bold text-gold-rod">Business Hours</p>
            <div className="mt-5 font-sans text-sm text-white/80">
              <p>Monday – Thursday</p>
              <p className="mt-3">09:00 am – 4:00 pm</p>
              <p className="mt-5 text-[18px] font-display font-bold text-gold-rod">For Careers</p>
              <p className="mt-4 text-white/80">
                Interested in joining the ADA Team?<br />
                <a href="mailto:Career@adapsychiatry.com" className="text-white hover:text-gold">
                  Career@adapsychiatry.com
                </a>
              </p>
            </div>
          </div>

          
          <div className="lg:col-span-3">
            <div className="mb-5 flex items-center gap-3">
              <Link href="/" className="flex items-center gap-2" aria-label="Ada Psychiatry home">
                <Image src={images.logoMark} alt="" width={40} height={40} className="h-10 w-10 object-contain" />
                <span className="font-sans text-sm font-bold tracking-wider">
                  ADA PSYCHIATRY
                </span>
              </Link>
            </div>

            <p className="font-display text-[16px] font-bold text-gold-rod">Locate us</p>
            <address className="mt-2 font-sans text-sm not-italic text-white/80">
              1820 E Ray Road, STE A107, Chandler, Arizona 85225
              <br />
              Phone:{" "}
              <a href="tel:+14805269292" className="hover:text-gold">
                480-526-9292
              </a>
            </address>

            <div className="mt-6">
              <p className="font-display text-[16px] font-bold text-gold-rod">Follow us</p>
              <ul className="mt-3 flex gap-4">
                {socialLinks.map((social) => (
                  <li key={social.id}>
                    <a href="#" aria-label={social.label} className="opacity-90 transition-opacity hover:opacity-100">
                      <Image src={social.iconSrc} alt="" width={20} height={20} className="h-5 w-5" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        
      </div>
      <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="font-sans text-xs text-white/70">
            © Ada Psychiatry. All rights reserved.
          </p>
        </div>
    </footer>
  );
}
