import React from "react";
import { headerItems } from "@/constants/constant";
import { contactProfiles } from "@/model/profile";
import Image from "next/image";
import { Profiles } from "@/model/header";
import Link from 'next/link';


const Contact = () => {
  return (
    <section id={headerItems.contact.page}
      className="h-screen flex flex-col text-center justify-center items-center mt-52 mb-40">
        <div>
        <Image
          src="/images/contactpic.jpg"
          alt="contactme"
          height={325}
          width={300}
          className="m-auto flex items-center rounded mb-0 mt-20"
        />
        <h3 className="text-[2.75rem] mb-2 mt-4">Contact me</h3>
        </div>
      <div className="flex flex-col justify-center items-center text-center w-3/4 break-words ">
        {
        Object.keys(contactProfiles).map((item) => (
          <Link
          key={item}
          href={contactProfiles[item as keyof Profiles].Link}
            className="m-1 mt-4 p-2 text-[0.995rem] leading-5 inline-block rounded-md cursor-pointer bg-teal-600 text-red-50 hover:bg-teal-500"
          >{item} </Link>
        ))}
      </div>
    </section>
  );
};

export default Contact;