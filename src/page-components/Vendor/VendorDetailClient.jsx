"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  Map,
  Phone,
  Twitter,
  ExternalLink,
  Star,
} from "lucide-react";
import BannerSection from "@/components/Blog/BlogPageBanner";
import { getVendorBySlug, vendorsData } from "@/data/vendors";

const VendorDetailClient = ({ slug }) => {
  const vendor = getVendorBySlug(slug);

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

  const getWebsiteHref = (website) => {
    if (!website) return "";
    return /^https?:\/\//i.test(website) ? website : `https://${website}`;
  };

  const getWebsiteLabel = (website) => {
    if (!website) return "";
    return website.replace(/^https?:\/\//i, "").replace(/\/$/, "");
  };

  const detailSections = vendor.detailSections?.length
    ? vendor.detailSections
    : [
        {
          title: `About ${vendor.name}`,
          paragraphs: [vendor.about],
        },
      ];
  const hasServices = vendor.services?.length > 0;
  const hasTestimonials = vendor.testimonials?.length > 0;
  const hasRating = typeof vendor.rating === "number";
  const websiteHref = getWebsiteHref(vendor.contactInfo?.website);
  const websiteLabel = getWebsiteLabel(vendor.contactInfo?.website);
  const socialItems = [
    {
      key: "linkedin",
      label: "LinkedIn",
      href: vendor.socialLinks?.linkedin,
      icon: Linkedin,
      className: "bg-blue-700 hover:bg-blue-800",
    },
    {
      key: "facebook",
      label: "Facebook",
      href: vendor.socialLinks?.facebook,
      icon: Facebook,
      className: "bg-blue-600 hover:bg-blue-700",
    },
    {
      key: "instagram",
      label: "Instagram",
      href: vendor.socialLinks?.instagram,
      icon: Instagram,
      className: "bg-pink-600 hover:bg-pink-700",
    },
    {
      key: "twitter",
      label: "Twitter",
      href: vendor.socialLinks?.twitter,
      icon: Twitter,
      className: "bg-sky-500 hover:bg-sky-600",
    },
  ].filter((item) => item.href);

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
              {detailSections.map((section, sectionIndex) => (
                <section key={section.title} className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {section.title}
                  </h2>

                  {section.highlight && (
                    <div className="mb-6 rounded-lg border border-primary/20 bg-primary/5 px-5 py-4 text-lg font-bold text-primary">
                      {section.highlight}
                    </div>
                  )}

                  <div className="space-y-5">
                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                      <p
                        key={`${section.title}-${paragraphIndex}`}
                        className={`text-gray-700 leading-relaxed ${
                          sectionIndex === 0 && paragraphIndex === 0
                            ? "text-lg"
                            : "text-base"
                        }`}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}

              {/* Services Section */}
              {hasServices && (
                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    {vendor.servicesTitle || "Our Services"}
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
              )}

              {/* Testimonials Section */}
              {hasTestimonials && (
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
              )}
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
                  {hasRating && (
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
                          {vendor.reviewCount && (
                            <p className="text-xs text-gray-600 mt-1">
                              Based on {vendor.reviewCount} reviews
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contact Information */}
                  <div className="p-6 space-y-4 border-b border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-4">
                      Contact Information
                    </h4>

                    {/* Phone */}
                    {vendor.contactInfo.phone && (
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
                    )}

                    {/* Email */}
                    {vendor.contactInfo.email && (
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
                    )}

                    {/* Website */}
                    {websiteHref && (
                      <div className="flex items-start gap-3">
                        <Globe className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-gray-600">Website</p>
                          <a
                            href={websiteHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-900 font-medium hover:text-primary transition flex items-center gap-1 break-all"
                          >
                            {websiteLabel}
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
                    {vendor.contactInfo.email && (
                      <a
                        href={`mailto:${vendor.contactInfo.email}`}
                        className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold py-3 rounded-lg hover:bg-purple-700 transition"
                      >
                        <Mail className="w-4 h-4" />
                        Contact Us
                      </a>
                    )}

                    {websiteHref && (
                      <a
                        href={websiteHref}
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
                  {socialItems.length > 0 && (
                    <div className="p-6 border-t border-gray-200">
                      <h4 className="font-bold text-gray-900 mb-4">
                        Connect With Us
                      </h4>
                      <div className="flex gap-3">
                        {socialItems.map(({ key, label, href, icon: Icon, className }) => (
                          <a
                            key={key}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-10 h-10 text-white rounded-full flex items-center justify-center transition ${className}`}
                            title={label}
                          >
                            <Icon className="w-5 h-5" />
                          </a>
                        ))}
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
                        {typeof relVendor.rating === "number" ? (
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-semibold text-gray-900">
                              {relVendor.rating}
                            </span>
                          </div>
                        ) : (
                          <span className="text-sm font-semibold text-primary">
                            View Details
                          </span>
                        )}
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
