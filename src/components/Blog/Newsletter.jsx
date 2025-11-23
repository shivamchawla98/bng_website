"use client";

import React, { useState } from "react";
import { Mail, Check, AlertCircle } from "lucide-react";

/**
 * Newsletter Component - Email subscription form for blog updates
 */
const Newsletter = ({ variant = "default" }) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");

    try {
      // TODO: Integrate with your newsletter service (Mailchimp, SendGrid, etc.)
      // For now, simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setStatus("success");
      setMessage("Thank you for subscribing!");
      setEmail("");
      
      // Reset after 3 seconds
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 3000);
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
      
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 3000);
    }
  };

  // Inline variant (bottom of blog posts)
  if (variant === "inline") {
    return (
      <div className="bg-gradient-to-r from-primary to-primary/80 rounded-xl p-8 md:p-10 text-white my-12">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Stay Updated with Our Latest Posts
          </h3>
          <p className="text-white/90 mb-6">
            Subscribe to our newsletter and get the latest insights delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email..."
              disabled={status === "loading" || status === "success"}
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === "loading" && (
                <span className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></span>
              )}
              {status === "success" && <Check className="w-5 h-5" />}
              {status === "idle" && "Subscribe"}
              {status === "loading" && "Subscribing..."}
              {status === "success" && "Subscribed!"}
            </button>
          </form>

          {message && (
            <div className={`mt-4 flex items-center justify-center gap-2 ${
              status === "error" ? "text-red-200" : "text-green-200"
            }`}>
              {status === "error" ? (
                <AlertCircle className="w-4 h-4" />
              ) : (
                <Check className="w-4 h-4" />
              )}
              <span className="text-sm">{message}</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Sidebar variant
  return (
    <div className="bg-gradient-to-br from-primary/5 to-purple-50 rounded-xl shadow-md border border-primary/10 p-6 sticky top-24">
      <div className="text-center mb-4">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
          <Mail className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Subscribe to Our Newsletter
        </h3>
        <p className="text-sm text-gray-600">
          Get the latest blog posts delivered to your inbox.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          disabled={status === "loading" || status === "success"}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {status === "loading" && (
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
          )}
          {status === "success" && <Check className="w-4 h-4" />}
          {status === "idle" && "Subscribe"}
          {status === "loading" && "Subscribing..."}
          {status === "success" && "Subscribed!"}
        </button>
      </form>

      {message && (
        <div className={`mt-3 flex items-center gap-2 text-sm ${
          status === "error" ? "text-red-600" : "text-green-600"
        }`}>
          {status === "error" ? (
            <AlertCircle className="w-4 h-4" />
          ) : (
            <Check className="w-4 h-4" />
          )}
          <span>{message}</span>
        </div>
      )}
    </div>
  );
};

export default Newsletter;
