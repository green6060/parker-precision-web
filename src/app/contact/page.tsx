"use client";

import React, { useState } from "react";
import NavBar from "../components/navbar";

export default function Contact() {
  return (
    <div className="font-sans min-h-screen bg-gray-50 text-gray-900">
      <NavBar />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">Book a Consultation</h1>
        <div className="rounded-xl overflow-hidden shadow-lg bg-white p-4 md:p-8">
          <iframe
            src="https://calendly.com/dallasjamesparker/web-app-consultation?embed_domain=localhost&embed_type=Inline"
            width="100%"
            height="700"
            frameBorder="0"
            title="Schedule a Consultation with Dallas Parker"
            className="w-full min-h-[700px] border-0"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </div>
  );
}
