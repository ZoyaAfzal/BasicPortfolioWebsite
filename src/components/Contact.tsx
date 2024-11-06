import React from "react";
import { headerItems } from "@/constants/constant";
import { contactProfiles } from "@/model/profile";
import Image from "next/image";
import { Profiles } from "@/model/header";
import Link from 'next/link';


const Contact = () => {
  return (
    <section id={headerItems.contact.page}
      className="contact-section">
        <div>
        <Image
          src="/images/contactpic.jpg"
          alt="contactme"
          height={325}
          width={300}
          className="contact-image"
        />
        <h3 className="contact-heading">Contact me</h3>
        </div>
      <div className="contact-links">
        {
        Object.keys(contactProfiles).map((item) => (
          <Link
          key={item}
          href={contactProfiles[item as keyof Profiles].Link}
            className="contact-profiles"
          >{item} </Link>
        ))}
      </div>
    </section>
  );
};

export default Contact;