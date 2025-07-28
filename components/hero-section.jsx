"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Link from "next/link";
import { ArrowRight, Menu, Rocket, X } from "lucide-react";
import { Button } from "./ui/button";
// import { ModeToggle } from "./ui/toggle";
import { SignInButton,SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
const menuItems = [
  { name: "Features", href: "#" },
  { name: "Solution", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "About", href: "#" },
];
const teachers = [
  {
    name: "Mrs. Anjali Sharma",
    subject: "Mathematics",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Mr. Rajeev Verma",
    subject: "Physics",
    image: "https://randomuser.me/api/portraits/men/48.jpg",
  },
  {
    name: "Mrs. Kavita Iyer",
    subject: "English Literature",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function HeroSection() {
  const [menuState, setMenuState] = useState(false);

  return (
    <>
      <header>
        <nav
          data-state={menuState && "active"}
          className="fixed z-20 w-full border-b border-dashed bg-white backdrop-blur md:relative dark:bg-zinc-950/50 lg:dark:bg-transparent"
        >
          <div className="m-auto max-w-5xl px-6">
            <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
              <div className="flex w-full justify-between lg:w-auto">
                <Link
                  href="/"
                  aria-label="home"
                  className="flex items-center space-x-2"
                >
                  {`Easily`}
                </Link>

                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                  className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                >
                  <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                  <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                </button>
              </div>

              <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                <div className="lg:pr-4">
                  <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
                    {menuItems.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="text-muted-foreground hover:text-accent-foreground block duration-150"
                        >
                          <span>{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* <ModeToggle/> */}
             <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6">
  <SignedOut>
    {/* Sign In Button */}
    <SignInButton className='bg-white text-black hover:bg-white outline-4' mode="modal">
      <Button asChild size="sm">
        <Link href="#">
          <span>Sign In</span>
        </Link>
      </Button>
    </SignInButton>

    {/* Sign Up Button */}
    <SignUpButton mode="modal">
      <Button asChild size="sm">
        <Link href="#">
          <span>Sign Up</span>
        </Link>
      </Button>
    </SignUpButton>
  </SignedOut>

  {/* Optional: Show UserButton when signed in */}
  <SignedIn>
    <UserButton />
  </SignedIn>
</div>

              </div>
            </div>
          </div>
        </nav>
      </header>
      <main className="overflow-hidden">
        <section className="relative">
          <div className="relative py-14 lg:py-8">
            <div className="mx-auto max-w-7xl px-6 md:px-12 ">
              <div className="text-center sm:mx-auto sm:w-10/12 lg:mr-auto lg:mt-0 lg:w-4/5">
                <Link
                  href="/"
                  className="rounded-(--radius) mx-auto flex w-fit items-center gap-2 border p-1 pr-3"
                >
                  <span className="bg-muted rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs">
                    Buddy
                  </span>
                  <span className="text-sm">Start your Journey</span>
                  <span className="bg-(--color-border) block h-4 w-px"></span>

                  <ArrowRight className="size-4" />
                </Link>

                <h1 className="mt-8 text-4xl font-semibold md:text-5xl xl:text-5xl xl:[line-height:1.125]">
                  Jab duniya doubt karti hai,
                  <br />
                  hum guide karte hain.
                </h1>
                <p className="mx-auto mt-8 hidden max-w-2xl text-wrap text-lg sm:block">
                  In a world full of platforms that teach you what to do, we
                  quietly focus on helping you become the kind of person who
                  never stops moving forward{" "}
                </p>
                <p className="mx-auto mt-6 max-w-2xl text-wrap sm:hidden"></p>

                <div className="mt-8">
                  <Button size="lg" asChild>
                    <Link href="#">
                      <Rocket className="relative size-4" />
                      <span className="text-nowrap">Get Started</span>
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="x-auto relative mx-auto mt-8 max-w-lg sm:mt-12">
                <div className="absolute inset-0 -top-8 left-1/2 -z-20 h-56 w-full -translate-x-1/2 [background-image:linear-gradient(to_bottom,transparent_98%,theme(colors.gray.200/75%)_98%),linear-gradient(to_right,transparent_94%,_theme(colors.gray.200/75%)_94%)] [background-size:16px_35px] [mask:radial-gradient(black,transparent_95%)] dark:opacity-10"></div>
                <div className="absolute inset-x-0 top-12 -z-[1] mx-auto h-1/3 w-2/3 rounded-full bg-blue-300 blur-3xl dark:bg-white/20"></div>
                <Swiper
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  loop
                  autoplay={{ delay: 2000 }}
                  modules={[Autoplay, EffectCoverflow]}
                >
                  {teachers.map((teacher, index) => (
                    <SwiperSlide className="px-2" key={index}>
                      <div className="bg-background rounded-xl h-56 max-w-xl border p-3 text-center">
                        <img
                          src={teacher.image}
                          alt={teacher.name}
                          className="w-20 h-20 rounded-full mx-auto object-cover"
                        />
                        <h3 className="mt-4 text-lg font-semibold">
                          {teacher.name}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {teacher.subject}
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
