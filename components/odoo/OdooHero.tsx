"use client";

import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function OdooHero() {
  return (
    <section className="relative pt-24 pb-10 md:pt-28 md:pb-14 bg-[#F8FAFC]" id="home">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-12 lg:gap-16 items-center">

          <div className="text-left w-full">

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-8 mb-10 w-full">
              <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight leading-[1.15] text-[#003D82]">
                Your Trusted{" "}
                <Image
                  src="/odoo-icon.svg"
                  alt="Odoo"
                  width={100}
                  height={54}
                  className="inline-block h-10 md:h-12 w-auto align-middle mx-1"
                />{" "}
                Partner <br />
                <span className="text-[#003D82]">for Business Transformation</span>
              </h1>
              <div
