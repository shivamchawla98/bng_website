"use client";
import React, { useState } from "react";
import { X, CheckCircle, Loader2 } from "lucide-react";
import { gql, useMutation } from "@apollo/client";

const CREATE_LEAD = gql`
  mutation CreateLead($input: CreateLeadInput!) {
    createLead(input: $input) { id email }
  }
`;

export default function LeadCaptureModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ firstName:"", lastName:"", companyName:"", city:"", country:"", mobile:"", email:"", website:"" });
  const [submitted, setSubmitted] = useState(false);
  const [createLead, { loading, error }] = useMutation(CREATE_LEAD);

  if (!isOpen) return null;

  const handleChange = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createLead({ variables: { input: { ...form, city: form.city||undefined, country: form.country||undefined, website: form.website||undefined } } });
      setSubmitted(true);
    } catch(err) { console.error(err); }
  };

  const handleClose = () => { setForm({ firstName:"", lastName:"", companyName:"", city:"", country:"", mobile:"", email:"", website:"" }); setSubmitted(false); onClose(); };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg z-10 overflow-hidden">
        <button onClick={handleClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"><X size={22} /></button>
        {submitted ? (
          <div className="flex flex-col items-center py-16 px-8 text-center">
            <CheckCircle className="text-green-500 mb-4" size={56} />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h2>
            <p className="text-gray-500 mb-6">We've received your details. Our team will reach out shortly.</p>
            <button onClick={handleClose} className="bg-[#6853DB] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#5642c0]">Close</button>
          </div>
        ) : (
          <>
            <div className="bg-gradient-to-tr from-[#6853DB] to-[#8b74e8] px-8 py-6">
              <h2 className="text-2xl font-bold text-white">Apply Online</h2>
              <p className="text-white/80 text-sm mt-1">Join BNG Logistics Network — fill in your details and we'll be in touch.</p>
            </div>
            <form onSubmit={handleSubmit} className="px-8 py-6 space-y-4">
              {error && <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-2 rounded-lg">{error.message.includes("already exists") ? "This email is already registered." : "Something went wrong. Please try again."}</div>}
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium text-gray-700 mb-1">First Name <span className="text-red-500">*</span></label><input name="firstName" value={form.firstName} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6853DB]" /></div>
                <div><label className="block text-sm font-medium text-gray-700 mb-1">Last Name <span className="text-red-500">*</span></label><input name="lastName" value={form.lastName} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6853DB]" /></div>
              </div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Company Name <span className="text-red-500">*</span></label><input name="companyName" value={form.companyName} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6853DB]" /></div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium text-gray-700 mb-1">City</label><input name="city" value={form.city} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6853DB]" /></div>
                <div><label className="block text-sm font-medium text-gray-700 mb-1">Country</label><input name="country" value={form.country} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6853DB]" /></div>
              </div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Mobile / WhatsApp <span className="text-red-500">*</span></label><input name="mobile" value={form.mobile} onChange={handleChange} required type="tel" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6853DB]" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Email ID <span className="text-red-500">*</span></label><input name="email" value={form.email} onChange={handleChange} required type="email" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6853DB]" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Website</label><input name="website" value={form.website} onChange={handleChange} type="text" placeholder="yourcompany.com" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6853DB]" /></div>
              <button type="submit" disabled={loading} className="w-full bg-[#6853DB] hover:bg-[#5642c0] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2">
                {loading ? <><Loader2 size={18} className="animate-spin" />Submitting...</> : "Submit"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
