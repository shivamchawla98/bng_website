"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Map, Mail, Phone, Globe, Share2, ExternalLink, Heart, Star } from "lucide-react";
import BannerSection from "@/components/Blog/BlogPageBanner";
import { getVendorBySlug, vendorsData } from "@/data/vendors";

const VendorDetailClient = ({ slug }) => {
  const vendor = getVendorBySlug(slug);
  const [isLiked, setIsLiked] = useState(false);

  if (!vendor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Vendor Not Found</h1>
          <Link href="/vendor-partners" className="text-primary hover:underline">
            Back to Vendors
          </Link>
        </div>
      </div>
    );
  }

  // Find related vendors in the same category
  const relatedVendors = vendorsData
    .filter(v => v.category === vendor.category && v.id !== vendor.id)
    .slice(0, 3);

  const getInitials = (name) => {
    return name
      .split(" ")
      .map(word => word[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="w-full">
      {/* Banner */}
      <BannerSection
        title={vendor.name}
        subtitle={vendor.tagline}
        backOnly={true}
        backgroundImage={vendor.backgroundImage}
      />

      <div className="bg-white">
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - Left side */}
            <div className="lg:col-span-2">
              {/* About Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  About {vendor.name}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {vendor.about}
                </p>
              </section>

              {/* Services Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {vendor.services.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-start p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-100 hover:shadow-md transition-shadow"
                    >
                      <div className="flex-shrink-0 h-6 w-6 text-primary mt-1">
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 font-semibold">{service}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Testimonials Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Client Testimonials
                </h2>
                <div className="space-y-6">
                  {vendor.testimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-6"
                    >
                      <div className="flex items-start mb-4">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 italic mb-4">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-indigo-600 flex items-center justify-center text-white font-bold mr-4">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">
                            {testimonial.author}
                          </p>
                          <p className="text-sm text-gray-600">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar - Right side */}
            <div className="lg:col-span-1">
              {/* Vendor Card */}
              <div className="sticky top-4">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200 overflow-hidden shadow-lg">
                  {/* Logo Section */}
                  <div className="bg-white p-6 border-b border-gray-200">
                    {vendor.logo && (
                      <div className="relative h-24 mb-4">
                        <Image
                          src={vendor.logo}
                          alt={vendor.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}
                    <h3 className="text-lg font-bold text-gray-900">
                      {vendor.name}
                    </h3>
                    <p className="text-sm text-primary font-semibold mt-1">
                      {vendor.category}
                    </p>
                  </div>

                  {/* Rating Section */}
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center mb-2">
                      <div className="text-4xl font-bold text-gray-900">
                        {vendor.rating}
                      </div>
                      <div className="ml-4">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(vendor.rating)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-xs text-gray-600 mt-1">
                          Based on {vendor.reviewCount} reviews
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="p-6 space-y-4 border-b border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-4">
                      Contact Information
                    </h4>

                    {/* Phone */}
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-600">Phone</p>
                        <a
                          href={`tel:${vendor.contactInfo.phone}`}
                          className="text-gray-900 font-medium hover:text-primary transition"
                        >
                          {vendor.contactInfo.phone}
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-600">Email</p>
                        <a
                          href={`mailto:${vendor.contactInfo.email}`}
                          className="text-gray-900 font-medium hover:text-primary transition break-all"
                        >
                          {vendor.contactInfo.email}
                        </a>
                      </div>
                    </div>

                    {/* Website */}
                    {vendor.contactInfo.website && (
                      <div className="flex items-start gap-3">
                        <Globe className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-gray-600">Website</p>
                          <a
                            href={`http://${vendor.contactInfo.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-900 font-medium hover:text-primary transition flex items-center gap-1 break-all"
                          >
                            {vendor.contactInfo.website}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    )}

                    {/* Address */}
                    {vendor.contactInfo.address && (
                      <div className="flex items-start gap-3">
                        <Map className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-gray-600">Address</p>
                          <p className="text-gray-900 font-medium">
                            {vendor.contactInfo.address}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="p-6 space-y-3">
                    <a
                      href={`mailto:${vendor.contactInfo.email}`}
                      className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold py-3 rounded-lg hover:bg-purple-700 transition"
                    >
                      <Mail className="w-4 h-4" />
                      Contact Us
                    </a>

                    {vendor.contactInfo.website && (
                      <a
                        href={`http://${vendor.contactInfo.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 border-2 border-primary text-primary font-semibold py-3 rounded-lg hover:bg-primary/5 transition"
                      >
                        <Globe className="w-4 h-4" />
                        Visit Website
                      </a>
                    )}
                  </div>

                  {/* Social Links */}
                  {vendor.socialLinks && (
                    <div className="p-6 border-t border-gray-200">
                      <h4 className="font-bold text-gray-900 mb-4">
                        Connect With Us
                      </h4>
                      <div className="flex gap-3">
                        {vendor.socialLinks.linkedin && (
                          <a
                            href={vendor.socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition"
                            title="LinkedIn"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.2h-2.5v8.5h2.5v-4.74c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.74h2.5M6.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m1.237 9.5H5.265V9h2.472v8.5z"/>
                            </svg>
                          </a>
                        )}
                        {vendor.socialLinks.twitter && (
                          <a
                            href={vendor.socialLinks.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition"
                            title="Twitter"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7"/>
                            </svg>
                          </a>
                        )}
                        {vendor.socialLinks.facebook && (
                          <a
                            href={vendor.socialLinks.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition"
                            title="Facebook"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a2 2 0 012-2h3z"/>
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Vendors Section */}
      {relatedVendors.length > 0 && (
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Other {vendor.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedVendors.map((relVendor) => (
                <Link
                  key={relVendor.id}
                  href={`/vendor-partners/${relVendor.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition transform hover:-translate-y-2">
                    <div className="p-6">
                      {relVendor.logo && (
                        <div className="relative h-20 mb-4">
                          <Image
                            src={relVendor.logo}
                            alt={relVendor.name}
                            fill
                            className="object-contain group-hover:scale-105 transition"
                          />
                        </div>
                      )}
                      <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition">
                        {relVendor.name}
                      </h3>
                      <p className="text-sm text-primary font-semibold mb-3">
                        {relVendor.category}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-semibold text-gray-900">
                            {relVendor.rating}
                          </span>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary transition" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default VendorDetailClient;
