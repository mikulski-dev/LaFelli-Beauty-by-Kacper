// Single source of truth for business details used by the About, Testimonials
// and Contact pages (and their JSON-LD). Values are copied from Footer.astro,
// Contact.astro and Hero.astro; nothing here is new information.
export const business = {
	name: "Lafeli Beauty",
	bookingUrl:
		"https://www.fresha.com/en-GB/a/lafeli-beauty-willaston-nantwich-70-colleys-lane-hq1yvezc/booking?menu=true&pId=3085259",
	whatsappUrl: "https://wa.me/447769379946",
	whatsappNumber: "447769379946",
	phoneHref: "tel:+447769379946",
	phoneE164: "+447769379946",
	phoneDisplay: "07769 379946",
	instagramUrl: "https://www.instagram.com/lili_lafeli/",
	facebookUrl: "https://www.facebook.com/p/Lilly-Massage-Therapist-100089978122676/",
	address: {
		street: "70 Colleys Lane",
		locality: "Willaston, Nantwich",
		postalCode: "CW5 6NT",
		country: "GB",
		full: "70 Colleys Lane, Willaston, Nantwich CW5 6NT",
	},
	// Approximate coordinates, as already used by WhereWeServe.astro.
	coords: [53.0518, -2.5288] as [number, number],
	languages: ["English", "Portuguese"],
	// TODO: confirm live domain.
	siteUrl: "https://lafelibeauty.co.uk",
	// TODO: add Lili's Google review link (Google Business Profile "Get more reviews" URL).
	googleReviewUrl: "",
};

const businessId = `${business.siteUrl}/#business`;

/** The one BeautySalon entity, referenced by AboutPage and ContactPage. */
export const beautySalonSchema = {
	"@type": "BeautySalon",
	"@id": businessId,
	name: business.name,
	url: business.siteUrl,
	telephone: business.phoneE164,
	address: {
		"@type": "PostalAddress",
		streetAddress: business.address.street,
		addressLocality: business.address.locality,
		postalCode: business.address.postalCode,
		addressCountry: business.address.country,
	},
	sameAs: [business.instagramUrl, business.facebookUrl],
};

export function pageSchema(type: "AboutPage" | "ContactPage", path: string, name: string, description: string) {
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": type,
				"@id": `${business.siteUrl}${path}#webpage`,
				url: `${business.siteUrl}${path}`,
				name,
				description,
				about: { "@id": businessId },
				mainEntity: { "@id": businessId },
			},
			beautySalonSchema,
		],
	};
}
