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
  MapPin,
  Phone,
  Twitter,
  ExternalLink,
  CheckCircle2,
  Download,
} from "lucide-react";
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
    .filter((v) => v.category === vendor.category && v.id !== vendor.id)
    .slice(0, 3);

  const getWebsiteHref = (website) => {
    if (!website) return "";
    return /^https?:\/\//i.test(website) ? website : `https://${website}`;
  };

  const getWebsiteLabel = (website) => {
    if (!website) return "";
    return website.replace(/^https?:\/\//i, "").replace(/\/$/, "");
  };

  const detailSections = (
    vendor.detailSections?.length
      ? vendor.detailSections
      : [
          {
            title: "About Us",
            paragraphs: [vendor.about],
          },
        ]
  ).filter(
    (section) =>
      section.title || section.paragraphs?.some((p) => p && p.trim())
  );

  const hasServices = vendor.services?.length > 0;
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
      {/* ── Hero banner (no logo — logo lives in the sidebar action card) ── */}
      <div
        className="relative h-[280px] md:h-[320px] bg-gradient-to-br from-primary to-purple-800 bg-cover bg-center"
        style={
          vendor.backgroundImage?.src
            ? { backgroundImage: `url(${vendor.backgroundImage.src})` }
            : undefined
        }
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/20" />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-md">
            {vendor.name}
          </h1>
          <p className="text-lg md:text-2xl font-light text-white/90 mt-3 drop-shadow">
            {vendor.category}
          </p>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* ── Left column ── */}
            <div className="lg:col-span-2 space-y-8">
              {/* About card */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                {detailSections.map((section, sectionIndex) => (
                  <section
                    key={section.title || sectionIndex}
                    className={sectionIndex > 0 ? "mt-10" : ""}
                  >
                    {section.title && (
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        {section.title}
                      </h2>
                    )}

                    {section.highlight && (
                      <div className="mb-6 rounded-lg border border-primary/20 bg-primary/5 px-5 py-4 text-lg font-bold text-primary">
                        {section.highlight}
                      </div>
                    )}

                    <div className="space-y-4">
                      {section.paragraphs.map((paragraph, paragraphIndex) => (
                        <p
                          key={`${section.title}-${paragraphIndex}`}
                          className="text-gray-600 leading-relaxed"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              {/* Services card */}
              {hasServices && (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {vendor.servicesTitle || "Our Services"}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {vendor.services.map((service, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100"
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-800 font-medium text-sm">
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ── Right column (sidebar) ── */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-6">
                {/* Action card — logo sits just above the buttons */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  {vendor.logo && (
                    <div className="relative h-28 mb-6 flex items-center justify-center">
                      <Image
                        src={vendor.logo}
                        alt={vendor.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}

                  <div className="space-y-3">
                    {vendor.contactInfo?.email && (
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
                        className="w-full inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-50 transition"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Visit Website
                      </a>
                    )}

                    {vendor.brochureUrl && (
                      <a
                        href={vendor.brochureUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-50 transition"
                      >
                        <Download className="w-4 h-4" />
                        Download Brochure
                      </a>
                    )}
                  </div>
                </div>

                {/* Contact information card — colorful icons */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-5">
                    Contact Information
                  </h3>

                  <div className="space-y-4">
                    {vendor.contactInfo?.phone && (
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <Phone className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs text-gray-500">Phone</p>
                          <a
                            href={`tel:${vendor.contactInfo.phone}`}
                            className="text-gray-900 font-medium hover:text-primary transition"
                          >
                            {vendor.contactInfo.phone}
                          </a>
                        </div>
                      </div>
                    )}

                    {vendor.contactInfo?.email && (
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                          <Mail className="w-5 h-5 text-green-600" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs text-gray-500">Email</p>
                          <a
                            href={`mailto:${vendor.contactInfo.email}`}
                            className="text-gray-900 font-medium hover:text-primary transition break-all"
                          >
                            {vendor.contactInfo.email}
                          </a>
                        </div>
                      </div>
                    )}

                    {websiteHref && (
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                          <Globe className="w-5 h-5 text-purple-600" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs text-gray-500">Website</p>
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

                    {vendor.contactInfo?.address && (
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-orange-600" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs text-gray-500">Address</p>
                          <p className="text-gray-900 font-medium">
                            {vendor.contactInfo.address}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Connect with us — separate card */}
                {socialItems.length > 0 && (
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Connect With Us
                    </h3>
                    <div className="flex gap-3">
                      {socialItems.map(
                        ({ key, label, href, icon: Icon, className }) => (
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
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Related vendors ── */}
      {relatedVendors.length > 0 && (
        <section className="bg-white py-16 border-t border-gray-100">
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
                  <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1">
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
                        <span className="text-sm font-semibold text-primary">
                          View Details
                        </span>
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
