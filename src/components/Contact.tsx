import React from "react";
import { headerItems } from "@/constants/constant";
import { contactProfiles } from "@/model/profile";
import Image from "next/image";
import { Profiles } from "@/model/header";
import Link from 'next/link';


const Contact = () => {
  return (
    <section id={headerItems.contact.page}
      className="h-screen flex flex-col text-center justify-center items-center my-40">
        <div>
        <Image
          src="/images/contactimg.jpg"
          alt="contactme"
          height={300}
          width={300}
          className="m-auto items-center rounded"
        />
        <h1 className="text-6xl mt-2">Contact me</h1>
        </div>
      <div className="flex flex-col justify-center items-center text-center mt-4 w-3/4 break-words">
        {
        Object.keys(contactProfiles).map((item) => (
          <Link
          key={item}
          href={contactProfiles[item as keyof Profiles].Link}
            className="bg-yellow-600 m-1 p-2 text-sm text-neutral-200 mt-4 inline-block rounded-md cursor-pointer"
          >{item} </Link>
        ))}
      </div>
    </section>
  );
};

export default Contact;