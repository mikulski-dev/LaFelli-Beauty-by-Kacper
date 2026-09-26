// Sends enquiry forms to the Google Sheet (Apps Script web app).
const ENDPOINT =
	"https://script.google.com/macros/s/AKfycbzAfRHkFyMb72KU6-fTMJiC5gOY6FA1lNLsy9WmgXRouvyjNt--cHd3NiLqRRkugJ0sTg/exec";

const WHATSAPP_NUMBER = "447769379946";

export interface EnquiryData {
	form: "Hero form" | "Contact section" | "Contact page" | "Quick enquiry";
	name: string;
	email?: string;
	phone?: string;
	contact?: string;
	treatment?: string;
	source?: string;
	message?: string;
	website?: string;
}

/** Posts the enquiry. no-cors means the response is opaque, so only a thrown fetch counts as failure. */
export async function sendEnquiry(data: EnquiryData): Promise<boolean> {
	try {
		await fetch(ENDPOINT, {
			method: "POST",
			mode: "no-cors",
			headers: { "Content-Type": "text/plain;charset=utf-8" },
			body: JSON.stringify(data),
			keepalive: true,
		});
		return true;
	} catch {
		return false;
	}
}

/** Reads a trimmed string field from a form, including the hidden "website" spam trap. */
export function field(data: FormData, key: string): string {
	return String(data.get(key) ?? "").trim();
}

/** Replaces the form with a thank-you (or failure) message and a WhatsApp fallback link. */
export function showEnquiryResult(form: HTMLFormElement, ok: boolean, name: string, whatsappText: string) {
	const box = document.createElement("div");
	box.className = "enquiry-result";
	box.setAttribute("role", "status");
	box.tabIndex = -1;

	const msg = document.createElement("p");
	msg.className = "enquiry-result__msg";
	msg.textContent = ok
		? `Thank you, ${name.split(/\s+/)[0]}. Lili will be in touch soon.`
		: "Sorry, that didn't send. Please message Lili on WhatsApp.";

	const link = document.createElement("a");
	link.className = "enquiry-result__link";
	link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`;
	link.target = "_blank";
	link.rel = "noopener noreferrer";
	link.textContent = ok ? "Prefer WhatsApp? Message Lili" : "Message Lili on WhatsApp";

	box.append(msg, link);
	form.replaceWith(box);
	box.focus();
}
