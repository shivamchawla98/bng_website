import React from 'react';

const page = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-8 text-center">Shipping and Exchange Policy</h1>

      <div className="space-y-8">
        <section className="space-y-4">
          <p className="text-gray-800">
            BNG Logistics Network is a digital, service-based platform offering online tools and business services exclusively to freight forwarders and logistics professionals. We do not sell or ship any physical goods.
          </p>
          <p className="text-gray-800">
            All services provided by BNG, including access to Business Xchange (global freight leads) and Freight Xchange (freight rate sharing), are delivered electronically through our secure online platform upon successful registration or subscription.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Shipping Policy</h2>
          <p className="text-gray-800">
            As our services are fully digital, there is no physical shipping involved.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Exchange Policy</h2>
          <p className="text-gray-800">
            BNG does not offer exchanges, as there are no tangible products or returnable items involved. Once service access is granted, it is considered delivered and activated.
          </p>
        </section>

        <section className="space-y-4 pt-4 border-t">
          <p className="text-gray-800">
            For service-related assistance or support, please contact us at:
          </p>
          <p className="font-medium">📧 <span className="font-semibold text-gray-700">support@bnglogisticsnetwork.com</span></p>
        </section>
      </div>
    </div>
  );
};

export default page;