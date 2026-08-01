export const siteConfig = {
  companyName: "DAM",
  companyNameAr: "دعم",
  tagline: "Business development & enablement partner",
  taglineAr: "شريك التطوير والتمكين التجاري",
  phone: "+971 4 123 4567",
  email: "hello@dambuilds.com",
  address: "Abu Dhabi, UAE",
  addressAr: "أبوظبي، الإمارات العربية المتحدة",
  emailJs: {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
  },
};