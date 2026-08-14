/* ============================================================
   VIETNAM VISA PASS (VVP) — MULTI-LANGUAGE ENGINE & LOGIC v8.0
   ============================================================ */

// ── 1. GLOBAL I18N DICTIONARY & SWITCHER ────────────────────
const i18n = {
  "en": {
    "topbar_badge": "⚡ <strong>VIETNAM VISA PASS</strong> — Vietnam's Premier Express Visa Run & 1-Hour E-Visa Network!",
    "topbar_hotline": "📞 Hotline / WhatsApp: ",
    "nav_services": "Services",
    "nav_calculator": "Estimator",
    "nav_guide": "Border Guides",
    "nav_fasttrack": "VIP Fast Track",
    "nav_schedule": "Timetable",
    "nav_pricing": "Pricing",
    "nav_terms": "Terms of Service",
    "nav_payment": "Payment Info",
    "nav_contact": "Book 24/7",
    "hero_tag": "⚡ VIETNAM VISA PASS",
    "hero_badge_guarantee": "🛡️ 100% Money-Back & Fee Refund Guarantee",
    "hero_badge_transparency": "💎 100% Upfront Transparent Pricing",
    "hero_title_1": "Vietnam Visa Run & Extension",
    "hero_title_2": "1-Hour Super Fast · All-Inclusive · Reliable",
    "hero_desc": "Premier <strong>Sleeper Bus & VIP Limousine Visa Runs</strong> from <strong>Da Nang, Nha Trang, Hanoi</strong> to Laos (Lao Bao, Bo Y), Cambodia (Moc Bai) & China (Huu Nghi). <strong>Emergency E-Visa in 1h–4h</strong>, and <strong>VIP Airport Fast Track $70</strong>.",
    "hero_cta_calc": "⚡ Calculate & Book Now",
    "hero_cta_wa": "Chat WhatsApp 24/7",
    "hero_cta_guide": "📖 Border Step-by-Step",
    "stat_clients": "Global Expats & Travelers",
    "stat_speed_num": "1 Hour",
    "stat_speed": "Fastest 1-Hour E-Visa",
    "stat_success": "Border Clearance Rate",
    "stat_refund": "Money-Back & Fee Refund",
    "mq_1": "⚡ VIETNAM VISA PASS — Premier Express Visa Run & Urgent E-Visa Network",
    "mq_2": "🚀 Emergency 90-day E-Visa in 1h–4h approved same-day at the border",
    "mq_3": "🚌 Scheduled departures from Da Nang, Nha Trang, Hanoi & Ho Chi Minh City",
    "mq_4": "👑 Airport VIP Fast Track at Tan Son Nhat, Noi Bai, Da Nang & Cam Ranh",
    "mq_5": "💯 100% Upfront Transparent Pricing & Money-Back Guarantee",
    "services_subbadge": "⚡ CORE VIP SERVICES",
    "services_title": "Speed, Privacy &",
    "services_title_grad": "5-Star Experience",
    "services_desc": "Comprehensive border visa runs, emergency e-visas, and airport priority fast track designed for global expats and digital nomads.",
    "sc_badge_1": "🚌 Daily & Fixed Schedules",
    "sc_title_1": "Sleeper Bus & Limousine Visa Run",
    "sc_desc_1": "Smooth round-trip cross-border journey to Lao Bao (Laos), Bo Y (Laos), Moc Bai (Cambodia) and Huu Nghi (China).",
    "sc_f1_1": "<span>✓</span> 2m leather sleeper bed, privacy curtains, USB charger",
    "sc_f1_2": "<span>✓</span> Cool AC, complimentary mineral water & high-speed Wi-Fi",
    "sc_f1_3": "<span>✓</span> Dedicated border assistants guiding you step-by-step",
    "sc_btn_1": "Calculate Trip Price →",
    "sc_badge_2": "⚡ Urgent 1h – 4h",
    "sc_title_2": "Emergency 90-Day Vietnam E-Visa",
    "sc_desc_2": "Super fast e-visa issuance for travelers with expiring visas or waiting directly at the border station.",
    "sc_f2_1": "<span>✓</span> Processing speeds: 1h, 4h, 24h, 2 days or standard 5-7 days",
    "sc_f2_2": "<span>✓</span> Available for Single Entry and Multiple Entry 90 days",
    "sc_f2_3": "<span>✓</span> 100% Money-back and State fee refund guarantee if unissued",
    "sc_btn_2": "View E-Visa Rate Card →",
    "sc_badge_3": "👑 Diplomatic Priority",
    "sc_title_3": "Airport VIP Fast Track ($70 / 1.2M ₫)",
    "sc_desc_3": "Personal VIP escort at Tan Son Nhat (SGN), Noi Bai (HAN), Da Nang (DAD), Cam Ranh (CXR), and Phu Quoc (PQC).",
    "sc_f3_1": "<span>✓</span> Personal officer waiting at aircraft gate with private name board",
    "sc_f3_2": "<span>✓</span> Direct escort through diplomatic / VIP express lane",
    "sc_f3_3": "<span>✓</span> Complete clearance in 5–10 minutes, zero queueing",
    "sc_btn_3": "Fast Track Details →",
    "calc_subbadge": "⚡ EXPRESS INSTANT ESTIMATOR",
    "calc_title": "Calculate Service Price &",
    "calc_title_grad": "Book Instantly",
    "calc_desc": "Direct official rates from Vietnam Visa Pass. Select your route and speed for 100% transparent pricing.",
    "calc_lbl_city": "Select departure city:",
    "calc_lbl_service": "Choose vehicle & route:",
    "calc_lbl_evisa": "Vietnam E-Visa Processing Speed:",
    "evisa_opt_none": "No E-Visa Needed (Already have / 45-Day Visa-Free)",
    "evisa_opt_std": "Standard 90-Day E-Visa (5–7 business days) — $45 / 1.200.000 ₫",
    "evisa_opt_2d": "Urgent 90-Day E-Visa (2 business days) — $100 / 2.600.000 ₫",
    "evisa_opt_1d": "Express 90-Day E-Visa (1 day / 24 hours) — $110 / 2.850.000 ₫",
    "evisa_opt_4h": "⚡ Ultra Fast 90-Day E-Visa (3–4 Hours – Same-day Run) — $120 / 3.100.000 ₫",
    "evisa_opt_1h": "🚀 Super Urgent E-Visa (1–2 Hours Border Rush) — $180 / 4.600.000 ₫",
    "evisa_multi_chk": "Upgrade to Multiple Entry E-Visa: <strong>+$25 (~650,000 VND)</strong>",
    "calc_sum_label": "Total Estimated Package Cost:",
    "calc_terms_agree": "⚖️ Booking implies agreement with the <a href=\"#terms\" onclick=\"openTermsModal(event)\" class=\"map-link\">Customer Service Agreement</a>.",
    "calc_btn_wa": "Book via WhatsApp",
    "calc_btn_tg": "Book via Telegram",
    "guide_subbadge": "📖 BORDER CROSSING GUIDES",
    "guide_title": "Step-by-Step Border",
    "guide_title_grad": "Clearance Procedures",
    "guide_desc": "Detailed instructions and checklists from Vietnam Visa Pass specialists.",
    "tab_hanoi": "📍 Hanoi ⇄ Huu Nghi (China)",
    "tab_nhatrang_laos": "📍 Nha Trang ⇄ Bo Y (Laos)",
    "tab_nhatrang_cam": "📍 Nha Trang ⇄ Moc Bai (Cambodia)",
    "tab_danang_laos": "📍 Da Nang ⇄ Lao Bao (Laos)",
    "g_badge_popular": "Popular Route",
    "g_badge_ru_kr": "Recommended for RU / KR / BY",
    "g_badge_eu_us": "Recommended for US / UK / EU",
    "g_badge_all_nat": "Open to ALL Global Nationalities",
    "g1_title": "Visa Run Itinerary: Hanoi ⇄ Huu Nghi International Border Gate (China)",
    "g1_sub": "VIP Limousine 9-11 seats · Departure: 09:00 AM · Return same-day: 07:00 PM",
    "g1_s1_t": "Pickup in Central Hanoi:",
    "g1_s1_d": "Board the VIP Limousine at the Hanoi dispatch station. Please arrive 15-20 minutes before departure.",
    "g1_s2_t": "Arrival at Huu Nghi Terminal & Vietnam Exit:",
    "g1_s2_d": "Vehicle arrives at Xuan Cuong Station. Take electric shuttle or walk 700m to Huu Nghi gate. Present your passport to immigration officers for the Vietnam exit stamp.",
    "g_stamp_req_t": "📸 Critical Requirement:",
    "g_stamp_req_d": "Immediately take a crystal clear photo of the exit stamp page (all 4 corners visible, no glare, no fingers covering text) and send to VVP concierge chat for instant 4-hour emergency e-visa submission.",
    "g1_s3_t": "China Border Buffer Area & Rest:",
    "g1_s3_d": "Walk 800m to Chinese border checkpoint, present passport and fill entry/exit declaration cards. Rest in the duty-free lounge while VVP processes your e-visa.",
    "g1_s4_t": "Receive Approved E-Visa & Re-enter Vietnam:",
    "g1_s4_d": "VVP delivers your approved E-Visa PDF into the chat. Show your phone screen and passport at the Vietnam immigration counter to receive your fresh 90-day entry stamp.",
    "g1_s5_t": "Return Trip to Hanoi:",
    "g1_s5_d": "Shuttle transfer back to Xuan Cuong Terminal ➔ 19:00 VIP Limousine departs back to Hanoi.",
    "g_warn_t": "Important Passport Inspection Notice at Border Counters:",
    "g_warn_d": "Immigration officers manage heavy passenger flows and stamping errors can occasionally occur (e.g. wrong expiry date stamped). Please double-check your entry stamp date before walking away from the counter!",
    "g2_title": "Visa Run Itinerary: Nha Trang ⇄ Bo Y Border Gate (Laos)",
    "g2_sub": "Overnight Red Luxury Sleeper Bus · Visa-Free 45-day stamp or 90-day E-Visa",
    "g2_s1_t": "Pickup in Nha Trang:",
    "g2_s1_d": "• Point 1 (21:15): No. 4 Tran Phu (Muong Thanh)<br>• Point 2 (21:30): 40 Hon Chong, North Nha Trang<br>• Identification: Red Luxury Sleeper Coach | Wi-Fi: 19002679",
    "g2_s2_t": "Arrival at Bo Y Gate & Breakfast:",
    "g2_s2_d": "Arrival at 06:00 AM. Enjoy local breakfast and coffee. Border opening at 07:30 AM for stamping at the Laos checkpoint.",
    "g2_s3_t": "Border Procedures (Laos ⇄ Vietnam):",
    "g2_s3_d": "Exit Vietnam ➔ Enter Laos ➔ Exit Laos ➔ Re-enter Vietnam. Have 140,000 VND cash ready inside your passport (50k VN Exit, 20k Laos Entry, 20k Laos Exit, 50k VN Re-entry).",
    "g2_s4_t": "Return Journey to Nha Trang:",
    "g2_s4_d": "Board the red sleeper coach back to Nha Trang, arriving around 21:00-21:30 PM with your fresh 90-day visa.",
    "g3_title": "Visa Run Itinerary: Nha Trang ⇄ Moc Bai Border Gate (Cambodia)",
    "g3_sub": "Overnight Red Luxury Sleeper Bus (Tue, Thu, Sun) · Ideal for Western & EU Expats",
    "g3_s1_t": "Departure from Nha Trang:",
    "g3_s1_d": "Board the Red Sleeper Coach at 40 Hon Chong. Full air conditioning, charging ports and quiet sleeper cabin.",
    "g3_s2_t": "Arrival at Moc Bai & Vietnam Exit:",
    "g3_s2_d": "Gate opens at 07:30 AM. Obtain exit stamp and send stamp photo to VVP before 08:00 AM.",
    "g3_s3_t": "Cambodia Visa On Arrival & E-Visa Issuance:",
    "g3_s3_d": "Walk or motor-taxi to Cambodia post, obtain Cambodia tourist visa (~$35–$50). Rest at Wi-Fi coffee shop while VVP issues your 4h emergency e-visa. Receive visa before 12:00 PM and re-enter Vietnam.",
    "g4_title": "Visa Run Itinerary: Da Nang ⇄ Lao Bao Border Gate (Laos)",
    "g4_sub": "Red Sleeper Bus (01:45 AM) or Private 7-Seat VIP Car (03:00 AM) · Same-Day Return",
    "g4_s1_t": "Departure from Da Nang:",
    "g4_s1_d": "• <strong>Red Sleeper Bus (Tue & Sat):</strong> 01:45 AM central meeting point.<br>• <strong>Private VIP Car (Daily):</strong> 03:00 AM hotel/villa door-to-door pickup in Da Nang & Hoi An.",
    "g4_s2_t": "Lao Bao Clearance & Milestone 605 Check-in:",
    "g4_s2_d": "Arrive at Lao Bao, see the iconic Border Gate and Granite Milestone 605 (Vietnam-Laos). Exit Vietnam and cross to Laos post. With Ultra Fast 3-4h E-Visa, approval arrives in the morning for your 90-day entry stamp.",
    "g4_s3_t": "Comfortable Return to Da Nang:",
    "g4_s3_d": "Board vehicle back to Da Nang, arriving between 17:30–18:30 PM same day.",
    "fasttrack_subbadge": "⭐ VIP AIRPORT SERVICE",
    "fasttrack_title": "Airport VIP Fast Track",
    "fasttrack_title_grad": "Skip All Airport Queues",
    "fasttrack_desc": "Exclusive priority escort service at Da Nang (DAD), Cam Ranh (CXR), Noi Bai (HAN), and Tan Son Nhat (SGN) international airports.",
    "ft_lead": "After a exhausting long-haul international flight, queueing 1–3 hours in sweltering immigration lines is a nightmare. Our diplomat escort service guarantees 5-minute express entry.",
    "ftc_no_t": "❌ Without Fast Track:",
    "ftc_no_d": "• 60–180 minutes queueing in crowded halls<br>• Risk of missing connecting flights or private transfers<br>• Self-navigation of complex visa stamp counters",
    "ftc_yes_t": "✅ With Vietnam Visa Pass Fast Track:",
    "ftc_yes_d": "• Personal officer waiting at aero-bridge with private name board<br>• Escort directly through Diplomatic & Priority Lane<br>• Complete clearance in 5–10 minutes with luggage assistance",
    "ft_btn_book": "⭐ Book VIP Fast Track Now ($70 / 1.2M ₫)",
    "ft_ov_t": "👑 5-Star Diplomatic Courtesy Lane",
    "ft_ov_d": "Available at SGN, HAN, DAD, CXR & PQC",
    "schedule_subbadge": "📅 WEEKLY TIMETABLE",
    "schedule_title": "Fixed Departure",
    "schedule_title_grad": "Schedules",
    "schedule_desc": "Regular high-frequency departures with modern sleeper buses and VIP private cars.",
    "sch_d1_b": "🚌 Red Sleeper Coach",
    "sch_d1_t": "Da Nang ⇄ Lao Bao Border Gate",
    "sch_d1_d": "Every Tuesday & Saturday | Departure: 01:45 AM | Return: 18:00 PM",
    "sch_d2_b": "⭐ VIP Private 7-Seat Car",
    "sch_d2_t": "Da Nang ⇄ Lao Bao Door-to-Door",
    "sch_d2_d": "Daily Departures | 03:00 AM hotel pickup in Da Nang & Hoi An",
    "sch_n1_b": "🚍 Red Sleeper Coach",
    "sch_n1_t": "Nha Trang ⇄ Bo Y Gate (Laos)",
    "sch_n1_d": "Daily Overnight | 21:15 (No. 4 Tran Phu) & 21:30 (40 Hon Chong)",
    "sch_n2_b": "🚍 Red Sleeper Coach",
    "sch_n2_t": "Nha Trang ⇄ Moc Bai (Cambodia)",
    "sch_n2_d": "Tue, Thu, Sun Nights | Departure: 21:30 PM (40 Hon Chong)",
    "sch_h1_b": "👑 VIP Limousine 9-11 Seats",
    "sch_h1_t": "Hanoi ⇄ Huu Nghi Gate (China)",
    "sch_h1_d": "Daily Departures | 09:00 AM dispatch pickup | Return: 19:00 PM",
    "pricing_subbadge": "💎 OFFICIAL RATE CARD",
    "pricing_title": "Transparent & Competitive",
    "pricing_title_grad": "Pricing",
    "pricing_desc": "No hidden charges. 100% money-back guarantee and full government fee refund if unperformed.",
    "th_service": "Service Category",
    "th_route": "Route & Specification",
    "th_speed": "Speed / Frequency",
    "th_price": "Official Price",
    "rgb_title": "100% Upfront Transparent Pricing & Full Refund Guarantee",
    "rgb_desc": "• <strong>Zero Hidden Fees:</strong> All transportation, border handling, and visa consultation fees are fully disclosed before departure.<br>• <strong>100% Service Refund:</strong> Complete 100% refund of consultation and processing fee if visa application is refused due to service error.<br>• <strong>Full Government State Fee Refund:</strong> 100% refund of the official government state fee if the service cannot be executed or is not performed.",
    "rev_subbadge": "⭐ VERIFIED REVIEWS",
    "rev_title": "Over 15,000+ Happy",
    "rev_title_grad": "Expats & Travelers",
    "rev_desc": "5.0★ rating across foreign communities in Da Nang, Nha Trang, Ho Chi Minh City & Hanoi.",
    "terms_subbadge": "⚖️ LEGAL AGREEMENT",
    "terms_title": "Customer Terms of",
    "terms_title_grad": "Service Agreement",
    "terms_desc": "Official service agreement and refund policy compliant with Vietnamese law.",
    "tm_h3": "CONSULTING AND VISA APPLICATION SERVICE CONTRACT",
    "tm_h3_sub": "Applicable to Individual Clients (Khách Lẻ)",
    "tm_doc_badge": "Official Binding Agreement",
    "tm_preamble": "<strong>Legal Grounds & Governing Laws:</strong><br>• Pursuant to the Civil Code No. 91/2015/QH13 dated November 24, 2015;<br>• Pursuant to the Commercial Law No. 36/2005/QH11 dated June 14, 2005;<br>• Pursuant to the Law on Entry, Exit, Transit, and Residence of Foreigners in Vietnam No. 47/2014/QH13;<br>• Pursuant to Circular No. 28/2026/TT-BTC dated March 27, 2026 on immigration fees.",
    "tm_a1_t": "ARTICLE 1: SCOPE OF SERVICES",
    "tm_a1_sub": "Delegation & Application Handling",
    "tm_a1_c1": "<strong>1.1 Scope of Delegation:</strong> The Customer (Party A) delegates and Vietnam Visa Pass (Party B) agrees to perform consulting, document preparation, and payment of government visa fees for electronic visas (E-Visa) and Visa Run cross-border services.",
    "tm_a1_c2": "<strong>1.2 Detailed Scope of Work:</strong> Consult on immigration regulations; review applicant documents; perform online portal filing; track processing status with the Immigration Department; and promptly hand over approved visa results.",
    "tm_a2_t": "ARTICLE 2: SERVICE VALUE, GOVERNMENT FEES & VAT INVOICE",
    "tm_a2_sub": "Itemized Fees & Taxation",
    "tm_a2_c1": "<strong>2.1 Fee Structure:</strong> Total cost is itemized into: (1) Consultation & dossier processing service fee; and (2) State fee for electronic visa registration ($25 USD collected and paid on behalf under Circular 28/2026/TT-BTC with official receipt).",
    "tm_a2_c2": "<strong>2.2 Value Added Tax (VAT):</strong> Service fees are inclusive of VAT. Party B issues legal electronic VAT invoices within 03 working days upon completion or full payment.",
    "tm_a34_t": "ARTICLE 3 & 4: RIGHTS, OBLIGATIONS & 100% DATA PRIVACY",
    "tm_a34_sub": "Client Responsibilities & Confidentiality",
    "tm_a34_c1": "<strong>3.1 Client Obligations:</strong> Provide truthful, accurate passport details and documents; be solely liable for document authenticity; be on time for departures and coordinate biometrics if requested.",
    "tm_a34_c2": "<strong>4.1 Privacy Guarantee:</strong> Party B safely stores documents and maintains strict 100% confidentiality of personal information, never disclosing data to third parties except state immigration authorities.",
    "tm_a5_t": "ARTICLE 5: SERVICE RESULTS & 100% REFUND GUARANTEE",
    "tm_a5_sub": "Money-Back & State Fee Refund Policy",
    "tm_a5_c1": "<strong>5.1 Sovereign Authority:</strong> Visa issuance authority belongs solely to the Immigration Department - Ministry of Public Security of Vietnam.",
    "tm_a5_c2": "<strong>5.2 100% Refund Policy on Objective Rejection / Non-Performance:</strong> If an application is refused due to service error or objective reasons without client fraud, Party B refunds <strong>100% of the Service Fee</strong> within 05 working days. If the service cannot be executed or is unperformed, the <strong>full Government State Fee is also 100% refunded</strong>.",
    "tm_a5_c3": "<strong>5.3 Cancellation & Fraud:</strong> Unilateral cancellation by the client after submission is non-refundable. Providing forged documents will cause immediate termination with zero refund and full legal liability.",
    "tm_a678_t": "ARTICLE 6, 7 & 8: FORCE MAJEURE, DISPUTES & ELECTRONIC CONSENT",
    "tm_a678_sub": "Jurisdiction & Online Agreement Validity",
    "tm_a678_c1": "<strong>6.1 Force Majeure:</strong> Natural disasters, epidemics, war, border closures or sudden government policy shifts exempt liability.",
    "tm_a678_c2": "<strong>7.1 Dispute Resolution:</strong> Resolved via amicable negotiation or referred to the competent People's Court in Nha Trang City, Khanh Hoa Province, Vietnam.",
    "tm_a678_c3": "<strong>8.1 Electronic Consent:</strong> Clicking Book, submitting inquiry forms, or paying for services on the website/WhatsApp constitutes full, legally binding acceptance of this agreement.",
    "tm_banner_t": "Legal Guarantee & Mutual Agreement",
    "tm_banner_d": "By booking or using Vietnam Visa Pass services, you and our company mutually agree to comply with all published service terms above.",
    "faq_subbadge": "❓ FREQUENTLY ASKED QUESTIONS",
    "faq_title": "Visa Run & Immigration",
    "faq_title_grad": "Questions Answered",
    "faq_desc": "Everything you need to know before taking your visa run with Vietnam Visa Pass.",
    "faq_q1": "1. Which border gate should my nationality choose (Laos vs. Cambodia)?",
    "faq_a1": "• <strong>Nha Trang ⇄ Bo Y Border Gate (Laos):</strong> Recommended for citizens of <strong>Russia, South Korea, Belarus, Malaysia, Czech Republic...</strong> who enjoy direct visa-free entry into Laos.<br>• <strong>Nha Trang ⇄ Moc Bai (Cambodia):</strong> Recommended for <strong>USA, UK, Australia, Ukraine, Uzbekistan, Kyrgyzstan, Brazil, EU...</strong> due to straightforward Cambodia visa-on-arrival procedures.<br>• <strong>Da Nang ⇄ Lao Bao (Laos):</strong> Lao Bao is an International Border Gate and <strong>DOES NOT restrict by nationality</strong> — it accepts and clears <strong>ALL global citizens</strong>.",
    "faq_q2": "2. How much cash should I prepare for border stamping fees?",
    "faq_a2": "• <strong>Laos Borders (Bo Y / Lao Bao):</strong> Prepare <strong>140,000 VND</strong> (VN Exit: 50k, Laos Entry: 20k, Laos Exit: 20k, VN Re-entry: 50k). Keep cash ready inside your passport.<br>• <strong>Cambodia Border (Moc Bai):</strong> Prepare 50k-150k VN border fee, 100k-150k motor shuttle to Cambodia counter, and ~$35 – $50 USD for Cambodia visa.",
    "faq_q3": "3. Are there surcharges for restrictive nationalities?",
    "faq_a3": "Under Immigration Department regulations, special nationalities require dossier appraisal: <strong>+850,000 VND</strong> for citizens of <em>Egypt, Algeria, Morocco, Tunisia, Sri Lanka, Mauritius</em>; and <strong>+650,000 VND</strong> for citizens of <em>Turkey</em>.",
    "faq_q4": "4. How should I take photos of the exit stamp for urgent E-Visa?",
    "faq_a4": "Immediately upon receiving the exit stamp, photograph your passport first page: <strong>capture all 4 corners, ensure high clarity, avoid lamp reflection/glare, and never cover text with fingers</strong>. Send photo to VVP chat for immediate e-visa submission.",
    "faq_q5": "5. How does the 100% Money-Back & Government Fee Refund Guarantee work?",
    "faq_a5": "We guarantee a <strong>100% refund</strong> of our service fee if your e-visa is rejected due to service error. In addition, if the service cannot be performed or executed, the <strong>full Government State Fee is also 100% refunded</strong> under Article 5 of our Service Agreement.",
    "contact_subbadge": "⚡ 24/7 DIRECT SUPPORT",
    "contact_title": "Book & Request",
    "contact_title_grad": "Instant Quote",
    "contact_desc": "Fill in the quick form below or message our 24/7 concierge directly on WhatsApp.",
    "c_hq_t": "Executive Operations HQ:",
    "c_pick_t": "Nha Trang Pickup Points:",
    "c_wa_t": "Hotline / WhatsApp 24/7:",
    "c_tg_t": "Official Telegram Channel:",
    "f_title": "Quick VIP Consultation & Booking Form",
    "form_name_lbl": "Full Name *",
    "form_phone_lbl": "Phone / WhatsApp *",
    "form_nat_lbl": "Nationality *",
    "form_city_lbl": "Current City",
    "form_service_lbl": "Interested Service *",
    "form_notes_lbl": "Additional Notes (Visa expiry date, departure date)",
    "form_agree_lbl": "I have read, understood and agree to the <a href=\"#terms\" onclick=\"openTermsModal(event)\" class=\"map-link\">Customer Service Agreement</a> of Vietnam Visa Pass.",
    "form_submit_btn": "📨 Send Request & Agree via WhatsApp",
    "form_note": "🔒 Your personal information is strictly protected under Article 4 of the Service Agreement.",
    "pm_subbadge": "💳 SECURE TRANSACTION",
    "payment_title": "Official Corporate Payment Account",
    "payment_desc": "Direct corporate bank transfer with instant payment confirmation.",
    "pm_acc_num": "Account Number:",
    "pm_holder": "Account Holder:",
    "pm_branch": "Branch:",
    "pm_methods_t": "Accepted Payment Methods",
    "pm_m1": "<span>✓</span> 24/7 Instant Napas 247 Bank Transfer",
    "pm_m2": "<span>✓</span> International Wire (SWIFT / IBAN)",
    "pm_m3": "<span>✓</span> International Visa / Mastercard / Wise",
    "pm_m4": "<span>✓</span> Cash payment at dispatch meeting points",
    "ft_desc": "Vietnam Visa Pass (VVP) — Vietnam's #1 Express Visa Run Network & Emergency 1-Hour E-Visa Concierge.",
    "ft_col_routes": "Major Visa Run Routes",
    "ft_col_legal": "Legal & Payment",
    "ft_col_support": "24/7 Concierge Support",
    "ftc_no_1": "• 60–180 minutes queueing in crowded halls",
    "ftc_no_2": "• Risk of missing connecting flights or private transfers",
    "ftc_no_3": "• Self-navigation of complex visa stamp counters",
    "ftc_yes_1": "• Personal officer waiting at aero-bridge with private name board",
    "ftc_yes_2": "• Escort directly through Diplomatic & Priority Lane",
    "ftc_yes_3": "• Complete clearance in 5–10 minutes with luggage assistance",
    "nav_reviews": "Reviews",
    "sch_th_days": "Operating Days",
    "sch_th_dep": "Departure Time & Point",
    "sch_th_dur": "Estimated Return",
    "sch_th_fare": "Package Fare",
    "sch_th_route": "Route & Gate",
    "sch_th_status": "Status",
    "sch_th_vehicle": "Vehicle Category",
    "sch_th_visa": "E-Visa Delivery"
  },
  "ru": {
    "topbar_badge": "⚡ <strong>VIETNAM VISA PASS</strong> — Скоростной визаран и срочная E-Visa за 1 час во Вьетнаме!",
    "topbar_hotline": "📞 Горячая линия / WhatsApp: ",
    "nav_services": "Услуги",
    "nav_calculator": "Калькулятор",
    "nav_guide": "Гайды по КПП",
    "nav_fasttrack": "VIP Fast Track",
    "nav_schedule": "Расписание",
    "nav_pricing": "Тарифы",
    "nav_terms": "Договор оферты",
    "nav_payment": "Оплата",
    "nav_contact": "Заказ 24/7",
    "hero_tag": "⚡ VIETNAM VISA PASS",
    "hero_badge_guarantee": "🛡️ 100% Гарантия возврата средств и госпошлины",
    "hero_badge_transparency": "💎 100% Прозрачные цены без скрытых комиссий",
    "hero_title_1": "Срочный визаран и продление E-Visa",
    "hero_title_2": "За 1 час · Под ключ · 100% Гарантия",
    "hero_desc": "Премиальный <strong>автобусный визаран (комфортабельные слипбасы и VIP авто)</strong> из <strong>Дананга, Нячанга, Ханоя</strong> в Лаос (Лаобао, Бо-И), Камбоджу (Мокбай) и Китай (Хыу Нги). <strong>Срочная E-Visa за 1–4 часа</strong> и <strong>VIP Fast Track $70</strong>.",
    "hero_cta_calc": "⚡ Рассчитать стоимость",
    "hero_cta_wa": "Менеджер в WhatsApp 24/7",
    "hero_cta_guide": "📖 Пошаговые инструкции",
    "stat_clients": "Довольных экспатов и туристов",
    "stat_speed_num": "1 Час",
    "stat_speed": "Срочная виза за 1 час",
    "stat_success": "Успешных прохождений границы",
    "stat_refund": "Гарантия возврата средств",
    "mq_1": "⚡ VIETNAM VISA PASS — Официальный сервис визарана и срочных виз",
    "mq_2": "🚀 Срочная электронная виза 90 дней за 1–4 часа прямо на границе",
    "mq_3": "🚌 Регулярные рейсы из Дананга, Нячанга, Ханоя и Хошимина",
    "mq_4": "👑 VIP Fast Track в аэропортах Таншоннят, Нойбай, Дананг, Камрань",
    "mq_5": "💯 100% Прозрачные цены и гарантия возврата денег при отказе",
    "services_subbadge": "⚡ ОСНОВНЫЕ УСЛУГИ VIP",
    "services_title": "Скорость, надежность и",
    "services_title_grad": "Сервис 5 звезд",
    "services_desc": "Комплексный визаран под ключ, сверхсрочные электронные визы на границе и проход аэропорта без очередей.",
    "sc_badge_1": "🚌 Ежедневно и по расписанию",
    "sc_title_1": "Визаран на слипбасах и VIP авто",
    "sc_desc_1": "Комфортная поездка туда-обратно до КПП Лаобао (Лаос), Бо-И (Лаос), Мокбай (Камбоджа) и Хыу Нги (Китай).",
    "sc_f1_1": "<span>✓</span> Спальное место 2м из кожи, шторки, зарядка USB",
    "sc_f1_2": "<span>✓</span> Кондиционер, питьевая вода и скоростной Wi-Fi в пути",
    "sc_f1_3": "<span>✓</span> Опытный сопровождающий для прохождения всех постов",
    "sc_btn_1": "Рассчитать стоимость поездки →",
    "sc_badge_2": "⚡ Срочно 1ч – 4ч",
    "sc_title_2": "Срочная электронная виза E-Visa 90 дней",
    "sc_desc_2": "Сверхбыстрое оформление для тех, у кого заканчивается виза или кто уже находится на границе.",
    "sc_f2_1": "<span>✓</span> Скорость: 1 час, 4 часа, 24 часа, 2 дня или 5-7 дней",
    "sc_f2_2": "<span>✓</span> Доступны однократный (Single) и многократный (Multi) въезд",
    "sc_f2_3": "<span>✓</span> 100% Возврат сервисного сбора и госпошлины при невыполнении",
    "sc_btn_2": "Прайс-лист на визы →",
    "sc_badge_3": "👑 Дипломатический коридор",
    "sc_title_3": "VIP Fast Track в аэропортах ($70 / 1.2M ₫)",
    "sc_desc_3": "Персональное VIP сопровождение в аэропортах Хошимина (SGN), Ханоя (HAN), Дананга (DAD), Камрани (CXR).",
    "sc_f3_1": "<span>✓</span> Встреча у трапа самолета с именной табличкой",
    "sc_f3_2": "<span>✓</span> Проход без очередей через дипломатический коридор",
    "sc_f3_3": "<span>✓</span> Полное прохождение контроля всего за 5–10 минут",
    "sc_btn_3": "Подробнее о Fast Track →",
    "calc_subbadge": "⚡ ОНЛАЙН КАЛЬКУЛЯТОР",
    "calc_title": "Рассчитайте стоимость и",
    "calc_title_grad": "Забронируйте поездку",
    "calc_desc": "Официальные тарифы Vietnam Visa Pass. Выберите город, маршрут и скорость оформления без скрытых комиссий.",
    "calc_lbl_city": "Выберите город отправления:",
    "calc_lbl_service": "Выберите транспорт и маршрут:",
    "calc_lbl_evisa": "Срочность оформления электронной визы (E-Visa):",
    "evisa_opt_none": "Виза не требуется (уже есть / 45 дней штамп)",
    "evisa_opt_std": "Стандартная E-Visa 90 дней (5–7 раб. дней) — $45 / 1.200.000 ₫",
    "evisa_opt_2d": "Срочная E-Visa (2 рабочих дня) — $100 / 2.600.000 ₫",
    "evisa_opt_1d": "Экспресс E-Visa (1 день / 24 часа) — $110 / 2.850.000 ₫",
    "evisa_opt_4h": "⚡ Ультра-фаст E-Visa (3–4 часа – в день поездки) — $120 / 3.100.000 ₫",
    "evisa_opt_1h": "🚀 Супер-срочная E-Visa (1–2 часа на границе) — $180 / 4.600.000 ₫",
    "evisa_multi_chk": "Многократный въезд (Multiple Entry): <strong>+$25 (~650.000 ₫)</strong>",
    "calc_sum_label": "Итоговая стоимость пакета:",
    "calc_terms_agree": "⚖️ Бронирование означает согласие с <a href=\"#terms\" onclick=\"openTermsModal(event)\" class=\"map-link\">Договором об оказании услуг</a>.",
    "calc_btn_wa": "Заказать в WhatsApp",
    "calc_btn_tg": "Заказать в Telegram",
    "guide_subbadge": "📖 ИНСТРУКЦИИ ПО КПП",
    "guide_title": "Пошаговый регламент",
    "guide_title_grad": "Прохождения границы",
    "guide_desc": "Подробные чек-листы и правила от ведущих визовых экспертов Vietnam Visa Pass.",
    "tab_hanoi": "📍 Ханой ⇄ Хыу Нги (Китай)",
    "tab_nhatrang_laos": "📍 Нячанг ⇄ Бо-И (Лаос)",
    "tab_nhatrang_cam": "📍 Нячанг ⇄ Мокбай (Камбоджа)",
    "tab_danang_laos": "📍 Дананг ⇄ Лаобао (Лаос)",
    "g_badge_popular": "Популярный маршрут",
    "g_badge_ru_kr": "Рекомендовано для РФ / РБ / Кореи",
    "g_badge_eu_us": "Рекомендовано для США / ЕС / UK",
    "g_badge_all_nat": "Открыто для ВСЕХ граждан мира",
    "g1_title": "Маршрут визарана: Ханой ⇄ Международный КПП Хыу Нги (Китай)",
    "g1_sub": "VIP Лимузин 9-11 мест · Отправление: 09:00 · Возвращение в тот же день: 19:00",
    "g1_s1_t": "Посадка в центре Ханоя:",
    "g1_s1_d": "Посадка в VIP лимузин на центральной станции. Просьба прибыть за 15-20 минут до выезда.",
    "g1_s2_t": "Прибытие на КПП Хыу Нги и выезд из Вьетнама:",
    "g1_s2_d": "Прибытие на станцию Суан Кыонг. Электрокар или пешком 700м до КПП. Пройдите пограничный контроль для получения штампа выезда.",
    "g_stamp_req_t": "📸 Важнейшее требование:",
    "g_stamp_req_d": "Сразу после получения штампа сфотографируйте страницу паспорта (четко видны 4 угла, без бликов и пальцев) и отправьте в чат VVP для подачи срочной визы на 4 часа.",
    "g1_s3_t": "Нейтральная зона и отдых на китайской стороне:",
    "g1_s3_d": "Пройдите 800м до китайского поста, заполните миграционные карты. Отдыхайте в зале с кондиционером, пока VVP готовит визу.",
    "g1_s4_t": "Получение E-Visa и въезд во Вьетнам:",
    "g1_s4_d": "VVP присылает готовую визу в PDF. Покажите экран телефона и паспорт на вьетнамском посту и получите новый штамп на 90 дней.",
    "g1_s5_t": "Обратная дорога в Ханой:",
    "g1_s5_d": "Трансфер на станцию ➔ 19:00 отправление VIP лимузина обратно в Ханой.",
    "g_warn_t": "Важное предупреждение при проверке штампа:",
    "g_warn_d": "Пограничники работают при большом потоке людей и могут случайно поставить не ту дату. Обязательно проверьте дату въездного штампа перед уходом от стойки!",
    "g2_title": "Маршрут визарана: Нячанг ⇄ КПП Бо-И (Лаос)",
    "g2_sub": "Ночной красный слипбас люкс · Безвизовый штамп 45 дней или E-Visa 90 дней",
    "g2_s1_t": "Посадка в Нячанге:",
    "g2_s1_d": "• Точка 1 (21:15): No. 4 Tran Phu (Muong Thanh)<br>• Точка 2 (21:30): 40 Hon Chong, север Нячанга<br>• Опознавательный знак: Красный слипбас | Wi-Fi: 19002679",
    "g2_s2_t": "Прибытие на границу Бо-И и завтрак:",
    "g2_s2_d": "Прибытие в 06:00 утра. Завтрак и кофе. В 07:30 открытие границы и прохождение контроля на лаосской стороне.",
    "g2_s3_t": "Пограничные процедуры (Лаос ⇄ Вьетнам):",
    "g2_s3_d": "Выезд из ВН ➔ Вход в Лаос ➔ Выход из Лаоса ➔ Вход в ВН. Приготовьте наличными 140.000 ₫ (50k выезд ВН, 20k вход Лаос, 20k выход Лаос, 50k вход ВН).",
    "g2_s4_t": "Возвращение в Нячанг:",
    "g2_s4_d": "Посадка в красный слипбас обратно в Нячанг, прибытие около 21:00-21:30 с готовой новой визой.",
    "g3_title": "Маршрут визарана: Нячанг ⇄ КПП Мокбай (Камбоджа)",
    "g3_sub": "Ночной красный слипбас (Вт, Чт, Вс) · Идеально для граждан ЕС, США и Великобритании",
    "g3_s1_t": "Выезд из Нячанга:",
    "g3_s1_d": "Посадка в красный слипбас на 40 Hon Chong. Полный климат-контроль, индивидуальные шторки и розетки.",
    "g3_s2_t": "Прибытие в Мокбай и выезд из Вьетнама:",
    "g3_s2_d": "КПП открывается в 07:30. Получите штамп выезда и отправьте фото в чат VVP до 08:00 утра.",
    "g3_s3_t": "Виза Камбоджи по прибытии и получение E-Visa:",
    "g3_s3_d": "Пройдите на камбоджийский пост, оформите визу (~$35–$50). Отдыхайте в кафе с Wi-Fi, пока VVP выпускает E-Visa за 4 часа. Въезд во Вьетнам до 12:00.",
    "g4_title": "Маршрут визарана: Дананг ⇄ КПП Лаобао (Лаос)",
    "g4_sub": "Красный слипбас (01:45) или VIP авто 7 мест (03:00) · Возвращение в тот же день",
    "g4_s1_t": "Выезд из Дананга:",
    "g4_s1_d": "• <strong>Красный слипбас (Вт и Сб):</strong> 01:45 сбор в центре.<br>• <strong>VIP авто (Ежедневно):</strong> 03:00 подача к отелю/вилле в Дананге и Хойане.",
    "g4_s2_t": "КПП Лаобао и фото у Пограничного столба 605:",
    "g4_s2_d": "Прибытие в Лаобао, осмотр знаменитого КПП и гранитного столба 605 (Вьетнам-Лаос). С визой Ultra Fast 3-4ч одобрение приходит утром для штампа на 90 дней.",
    "g4_s3_t": "Комфортное возвращение в Дананг:",
    "g4_s3_d": "Посадка в авто обратно в Дананг, прибытие между 17:30–18:30 в тот же день.",
    "fasttrack_subbadge": "⭐ VIP СЕРВИС В АЭРОПОРТУ",
    "fasttrack_title": "VIP Fast Track в аэропортах",
    "fasttrack_title_grad": "Проход без очередей",
    "fasttrack_desc": "Персональное сопровождение через дипломатический / VIP коридор в аэропортах Дананг (DAD), Камрань (CXR), Нойбай (HAN), Таншоннят (SGN).",
    "ft_lead": "После долгого перелета стоять 1-3 часа в духоте паспортного контроля — настоящее испытание. Наш VIP сервис гарантирует проход за 5 минут.",
    "ftc_no_t": "❌ Без Fast Track:",
    "ftc_no_d": "• 60–180 минут ожидания в плотной толпе<br>• Риск опоздать на стыковочный рейс или трансфер<br>• Самостоятельный поиск стоек оформления виз",
    "ftc_yes_t": "✅ С сервисом Vietnam Visa Pass Fast Track:",
    "ftc_yes_d": "• Личный представитель у рукава самолета с табличкой<br>• Проводка через дипломатический VIP коридор<br>• Полное прохождение за 5–10 минут и помощь с багажом",
    "ft_btn_book": "⭐ Заказать VIP Fast Track ($70 / 1.2M ₫)",
    "ft_ov_t": "👑 Дипломатический коридор 5 звезд",
    "ft_ov_d": "Доступно в SGN, HAN, DAD, CXR и PQC",
    "schedule_subbadge": "📅 РАСПИСАНИЕ РЕЙСОВ",
    "schedule_title": "Регулярный график",
    "schedule_title_grad": "Отправлений",
    "schedule_desc": "Ежедневные и еженедельные отправления на красных слипбасах и VIP автомобилях.",
    "sch_d1_b": "🚌 Красный слипбас",
    "sch_d1_t": "Дананг ⇄ КПП Лаобао",
    "sch_d1_d": "Вторник и Суббота | Выезд: 01:45 | Возвращение: 18:00",
    "sch_d2_b": "⭐ VIP авто 7 мест",
    "sch_d2_t": "Дананг ⇄ Лаобао от двери до двери",
    "sch_d2_d": "Ежедневно | 03:00 утра трансфер от отеля в Дананге и Хойане",
    "sch_n1_b": "🚍 Красный слипбас",
    "sch_n1_t": "Нячанг ⇄ КПП Бо-И (Лаос)",
    "sch_n1_d": "Ежедневно в ночь | 21:15 (No. 4 Tran Phu) и 21:30 (40 Hon Chong)",
    "sch_n2_b": "🚍 Красный слипбас",
    "sch_n2_t": "Нячанг ⇄ Мокбай (Камбоджа)",
    "sch_n2_d": "Вт, Чт, Вс в ночь | Отправление: 21:30 (40 Hon Chong)",
    "sch_h1_b": "👑 VIP Лимузин 9-11 мест",
    "sch_h1_t": "Ханой ⇄ КПП Хыу Нги (Китай)",
    "sch_h1_d": "Ежедневно | 09:00 утра выезд | Возвращение: 19:00",
    "pricing_subbadge": "💎 ОФИЦИАЛЬНЫЙ ПРАЙС-ЛИСТ",
    "pricing_title": "Прозрачные и честные",
    "pricing_title_grad": "Тарифы",
    "pricing_desc": "Без скрытых доплат. 100% гарантия возврата денег и госпошлины при невыполнении.",
    "th_service": "Категория услуги",
    "th_route": "Маршрут и комплектация",
    "th_speed": "Сроки / Частота",
    "th_price": "Официальная цена",
    "rgb_title": "100% Прозрачные цены и полная гарантия возврата",
    "rgb_desc": "• <strong>Никаких скрытых комиссий:</strong> Все транспортные и визовые расходы полностью озвучиваются до начала поездки.<br>• <strong>100% Возврат сервисного сбора:</strong> Полный возврат денег за услуги при отказе по вине сервиса.<br>• <strong>Полный возврат государственной пошлины:</strong> 100% возврат официальной госпошлины, если услуга не может быть оказана.",
    "rev_subbadge": "⭐ ОТЗЫВЫ КЛИЕНТОВ",
    "rev_title": "Более 15,000+ довольных",
    "rev_title_grad": "Экспатов и туристов",
    "rev_desc": "Рейтинг 5.0★ в сообществах экспатов Дананга, Нячанга, Сайгона и Ханоя.",
    "terms_subbadge": "⚖️ ЮРИДИЧЕСКИЙ ДОГОВОР",
    "terms_title": "Договор и условия",
    "terms_title_grad": "Предоставления услуг",
    "terms_desc": "Официальный договор публичной оферты и регламент 100% возврата средств.",
    "tm_h3": "ДОГОВОР НА ОКАЗАНИЕ КОНСУЛЬТАЦИОННЫХ И ВИЗОВЫХ УСЛУГ",
    "tm_h3_sub": "Публичная оферта для физических лиц (Khách Lẻ)",
    "tm_doc_badge": "Официальный публичный договор",
    "tm_preamble": "<strong>Правовые основания и законодательство:</strong><br>• Гражданский кодекс СРВ № 91/2015/QH13 от 24.11.2015 г.;<br>• Закон о торговле СРВ № 36/2005/QH11 от 14.06.2005 г.;<br>• Закон о въезде, выезде и пребывании иностранцев во Вьетнаме № 47/2014/QH13;<br>• Циркуляр Министерства финансов СРВ № 28/2026/TT-BTC о госпошлинах.",
    "tm_a1_t": "СТАТЬЯ 1: ПРЕДМЕТ И ОБЪЕМ УСЛУГ",
    "tm_a1_sub": "Полномочия и оформление документов",
    "tm_a1_c1": "<strong>1.1 Полномочия:</strong> Заказчик (Сторона А) поручает, а Vietnam Visa Pass (Сторона Б) принимает на себя обязательства по подготовке документов, подаче и оплате госпошлин для оформления электронных виз (E-Visa) и организации поездок визаран.",
    "tm_a1_c2": "<strong>1.2 Объем работ:</strong> Консультации по миграционному законодательству; проверка документов; онлайн-подача на госпортале; отслеживание статуса и своевременная выдача готовых виз клиенту.",
    "tm_a2_t": "СТАТЬЯ 2: СТОИМОСТЬ УСЛУГ, ГОСПОШЛИНА И НАЛОГИ",
    "tm_a2_sub": "Детализация платежей и счета-фактуры",
    "tm_a2_c1": "<strong>2.1 Структура стоимости:</strong> Итоговая сумма включает: (1) Сервисный сбор за оформление и консультации; и (2) Государственную пошлину ($25 USD, оплачиваемую в госбюджет по Циркуляру 28/2026/TT-BTC с предоставлением чека).",
    "tm_a2_c2": "<strong>2.2 Налоги и отчетность:</strong> Сервисный сбор включает НДС (VAT). По запросу Сторона Б выставляет официальный электронный счет-фактуру в течение 03 рабочих дней.",
    "tm_a34_t": "СТАТЬЯ 3 И 4: ПРАВА, ОБЯЗАННОСТИ И 100% КОНФИДЕНЦИАЛЬНОСТЬ",
    "tm_a34_sub": "Ответственность клиента и защита данных",
    "tm_a34_c1": "<strong>3.1 Обязанности Заказчика:</strong> Предоставить достоверные паспортные данные; нести ответственность за подлинность документов; своевременно прибыть на посадку.",
    "tm_a34_c2": "<strong>4.1 Защита данных:</strong> Сторона Б гарантирует 100% строгую конфиденциальность личных данных Заказчика и не передает их третьим лицам, кроме миграционных органов.",
    "tm_a5_t": "СТАТЬЯ 5: РЕЗУЛЬТАТЫ УСЛУГ И 100% ГАРАНТИЯ ВОЗВРАТА",
    "tm_a5_sub": "Регламент возврата сервисного сбора и госпошлины",
    "tm_a5_c1": "<strong>5.1 Компетенция государства:</strong> Решение о выдаче визы принимает Департамент иммиграции Министерства общественной безопасности Вьетнама.",
    "tm_a5_c2": "<strong>5.2 100% Возврат средств:</strong> При отказе в визе по вине сервиса или объективным причинам Сторона Б возвращает <strong>100% Сервисного сбора</strong> в течение 5 рабочих дней. При невозможности оказания услуги <strong>полная Государственная пошлина также возвращается на 100%</strong>.",
    "tm_a5_c3": "<strong>5.3 Отказ клиента и подделки:</strong> При односторонней отмене после подачи сбор не возвращается. Предоставление поддельных документов влечет расторжение договора без возврата средств.",
    "tm_a678_t": "СТАТЬЯ 6, 7 И 8: ФОРС-МАЖОР, СПОРЫ И ЭЛЕКТРОННЫЙ ДОГОВОР",
    "tm_a678_sub": "Юрисдикция и юридическая сила оферты",
    "tm_a678_c1": "<strong>6.1 Форс-мажор:</strong> Стихийные бедствия, эпидемии, закрытие границ и резкие изменения законодательства освобождают от ответственности.",
    "tm_a678_c2": "<strong>7.1 Споры:</strong> Разрешаются путем переговоров или в Народном суде г. Нячанг, провинция Кханьхоа, Вьетнам.",
    "tm_a678_c3": "<strong>8.1 Электронное согласие:</strong> Нажатие кнопки заказа или отправка формы через сайт/WhatsApp приравнивается к подписанию официального бумажного договора.",
    "tm_banner_t": "Юридическая гарантия и взаимное согласие",
    "tm_banner_d": "Оформляя поездку в Vietnam Visa Pass, вы и наша компания взаимно соглашаетесь соблюдать все опубликованные выше условия договора.",
    "faq_subbadge": "❓ ЧАСТЫЕ ВОПРОСЫ",
    "faq_title": "Ответы на вопросы",
    "faq_title_grad": "О визах и границе",
    "faq_desc": "Вся необходимая информация перед отправлением на визаран с Vietnam Visa Pass.",
    "faq_q1": "1. Какую границу выбрать для моего гражданства (Лаос или Камбоджа)?",
    "faq_a1": "• <strong>Нячанг ⇄ КПП Бо-И (Лаос):</strong> Рекомендовано для граждан <strong>РФ, Беларуси, Южной Кореи, Малайзии...</strong>, имеющих право на прямой безвизовый въезд в Лаос.<br>• <strong>Нячанг ⇄ Мокбай (Камбоджа):</strong> Рекомендовано для граждан <strong>США, Великобритании, ЕС, Украины, Казахстана, Узбекистана...</strong> благодаря простому оформлению камбоджийской визы по прибытии.<br>• <strong>Дананг ⇄ КПП Лаобао (Лаос):</strong> Международный КПП Лаобао <strong>НЕ имеет ограничений по гражданству</strong> и принимает <strong>граждан ВСЕХ стран мира</strong>.",
    "faq_q2": "2. Сколько наличных денег иметь с собой на границе?",
    "faq_a2": "• <strong>Границы Лаоса (Бо-И / Лаобао):</strong> Приготовьте ровно <strong>140.000 ₫</strong> (Штамп выезда ВН: 50k, Вход Лаос: 20k, Выход Лаос: 20k, Вход ВН: 50k). Вложите деньги прямо в паспорт.<br>• <strong>Граница Камбоджи (Мокбай):</strong> Приготовьте 50k-150k сбор на вьетнамском посту, 100k-150k мото-трансфер и ~$35 – $50 USD за визу Камбоджи.",
    "faq_q3": "3. Есть ли доплаты для сложных гражданств (Restrictive Nationalities)?",
    "faq_a3": "По регламенту миграционной службы за углубленную проверку взимается доплата: <strong>+850.000 ₫</strong> для граждан <em>Египта, Алжира, Марокко, Туниса, Шри-Ланки</em>; и <strong>+650.000 ₫</strong> для граждан <em>Турции</em>.",
    "faq_q4": "4. Как правильно сфотографировать штамп выезда для срочной визы?",
    "faq_a4": "Сразу после получения штампа выезда сфотографируйте главную страницу паспорта: <strong>в кадре должны быть все 4 угла, без бликов ламп и без пальцев, закрывающих текст</strong>. Сразу отправьте фото в чат VVP.",
    "faq_q5": "5. Как действует 100% гарантия возврата денег и госпошлины?",
    "faq_a5": "Мы гарантируем <strong>100% возврат</strong> сервисного сбора при отказе в визе по вине сервиса. Если услуга не может быть оказана, <strong>полная Государственная пошлина также возвращается на 100%</strong> в соответствии со статьей 5 Договора.",
    "contact_subbadge": "⚡ ПРЯМАЯ СВЯЗЬ 24/7",
    "contact_title": "Забронировать поездку &",
    "contact_title_grad": "Получить расчет",
    "contact_desc": "Заполните форму ниже или напишите нашему русскоязычному консьержу в WhatsApp.",
    "c_hq_t": "Главный офис управления:",
    "c_pick_t": "Точки посадки в Нячанге:",
    "c_wa_t": "Горячая линия / WhatsApp 24/7:",
    "c_tg_t": "Официальный Telegram канал:",
    "f_title": "Быстрая форма заявки и бронирования",
    "form_name_lbl": "Имя и Фамилия *",
    "form_phone_lbl": "Телефон / WhatsApp *",
    "form_nat_lbl": "Гражданство *",
    "form_city_lbl": "Город отправления",
    "form_service_lbl": "Интересующая услуга *",
    "form_notes_lbl": "Дополнительные пожелания (дата окончания визы, дата выезда)",
    "form_agree_lbl": "Я прочитал(-а) и полностью согласен(-на) с <a href=\"#terms\" onclick=\"openTermsModal(event)\" class=\"map-link\">Договором об оказании услуг</a> Vietnam Visa Pass.",
    "form_submit_btn": "📨 Отправить заявку через WhatsApp",
    "form_note": "🔒 Ваши персональные данные на 100% защищены в соответствии со Статьей 4 Договора.",
    "pm_subbadge": "💳 БЕЗОПАСНАЯ ОПЛАТА",
    "payment_title": "Официальный корпоративный счет Vietcombank",
    "payment_desc": "Прямой банковский перевод с мгновенным подтверждением бронирования.",
    "pm_acc_num": "Номер счета:",
    "pm_holder": "Получатель платежа:",
    "pm_branch": "Отделение банка:",
    "pm_methods_t": "Доступные способы оплаты",
    "pm_m1": "<span>✓</span> Мгновенный перевод Napas 247 по QR-коду",
    "pm_m2": "<span>✓</span> Международный перевод SWIFT / IBAN",
    "pm_m3": "<span>✓</span> Международные карты Visa / Mastercard / Wise",
    "pm_m4": "<span>✓</span> Оплата наличными при посадке в автобус",
    "ft_desc": "Vietnam Visa Pass (VVP) — Сеть скоростного визарана №1 во Вьетнаме и срочные электронные визы за 1 час.",
    "ft_col_routes": "Основные маршруты визарана",
    "ft_col_legal": "Оплата и документы",
    "ft_col_support": "Круглосуточная поддержка",
    "ftc_no_1": "• 60–180 минут ожидания в плотной толпе",
    "ftc_no_2": "• Риск опоздать на стыковочный рейс или трансфер",
    "ftc_no_3": "• Самостоятельный поиск стоек оформления виз",
    "ftc_yes_1": "• Личный представитель у рукава самолета с табличкой",
    "ftc_yes_2": "• Проводка через дипломатический VIP коридор",
    "ftc_yes_3": "• Полное прохождение за 5–10 минут и помощь с багажом",
    "nav_reviews": "Отзывы",
    "sch_th_days": "Дни выездов",
    "sch_th_dep": "Время и место сбора",
    "sch_th_dur": "Время возвращения",
    "sch_th_fare": "Стоимость пакета",
    "sch_th_route": "Маршрут и граница",
    "sch_th_status": "Статус",
    "sch_th_vehicle": "Тип транспорта",
    "sch_th_visa": "Выдача E-Visa"
  },
  "ar": {
    "topbar_badge": "⚡ <strong>VIETNAM VISA PASS</strong> — الشبكة الأولى في فيتنام لرحلات تجديد التأشيرة والتأشيرة الإلكترونية خلال ساعة واحدة!",
    "topbar_hotline": "📞 الخط الساخن / واتساب: ",
    "nav_services": "خدماتنا",
    "nav_calculator": "حاسبة الأسعار",
    "nav_guide": "دليل المنافذ",
    "nav_fasttrack": "المسار السريع VIP",
    "nav_schedule": "المواعيد",
    "nav_pricing": "قائمة الأسعار",
    "nav_terms": "شروط الخدمة",
    "nav_payment": "طرق الدفع",
    "nav_contact": "حجز 24/7",
    "hero_tag": "⚡ VIETNAM VISA PASS",
    "hero_badge_guarantee": "🛡️ ضمان استرداد 100% للأموال والرسوم الحكومية",
    "hero_badge_transparency": "💎 أسعار معلنة وشفافة 100% بدون أي رسوم خفية",
    "hero_title_1": "رحلات تجديد التأشيرة الفيتنامية",
    "hero_title_2": "إنجاز خلال ساعة · شامل كلياً · مضمون 100%",
    "hero_desc": "رحلات <strong>حافلات النوم الفاخرة وسيارات VIP الليموزين</strong> من <strong>دانانغ، نها ترانج، وهانوي</strong> إلى حدود لاوس، كمبوديا والصين. <strong>تأشيرة إلكترونية طارئة خلال 1-4 ساعات</strong> و <strong>مسار سريع بالمطار $70</strong>.",
    "hero_cta_calc": "⚡ احسب السعر واحجز الآن",
    "hero_cta_wa": "تواصل عبر واتساب 24/7",
    "hero_cta_guide": "📖 الدليل خطوة بخطوة",
    "stat_clients": "عميل دولي ومقيم",
    "stat_speed_num": "ساعة واحدة",
    "stat_speed": "أسرع تأشيرة طارئة خلال ساعة",
    "stat_success": "نسبة نجاح عبور الحدود",
    "stat_refund": "ضمان استرداد الأموال 100%",
    "mq_1": "⚡ VIETNAM VISA PASS — الشبكة الأولى لرحلات تجديد التأشيرة والتأشيرات الطارئة",
    "mq_2": "🚀 تأشيرة إلكترونية عاجلة 90 يوماً تصدر في نفس اليوم خلال 1-4 ساعات على الحدود",
    "mq_3": "🚌 رحلات منتظمة من دانانغ، نها ترانج، هانوي ومدينة هو تشي منه",
    "mq_4": "👑 المسار السريع لكبار الشخصيات VIP بمطارات تان سون نهات، نوي باي، دانانغ وكام رانه",
    "mq_5": "💯 أسعار شفافة معلنة وضمان استرداد كامل للأموال عند عدم الإنجاز",
    "services_subbadge": "⚡ باقات كبار الشخصيات VIP",
    "services_title": "سرعة، خصوصية و",
    "services_title_grad": "خدمة 5 نجوم",
    "services_desc": "حلول متكاملة لتجديد الإقامة والتأشيرة الإلكترونية الفورية وخدمات كبار الشخصيات بالمطارات.",
    "sc_badge_1": "🚌 رحلات يومية ومجدولة",
    "sc_title_1": "رحلات تجديد التأشيرة بحافلات النوم والليموزين",
    "sc_desc_1": "رحلات ذهاب وإياب مريحة إلى منفذ لاو باو (لاوس)، بو ي (لاوس)، موك باي (كمبوديا) وهوو نغي (الصين).",
    "sc_f1_1": "<span>✓</span> سرير نوم جلدي مريح 2 متر، ستائر خصوصية، شاحن USB",
    "sc_f1_2": "<span>✓</span> تكييف ممتاز، مياه شرب مجانية وواي فاي سريع طوال الرحلة",
    "sc_f1_3": "<span>✓</span> مرشدون متخصصون لمساعدتك في كافة إجراءات المنافذ",
    "sc_btn_1": "احسب تكلفة الرحلة →",
    "sc_badge_2": "⚡ عاجل خلال 1 - 4 ساعات",
    "sc_title_2": "تأشيرة إلكترونية طارئة 90 يوماً",
    "sc_desc_2": "إصدار فوري لمن شارفت تأشيراتهم على الانتهاء أو المنتظرين على المعابر الحدودية.",
    "sc_f2_1": "<span>✓</span> خيارات السرعة: ساعة، 4 ساعات، 24 ساعة، يومان أو 5-7 أيام",
    "sc_f2_2": "<span>✓</span> متوفرة للدخول لمرة واحدة أو دخول متعدد لمدة 90 يوماً",
    "sc_f2_3": "<span>✓</span> ضمان استرداد 100% لرسوم الخدمة والرسوم الحكومية في حال الرفض",
    "sc_btn_2": "عرض أسعار التأشيرات →",
    "sc_badge_3": "👑 مسار دبلوماسي فوري",
    "sc_title_3": "المسار السريع بالمطارات VIP ($70 / 1.2M ₫)",
    "sc_desc_3": "مرافقة واستقبال خاص لكبار الشخصيات في مطارات هوشي منه، هانوي، دانانغ وكام رانه.",
    "sc_f3_1": "<span>✓</span> موظف خاص بانتظارك عند بوابة الطائرة بلوحة تحمل اسمك",
    "sc_f3_2": "<span>✓</span> عبور فوري ومباشر عبر المسار الدبلوماسي وأولوي VIP",
    "sc_f3_3": "<span>✓</span> إنهاء كافة إجراءات الجوازات خلال 5–10 دقائق دون أي انتظار",
    "sc_btn_3": "تفاصيل المسار السريع →",
    "calc_subbadge": "⚡ الحاسبة الفورية الذكية",
    "calc_title": "احسب تكلفة الخدمة و",
    "calc_title_grad": "احجز مقعدك فوراً",
    "calc_desc": "الأسعار الرسمية المباشرة من Vietnam Visa Pass بدون أي رسوم خفية.",
    "calc_lbl_city": "اختر مدينة الانطلاق:",
    "calc_lbl_service": "اختر وسيلة النقل والوجهة:",
    "calc_lbl_evisa": "سرعة إصدار التأشيرة الإلكترونية (E-Visa):",
    "evisa_opt_none": "لا أحتاج تأشيرة (لدي تأشيرة / إعفاء 45 يوماً)",
    "evisa_opt_std": "تأشيرة عادية 90 يوماً (5–7 أيام عمل) — $45 / 1.200.000 ₫",
    "evisa_opt_2d": "تأشيرة عاجلة 90 يوماً (يومي عمل) — $100 / 2.600.000 ₫",
    "evisa_opt_1d": "تأشيرة سريعة 90 يوماً (يوم واحد / 24 ساعة) — $110 / 2.850.000 ₫",
    "evisa_opt_4h": "⚡ تأشيرة فائقة السرعة (3–4 ساعات – نفس اليوم) — $120 / 3.100.000 ₫",
    "evisa_opt_1h": "🚀 تأشيرة طارئة جداً (1–2 ساعة على الحدود) — $180 / 4.600.000 ₫",
    "evisa_multi_chk": "ترقية لدخول متعدد (Multiple Entry): <strong>+$25 (~650.000 دونغ)</strong>",
    "calc_sum_label": "إجمالي التكلفة التقديرية للباقة:",
    "calc_terms_agree": "⚖️ الحجز يعني الموافقة على <a href=\"#terms\" onclick=\"openTermsModal(event)\" class=\"map-link\">اتفاقية شروط الخدمة</a>.",
    "calc_btn_wa": "احجز عبر واتساب",
    "calc_btn_tg": "احجز عبر تيليجرام",
    "guide_subbadge": "📖 دليل عبور المنافذ الحدودية",
    "guide_title": "إجراءات العبور الرسمية",
    "guide_title_grad": "خطوة بخطوة",
    "guide_desc": "إرشادات تفصيلية وقوائم تدقيق من كبار خبراء التأشيرات لدى Vietnam Visa Pass.",
    "tab_hanoi": "📍 هانوي ⇄ هوو نغي (الصين)",
    "tab_nhatrang_laos": "📍 نها ترانج ⇄ بو ي (لاوس)",
    "tab_nhatrang_cam": "📍 نها ترانج ⇄ موك باي (كمبوديا)",
    "tab_danang_laos": "📍 دانانغ ⇄ لاو باو (لاوس)",
    "g_badge_popular": "مسار شائع جداً",
    "g_badge_ru_kr": "موصى به لحاملي الجواز الروسي والكوري",
    "g_badge_eu_us": "موصى به لحاملي الجواز الأمريكي والأوروبي",
    "g_badge_all_nat": "متاح لجميع الجنسيات حول العالم",
    "g1_title": "خط سير الرحلة: هانوي ⇄ منفذ هوو نغي الدولي (الصين)",
    "g1_sub": "ليموزين VIP 9-11 مقعداً · الانطلاق: 09:00 صباحاً · العودة بنفس اليوم: 07:00 مساءً",
    "g1_s1_t": "الانطلاق من وسط هانوي:",
    "g1_s1_d": "ركوب الليموزين الفاخرة من نقطة الانطلاق في هانوي. يرجى التواجد قبل 15 دقيقة.",
    "g1_s2_t": "الوصول لمنفذ هوو نغي والختم الفيتنامي:",
    "g1_s2_d": "الوصول لمحطة شوان كوونغ ثم الانتقال بالسيارة الكهربائية أو مشياً 700م لختم الخروج الفيتنامي.",
    "g_stamp_req_t": "📸 تعليمات هامة جداً:",
    "g_stamp_req_d": "فور الحصول على ختم الخروج، التقط صورة واضحة جداً لصفحة الختم وأرسلها فوراً لفريقنا لبدء استخراج التأشيرة الطارئة خلال 4 ساعات.",
    "g1_s3_t": "المنطقة المحايدة والاستراحة بالجانب الصيني:",
    "g1_s3_d": "المشي 800م إلى النقطة الصينية وتعبئة بطاقات الدخول/الخروج والاستراحة بالصالات المكيفة لحين جهوزية التأشيرة.",
    "g1_s4_t": "استلام التأشيرة والعودة إلى فيتنام:",
    "g1_s4_d": "يصلك ملف التأشيرة PDF، أبرز شاشة هاتفك وجوازك عند كاونتر الجوازات الفيتنامية للحصول على إقامة جديدة 90 يوماً.",
    "g1_s5_t": "رحلة العودة إلى هانوي:",
    "g1_s5_d": "الانتقال للمحطة ➔ 07:00 مساءً انطلاق الليموزين عائدة إلى هانوي.",
    "g_warn_t": "تنبيه هام جداً عند استلام الجواز من كاونتر الجوازات:",
    "g_warn_d": "نظراً لكثافة المسافرين، قد يحدث خطأ غير مقصود في تاريخ انتهاء الإقامة بالختم. يرجى مراجعة تاريخ الختم قبل مغادرة الكاونتر!",
    "g2_title": "خط سير الرحلة: نها ترانج ⇄ منفذ بو ي (لاوس)",
    "g2_sub": "حافلة النوم الحمراء الفاخرة · ختم إعفاء 45 يوماً أو تأشيرة 90 يوماً",
    "g2_s1_t": "الانطلاق من نها ترانج ليلاً:",
    "g2_s1_d": "• النقطة 1 (21:15): 4 شارع تران فو<br>• النقطة 2 (21:30): 40 هون تشونغ<br>• وسيلة النقل: حافلة نوم حمراء فاخرة | واي فاي: 19002679",
    "g2_s2_t": "الوصول لمنفذ بو ي والإفطار:",
    "g2_s2_d": "الوصول 06:00 صباحاً. تناول الإفطار والقهوة ثم بدء إجراءات الدخول إلى لاوس 07:30 صباحاً.",
    "g2_s3_t": "إجراءات العبور (لاوس ⇄ فيتنام):",
    "g2_s3_d": "خروج فيتنام ➔ دخول لاوس ➔ خروج لاوس ➔ دخول فيتنام. جهز مبلغ 140.000 دونغ نقداً داخل الجواز للرسوم.",
    "g2_s4_t": "العودة إلى نها ترانج:",
    "g2_s4_d": "ركوب حافلة النوم عائدين إلى نها ترانج، والوصول حوالي 09:00 مساءً مع تأشيرتك الجديدة.",
    "g3_title": "خط سير الرحلة: نها ترانج ⇄ منفذ موك باي (كمبوديا)",
    "g3_sub": "حافلة النوم الحمراء (الثلاثاء، الخميس، الأحد) · مثالي لحاملي الجوازات الأوروبية والأمريكية",
    "g3_s1_t": "الانطلاق من نها ترانج:",
    "g3_s1_d": "الانطلاق بحافلة النوم المريحة في الساعة 21:30 مساءً من 40 هون تشونغ.",
    "g3_s2_t": "الوصول لمنفذ موك باي والختم:",
    "g3_s2_d": "يفتح المنفذ 07:30 صباحاً. ختم الخروج وإرسال الصورة قبل 08:00 صباحاً.",
    "g3_s3_t": "تأشيرة كمبوديا واستلام التأشيرة الفيتنامية:",
    "g3_s3_d": "شراء تأشيرة كمبوديا السياحية (~$35-$50). الاستراحة بالمقهى لحين إصدار تأشيرة فيتنام خلال 4 ساعات ثم العودة قبل الظهيرة.",
    "g4_title": "خط سير الرحلة: دانانغ ⇄ منفذ لاو باو (لاوس)",
    "g4_sub": "حافلة النوم الحمراء (01:45 ص) أو سيارة VIP خاصة (03:00 ص) · العودة بنفس اليوم",
    "g4_s1_t": "الانطلاق من دانانغ:",
    "g4_s1_d": "• <strong>حافلة النوم (الثلاثاء والسبت):</strong> 01:45 صباحاً من المركز.<br>• <strong>سيارة VIP (يومياً):</strong> 03:00 صباحاً من باب الفندق في دانانغ وهوي آن.",
    "g4_s2_t": "منفذ لاو باو والتقاط الصور عند النصب 605:",
    "g4_s2_d": "الوصول لمنفذ لاو باو والنصب التذكاري 605 بين فيتنام ولاوس. مع التأشيرة الفائقة 3-4 ساعات تصدر التأشيرة صباحاً للختم 90 يوماً.",
    "g4_s3_t": "العودة المريحة إلى دانانغ:",
    "g4_s3_d": "ركوب السيارة والعودة إلى دانانغ والوصول بين 05:30 و 06:30 مساءً نفس اليوم.",
    "fasttrack_subbadge": "⭐ خدمات المطارات لكبار الشخصيات",
    "fasttrack_title": "المسار السريع VIP في المطار",
    "fasttrack_title_grad": "تجاوز طوابير الانتظار",
    "fasttrack_desc": "استقبال خاص ومرافقة عبر المسار الدبلوماسي في مطارات دانانغ، كام رانه، نوي باي وتان سون نهات.",
    "ft_lead": "بعد رحلة طيران طويلة، الوقوف لساعات في طوابير الجوازات المزدحمة أمر متعب جداً. خدمتنا تضمن لك الدخول خلال 5 دقائق فقط.",
    "ftc_no_t": "❌ بدون خدمة المسار السريع:",
    "ftc_no_d": "• الانتظار من 60 إلى 180 دقيقة في طوابير طويلة<br>• مخاطرة فوات مواعيد المواصلات أو الرحلات التالية<br>• عناء التعامل الفردي مع كاونترات التأشيرات المعقدة",
    "ftc_yes_t": "✅ مع خدمة المسار السريع لـ Vietnam Visa Pass:",
    "ftc_yes_d": "• موظف خاص بانتظارك عند باب الطائرة بلوحة اسمك<br>• مرافقة مباشرة عبر المسار الدبلوماسي والأولوي<br>• إنهاء كافة الإجراءات خلال 5–10 دقائق مع المساعدة في الحقائب",
    "ft_btn_book": "⭐ احجز المسار السريع الآن ($70 / 1.2M ₫)",
    "ft_ov_t": "👑 المسار الدبلوماسي 5 نجوم",
    "ft_ov_d": "متوفر بمطارات SGN, HAN, DAD, CXR و PQC",
    "schedule_subbadge": "📅 جدول الرحلات الأسبوعي",
    "schedule_title": "مواعيد الانطلاق",
    "schedule_title_grad": "المنتظمة",
    "schedule_desc": "رحلات يومية وأسبوعية منتظمة بأحدث حافلات النوم وسيارات VIP الخاصة.",
    "sch_d1_b": "🚌 حافلة النوم الحمراء",
    "sch_d1_t": "دانانغ ⇄ منفذ لاو باو",
    "sch_d1_d": "كل ثلاثاء وسبت | الانطلاق: 01:45 ص | العودة: 06:00 م",
    "sch_d2_b": "⭐ سيارة VIP خاصة 7 مقاعد",
    "sch_d2_t": "دانانغ ⇄ لاو باو من الباب إلى الباب",
    "sch_d2_d": "رحلات يومية | 03:00 صباحاً من الفنادق في دانانغ وهوي آن",
    "sch_n1_b": "🚍 حافلة النوم الحمراء",
    "sch_n1_t": "نها ترانج ⇄ منفذ بو ي (لاوس)",
    "sch_n1_d": "يومياً ليلاً | 21:15 (تران فو) و 21:30 (هون تشونغ)",
    "sch_n2_b": "🚍 حافلة النوم الحمراء",
    "sch_n2_t": "نها ترانج ⇄ موك باي (كمبوديا)",
    "sch_n2_d": "الثلاثاء، الخميس، الأحد ليلاً | الانطلاق: 21:30 (هون تشونغ)",
    "sch_h1_b": "👑 ليموزين VIP 9-11 مقعداً",
    "sch_h1_t": "هانوي ⇄ منفذ هوو نغي (الصين)",
    "sch_h1_d": "رحلات يومية | 09:00 صباحاً | العودة: 07:00 مساءً",
    "pricing_subbadge": "💎 لائحة الأسعار الرسمية",
    "pricing_title": "أسعار شفافة ومنافسة",
    "pricing_title_grad": "بأعلى جودة",
    "pricing_desc": "بدون أي رسوم خفية. ضمان استرداد 100% للأموال والرسوم الحكومية في حال عدم الإنجاز.",
    "th_service": "نوع الخدمة",
    "th_route": "المسار والمواصفات",
    "th_speed": "المدة / التكرار",
    "th_price": "السعر الرسمي المعلن",
    "rgb_title": "أسعار شفافة 100% وضمان استرداد كامل للأموال",
    "rgb_desc": "• <strong>بدون رسوم خفية:</strong> يتم توضيح كافة مصاريف النقل والحدود والتأشيرة كاملة قبل انطلاق الرحلة.<br>• <strong>استرداد رسوم الخدمة 100%:</strong> استرجاع كامل المبلغ عند تعذر إصدار التأشيرة بسبب خطأ خدمي.<br>• <strong>استرداد الرسوم الحكومية بالكامل:</strong> إعادة 100% من الرسوم الحكومية الرسمية في حال عدم تنفيذ الخدمة.",
    "rev_subbadge": "⭐ آراء وتقييمات العملاء",
    "rev_title": "أكثر من 15,000+",
    "rev_title_grad": "عميل ومقيم راضٍ",
    "rev_desc": "تقييم 5.0★ في كافة مجتمعات المقيمين في دانانغ، نها ترانج، سايغون وهانوي.",
    "terms_subbadge": "⚖️ الاتفاقية القانونية",
    "terms_title": "شروط واتفاقية",
    "terms_title_grad": "تقديم الخدمات للعملاء",
    "terms_desc": "اتفاقية قانونية متوافقة مع القوانين الفيتنامية مع سياسة استرداد 100%.",
    "tm_h3": "عقد تقديم الخدمات الاستشارية وإجراءات التأشيرات",
    "tm_h3_sub": "اتفاقية الخدمة المعتمدة للعملاء الأفراد (Khách Lẻ)",
    "tm_doc_badge": "اتفاقية رسمية ملزمة",
    "tm_preamble": "<strong>الأسس القانونية واللوائح المنظمة:</strong><br>• وفقاً للقانون المدني الفيتنامي رقم 91/2015/QH13؛<br>• وفقاً للقانون التجاري رقم 36/2005/QH11؛<br>• وفقاً لقانون دخول وخروج وإقامة الأجانب رقم 47/2014/QH13؛<br>• ووفقاً للتعميم الوزاري رقم 28/2026/TT-BTC الخاص بالرسوم الحكومية.",
    "tm_a1_t": "المادة 1: نطاق الخدمات",
    "tm_a1_sub": "التفويض وإعداد المعاملات",
    "tm_a1_c1": "<strong>1.1 نطاق التفويض:</strong> يفوض العميل (الطرف الأول) وتوافق شركة Vietnam Visa Pass (الطرف الثاني) على تقديم خدمات الاستشارة، تجهيز الملفات وسداد الرسوم الحكومية للتأشيرات الإلكترونية ورحلات تجديد الإقامة.",
    "tm_a1_c2": "<strong>1.2 تفاصيل العمل:</strong> تقديم الاستشارات القانونية، مراجعة الوثائق، التقديم عبر البوابة الحكومية الرسمية، ومتابعة وتسليم التأشيرة فور صدورها.",
    "tm_a2_t": "المادة 2: تكلفة الخدمات والرسوم الحكومية والضرائب",
    "tm_a2_sub": "تفصيل الرسوم والفواتير الضريبية",
    "tm_a2_c1": "<strong>2.1 هيكل التكلفة:</strong> تشمل التكلفة: (1) أتعاب الخدمة والاستشارة؛ و (2) الرسوم الحكومية الرسمية ($25 دولار تسدد للحكومة بموجب إيصال رسمي).",
    "tm_a2_c2": "<strong>2.2 الضرائب والفواتير:</strong> رسوم الخدمة شاملة لضريبة القيمة المضافة (VAT) ويتم إصدار فاتورة إلكترونية رسمية عند الطلب.",
    "tm_a34_t": "المادة 3 و 4: الحقوق والالتزامات وسرية البيانات 100%",
    "tm_a34_sub": "مسؤوليات العميل وحماية الخصوصية",
    "tm_a34_c1": "<strong>3.1 التزامات العميل:</strong> تقديم بيانات صحيحة ومطابقة للجواز، وتحمل المسؤولية القانونية عن صحة المستندات، والالتزام بمواعيد الانطلاق.",
    "tm_a34_c2": "<strong>4.1 سرية البيانات:</strong> تلتزم الشركة بحفظ وسرية بيانات العميل 100% وعدم إفشائها لأي طرف ثالث باستثناء سلطات الجوازات الرسمية.",
    "tm_a5_t": "المادة 5: نتائج الخدمة وسياسة استرداد الأموال 100%",
    "tm_a5_sub": "سياسة استرجاع الرسوم والرسوم الحكومية",
    "tm_a5_c1": "<strong>5.1 الصلاحية السيادية:</strong> قرار منح أو رفض التأشيرات يعود حصراً لإدارة الهجرة بوزارة الأمن العام الفيتنامية.",
    "tm_a5_c2": "<strong>5.2 استرداد 100% للأموال:</strong> عند رفض التأشيرة لأسباب خدمية أو موضوعية دون تزوير، تسترجع <strong>100% من رسوم الخدمة</strong> خلال 5 أيام عمل. وفي حال عدم تنفيذ الخدمة <strong>تسترد الرسوم الحكومية كاملة 100%</strong>.",
    "tm_a5_c3": "<strong>5.3 الإلغاء والتزوير:</strong> الإلغاء الفردي بعد تقديم المعاملة غير مسترد. وتقديم وثائق مزورة يلغي العقد فوراً دون أي استرجاع مع تحمل العميل للمسؤولية القانونية.",
    "tm_a678_t": "المادة 6 و 7 و 8: القوة القاهرة والنزاعات والموافقة الإلكترونية",
    "tm_a678_sub": "الاختصاص القضائي وقوة الاتفاق الإلكتروني",
    "tm_a678_c1": "<strong>6.1 القوة القاهرة:</strong> الكوارث الطبيعية والأوبئة وإغلاق الحدود والتغييرات المفاجئة في القوانين تعفي الطرفين من المسؤولية.",
    "tm_a678_c2": "<strong>7.1 حل النزاعات:</strong> تتم التسوية ودياً أو عبر المحكمة المختصة في مدينة نها ترانج، فيتنام.",
    "tm_a678_c3": "<strong>8.1 الموافقة الإلكترونية:</strong> الضغط على زر الحجز أو إرسال الاستمارة أو السداد يعتبر موافقة قانونية ملزمة للعقد.",
    "tm_banner_t": "الضمان القانوني والموافقة المتبادلة",
    "tm_banner_d": "باستخدامك لخدمات Vietnam Visa Pass، توافق أنت وشركتنا على الالتزام بكافة الشروط المعلنة أعلاه.",
    "faq_subbadge": "❓ الأسئلة الشائعة",
    "faq_title": "إجابات عن كل ما يخص",
    "faq_title_grad": "التأشيرات والمنافذ",
    "faq_desc": "كل ما تحتاج لمعرفته قبل الانطلاق في رحلة تجديد التأشيرة.",
    "faq_q1": "1. أي منفذ حدودي يناسب جنسيتي (لاوس أم كمبوديا)؟",
    "faq_a1": "• <strong>نها ترانج ⇄ بو ي (لاوس):</strong> ينصح به لجوازات <strong>روسيا، بيلاروسيا، كوريا الجنوبية، ماليزيا...</strong> لوجود إعفاء مباشر من فيزا لاوس.<br>• <strong>نها ترانج ⇄ موك باي (كمبوديا):</strong> ينصح به لحاملي الجواز <strong>الأمريكي، البريطاني، الأوروبي، الأسترالي...</strong> لسهولة فيزا كمبوديا عند الوصول.<br>• <strong>دانانغ ⇄ لاو باو (لاوس):</strong> منفذ دولي <strong>لا يضع أي شروط على الجنسيات</strong> ويستقبل <strong>جميع مواطني العالم</strong>.",
    "faq_q2": "2. كم المبلغ النقدي الواجب تجهيزه لرسوم أختام الحدود؟",
    "faq_a2": "• <strong>حدود لاوس (بو ي / لاو باو):</strong> جهز <strong>140.000 دونغ</strong> (خروج فيتنام: 50k، دخول لاوس: 20k، خروج لاوس: 20k، دخول فيتنام: 50k). ضع المبلغ داخل الجواز.<br>• <strong>حدود كمبوديا (موك باي):</strong> جهز 50k-150k رسوم المنفذ، 100k-150k دراجة نقل، و ~$35-$50 دولار لفيزا كمبوديا.",
    "faq_q3": "3. هل توجد رسوم إضافية لبعض الجنسيات الخاصة؟",
    "faq_a3": "وفقاً لتعليمات الجوازات، تتطلب بعض الجنسيات تدقيقاً خاصاً: <strong>+850.000 دونغ</strong> لمواطني <em>مصر، الجزائر، المغرب، تونس، سريلانكا</em>؛ و <strong>+650.000 دونغ</strong> لمواطني <em>تركيا</em>.",
    "faq_q4": "4. كيف التقط صورة ختم الخروج لطلب التأشيرة الطارئة؟",
    "faq_a4": "فور استلام الختم، صور الصفحة الأولى للجواز: <strong>أظهر الزوايا الأربع، تأكد من وضوح الصورة، وتجنب انعكاس الضوء ولا تغطي النص بالأصابع</strong>. أرسلها فوراً لقروب المحادثة.",
    "faq_q5": "5. كيف يعمل ضمان استرداد الأموال والرسوم الحكومية 100%؟",
    "faq_a5": "نضمن لك <strong>استرداد 100%</strong> من رسوم خدمتنا في حال الرفض بسبب خطأ في الخدمة. بالإضافة إلى ذلك، إذا تعذر تنفيذ الخدمة، <strong>يتم استرداد كامل الرسوم الحكومية 100%</strong> بموجب المادة 5 من اتفاقية الخدمة.",
    "contact_subbadge": "⚡ دعم مباشر 24/7",
    "contact_title": "احجز رحلتك و",
    "contact_title_grad": "احصل على عرض سعر",
    "contact_desc": "املأ الاستمارة أدناه أو تواصل مباشرة مع فريقنا عبر واتساب.",
    "c_hq_t": "المقر الإداري الرئيسي:",
    "c_pick_t": "نقاط التجمع في نها ترانج:",
    "c_wa_t": "الخط الساخن / واتساب 24/7:",
    "c_tg_t": "قناة تيليجرام الرسمية:",
    "f_title": "نموذج الاستفسار والحجز السريع VIP",
    "form_name_lbl": "الاسم الكامل *",
    "form_phone_lbl": "رقم الهاتف / واتساب *",
    "form_nat_lbl": "الجنسية *",
    "form_city_lbl": "المدينة الحالية",
    "form_service_lbl": "الخدمة المطلوبة *",
    "form_notes_lbl": "ملاحظات إضافية (تاريخ انتهاء التأشيرة، موعد السفر)",
    "form_agree_lbl": "قرأت وفهمت وأوافق على <a href=\"#terms\" onclick=\"openTermsModal(event)\" class=\"map-link\">اتفاقية شروط الخدمة</a> لشركة Vietnam Visa Pass.",
    "form_submit_btn": "📨 إرسال الطلب والموافقة عبر واتساب",
    "form_note": "🔒 معلوماتك الشخصية محمية بالكامل وفقاً للمادة 4 من اتفاقية الخدمة.",
    "pm_subbadge": "💳 دفع آمن ومعتمد",
    "payment_title": "الحساب البنكي الرسمي المعتمد",
    "payment_desc": "تحويل بنكي مباشر مع تأكيد حجز فوري.",
    "pm_acc_num": "رقم الحساب البنكي:",
    "pm_holder": "اسم صاحب الحساب:",
    "pm_branch": "الفرع:",
    "pm_methods_t": "طرق الدفع المتاحة",
    "pm_m1": "<span>✓</span> تحويل بنكي فوري عبر Napas 247 بالباركود",
    "pm_m2": "<span>✓</span> تحويل دولي مباشر عبر SWIFT / IBAN",
    "pm_m3": "<span>✓</span> بطاقات فيزا / ماستركارد الدولية و Wise",
    "pm_m4": "<span>✓</span> دفع نقدي مباشر عند نقاط التجمع",
    "ft_desc": "Vietnam Visa Pass (VVP) — شبكة تجديد الإقامة والتأشيرات الطارئة الأولى في فيتنام.",
    "ft_col_routes": "أهم مسارات تجديد التأشيرة",
    "ft_col_legal": "القانونية والمدفوعات",
    "ft_col_support": "دعم كبار الشخصيات 24/7",
    "ftc_no_1": "• الانتظار من 60 إلى 180 دقيقة في طوابير طويلة",
    "ftc_no_2": "• مخاطرة فوات مواعيد المواصلات أو الرحلات التالية",
    "ftc_no_3": "• عناء التعامل الفردي مع كاونترات التأشيرات المعقدة",
    "ftc_yes_1": "• موظف خاص بانتظارك عند باب الطائرة بلوحة اسمك",
    "ftc_yes_2": "• مرافقة مباشرة عبر المسار الدبلوماسي والأولوي",
    "ftc_yes_3": "• إنهاء كافة الإجراءات خلال 5–10 دقائق مع المساعدة في الحقائب",
    "nav_reviews": "التقييمات",
    "sch_th_days": "أيام الرحلات",
    "sch_th_dep": "وقت ومكان الانطلاق",
    "sch_th_dur": "موعد العودة التقريبي",
    "sch_th_fare": "سعر الباقة",
    "sch_th_route": "المسار والمنفذ الحدودي",
    "sch_th_status": "الحالة",
    "sch_th_vehicle": "نوع وسيلة النقل",
    "sch_th_visa": "استلام التأشيرة"
  },
  "kr": {
    "topbar_badge": "⚡ <strong>VIETNAM VISA PASS</strong> — 베트남 1위 당일 초고속 비자런 & 1시간 급행 E-비자!",
    "topbar_hotline": "📞 고객센터 / 왓츠앱: ",
    "nav_services": "서비스 안내",
    "nav_calculator": "요금 계산기",
    "nav_guide": "국경 이용 안내",
    "nav_fasttrack": "VIP 패스트트랙",
    "nav_schedule": "운행 일정",
    "nav_pricing": "공식 요금표",
    "nav_terms": "이용약관 및 계약",
    "nav_payment": "결제 안내",
    "nav_contact": "24시 예약",
    "hero_tag": "⚡ VIETNAM VISA PASS",
    "hero_badge_guarantee": "🛡️ 100% 환불 보장 & 정부 수수료 전액 환불",
    "hero_badge_transparency": "💎 숨겨진 비용 없는 100% 투명한 정찰제",
    "hero_title_1": "베트남 비자런 & 급행 비자 연장",
    "hero_title_2": "1시간 초특급 발급 · 원스톱 토탈 케어",
    "hero_desc": "<strong>다낭, 나트랑, 하노이 출발 프리미엄 슬리핑 버스 & VIP 리무진 비자런</strong>(라오스, 캄보디아, 중국 국경), <strong>1시간~4시간 초고속 E-비자 발급</strong>, 공항 대기 없는 <strong>VIP 패스트트랙 $70</strong>.",
    "hero_cta_calc": "⚡ 요금 계산 및 예약",
    "hero_cta_wa": "카톡/왓츠앱 24시 상담",
    "hero_cta_guide": "📖 국경별 상세 가이드",
    "stat_clients": "누적 이용 고객",
    "stat_speed_num": "최단 1시간",
    "stat_speed": "최단 1시간 긴급 E-비자",
    "stat_success": "비자 발급 성공률",
    "stat_refund": "100% 환불 보장",
    "mq_1": "⚡ VIETNAM VISA PASS — 베트남 1위 당일 초고속 비자런 & 1시간 급행 비자",
    "mq_2": "🚀 90일 E-비자 1~4시간 내 국경 도착 즉시 발급 완료",
    "mq_3": "🚌 다낭, 나트랑, 하노이, 호치민 출발 정기 프리미엄 운행",
    "mq_4": "👑 호치민, 하노이, 다낭, 깜란 공항 VIP 패스트트랙 라인 통과",
    "mq_5": "💯 투명한 정찰제 가격 & 불승인 시 100% 전액 환불 보장",
    "services_subbadge": "⚡ 핵심 프리미엄 서비스",
    "services_title": "신속함, 프라이버시 &",
    "services_title_grad": "5성급 컨시어지",
    "services_desc": "국경 비자런 토탈 케어, 당일 국경 도착 즉시 발급받는 초특급 E-비자 및 공항 패스트트랙 서비스.",
    "sc_badge_1": "🚌 매일 및 정기 운행",
    "sc_title_1": "슬리핑 버스 & VIP 리무진 비자런",
    "sc_desc_1": "라오바오(라오스), 보이(라오스), 목바이(캄보디아), 후응이(중국) 국경 왕복 편안한 이동.",
    "sc_f1_1": "<span>✓</span> 2m 가죽 슬리핑 베드, 프라이빗 커튼, 개별 충전 포트",
    "sc_f1_2": "<span>✓</span> 시원한 에어컨, 생수 및 고속 Wi-Fi 무료 제공",
    "sc_f1_3": "<span>✓</span> 출입국 전문 인솔자의 국경 통과 1:1 케어",
    "sc_btn_1": "비자런 요금 확인 →",
    "sc_badge_2": "⚡ 1시간 ~ 4시간 급행",
    "sc_title_2": "90일 초특급 긴급 E-비자 발급",
    "sc_desc_2": "비자 만료 임박자 또는 국경 현장에서 대기 중인 고객을 위한 초고속 발급.",
    "sc_f2_1": "<span>✓</span> 발급 속도 옵션: 1시간, 4시간, 24시간, 2일, 일반 5-7일",
    "sc_f2_2": "<span>✓</span> 90일 단수(Single) 및 복수(Multiple) 비자 모두 가능",
    "sc_f2_3": "<span>✓</span> 불승인 시 대행 수수료 및 정부 공과금 100% 환불",
    "sc_btn_2": "E-비자 요금표 보기 →",
    "sc_badge_3": "👑 외교관 전용 패스트트랙",
    "sc_title_3": "공항 VIP 패스트트랙 ($70 / 1.2M ₫)",
    "sc_desc_3": "호치민(SGN), 하노이(HAN), 다낭(DAD), 깜란(CXR), 푸꾸옥(PQC) 공항 VIP 전용 의전.",
    "sc_f3_1": "<span>✓</span> 비행기 착륙 즉시 전담 직원이 개인 네임보드로 영접",
    "sc_f3_2": "<span>✓</span> 대기 없이 외교관/승무원 전용 패스트트랙 레인 통과",
    "sc_f3_3": "<span>✓</span> 5~10분 만에 초고속 출입국 수속 완료 및 수하물 안내",
    "sc_btn_3": "패스트트랙 상세 안내 →",
    "calc_subbadge": "⚡ 실시간 익스프레스 견적",
    "calc_title": "비자 & 비자런 요금 계산기",
    "calc_title_grad": "간편 실시간 예약",
    "calc_desc": "Vietnam Visa Pass 공식 요금표 기반 견적입니다. 출발 도시와 노선을 선택하시면 투명한 금액이 산출됩니다.",
    "calc_lbl_city": "출발 도시 선택:",
    "calc_lbl_service": "차량 및 노선 선택:",
    "calc_lbl_evisa": "E-비자 발급 속도 (선택 사항):",
    "evisa_opt_none": "E-비자 불필요 (기존 소지 / 45일 무비자)",
    "evisa_opt_std": "90일 일반 E-비자 (5~7 영업일) — $45 / 1.200.000 ₫",
    "evisa_opt_2d": "90일 급행 E-비자 (2 영업일) — $100 / 2.600.000 ₫",
    "evisa_opt_1d": "90일 당일 급행 E-비자 (24시간) — $110 / 2.850.000 ₫",
    "evisa_opt_4h": "⚡ 90일 초고속 E-비자 (3~4시간 - 비자런 당일) — $120 / 3.100.000 ₫",
    "evisa_opt_1h": "🚀 90일 특급 국경 E-비자 (1~2시간 긴급) — $180 / 4.600.000 ₫",
    "evisa_multi_chk": "복수 입국(Multiple Entry) 업그레이드: <strong>+$25 (~650,000동)</strong>",
    "calc_sum_label": "총 예상 패키지 금액:",
    "calc_terms_agree": "⚖️ 예약 진행 시 <a href=\"#terms\" onclick=\"openTermsModal(event)\" class=\"map-link\">서비스 이용약관</a>에 동의하는 것으로 간주됩니다.",
    "calc_btn_wa": "왓츠앱으로 즉시 예약",
    "calc_btn_tg": "텔레그램으로 예약",
    "guide_subbadge": "📖 국경 출입국 실전 가이드",
    "guide_title": "국경별 단계별",
    "guide_title_grad": "출입국 수속 안내",
    "guide_desc": "Vietnam Visa Pass 현장 전문가들이 정리한 실시간 국경 통과 팁.",
    "tab_hanoi": "📍 하노이 ⇄ 후응이 (중국 국경)",
    "tab_nhatrang_laos": "📍 나트랑 ⇄ 보이 (라오스 국경)",
    "tab_nhatrang_cam": "📍 나트랑 ⇄ 목바이 (캄보디아)",
    "tab_danang_laos": "📍 다낭 ⇄ 라오바오 (라오스 국경)",
    "g_badge_popular": "인기 노선",
    "g_badge_ru_kr": "한국/러시아/벨라루스 국적 추천",
    "g_badge_eu_us": "미국/영국/EU 국적 추천",
    "g_badge_all_nat": "전 세계 모든 국적 가능",
    "g1_title": "비자런 여정: 하노이 ⇄ 후응이 국제 국경 (중국)",
    "g1_sub": "VIP 리무진 9-11인승 · 출발: 09:00 · 당일 19:00 복귀",
    "g1_s1_t": "하노이 시내 탑승:",
    "g1_s1_d": "하노이 출발 거점에서 VIP 리무진 탑승. 출발 15분 전까지 도착해주세요.",
    "g1_s2_t": "후응이 국경 도착 및 베트남 출국:",
    "g1_s2_d": "국경 터미널 도착 후 전동차 또는 도보 700m 이동하여 베트남 출국 도장을 받습니다.",
    "g_stamp_req_t": "📸 매우 중요한 안내:",
    "g_stamp_req_d": "출국 도장을 받자마자 여권 첫 페이지를 네 모서리가 모두 나오게 선명하게 촬영하여 VVP 단톡방에 전송합니다.",
    "g1_s3_t": "중국 측 중립 구역 대기 및 휴식:",
    "g1_s3_d": "중국 측 검문소로 이동하여 출입국 카드를 작성하고, 비자가 발급되는 동안 면세점 휴게실에서 휴식합니다.",
    "g1_s4_t": "E-비자 수령 및 베트남 재입국:",
    "g1_s4_d": "VVP가 전송한 비자 PDF와 여권을 베트남 입국 심사대에 제시하여 새로운 90일 체류 도장을 받습니다.",
    "g1_s5_t": "하노이 복귀:",
    "g1_s5_d": "19:00 VIP 리무진을 타고 하노이로 안전하게 복귀합니다.",
    "g_warn_t": "국경 심사대 여권 도장 확인 주의사항:",
    "g_warn_d": "심사관의 단순 실수로 체류 기간 날짜가 잘못 찍히는 경우가 간혹 있으니, 심사대를 벗어나기 전 도장의 만료 날짜를 꼭 확인하세요!",
    "g2_title": "비자런 여정: 나트랑 ⇄ 보이 국경 (라오스)",
    "g2_sub": "심야 프리미엄 레드 슬리핑 버스 · 45일 무비자 또는 90일 E-비자",
    "g2_s1_t": "나트랑 시내 탑승:",
    "g2_s1_d": "• 1차 (21:15): No. 4 Tran Phu (Muong Thanh)<br>• 2차 (21:30): 40 Hon Chong<br>• 차량 식별: 레드 슬리핑 코치 | Wi-Fi: 19002679",
    "g2_s2_t": "보이 국경 도착 및 아침 식사:",
    "g2_s2_d": "06:00 국경 도착. 현지 조식 및 모닝 커피 후 07:30 국경 오픈 즉시 수속 시작.",
    "g2_s3_t": "국경 수속 (라오스 ⇄ 베트남):",
    "g2_s3_d": "베트남 출국 ➔ 라오스 입국 ➔ 라오스 출국 ➔ 베트남 재입국. 수수료 140,000동 현금을 여권에 끼워 준비합니다.",
    "g2_s4_t": "나트랑 복귀:",
    "g2_s4_d": "레드 슬리핑 버스를 타고 나트랑으로 복귀, 약 21:00-21:30 도착.",
    "g3_title": "비자런 여정: 나트랑 ⇄ 목바이 국경 (캄보디아)",
    "g3_sub": "심야 레드 슬리핑 버스 (화/목/일) · 서구권 및 영미권 국적자 최적화",
    "g3_s1_t": "나트랑 출발:",
    "g3_s1_d": "21:30 40 Hon Chong에서 편안한 슬리핑 버스 탑승.",
    "g3_s2_t": "목바이 도착 및 베트남 출국:",
    "g3_s2_d": "07:30 국경 오픈. 출국 도장 날인 후 08:00 전 VVP로 도장 사진 전송.",
    "g3_s3_t": "캄보디아 도착 비자 및 E-비자 발급:",
    "g3_s3_d": "캄보디아 관광 비자 발급(~$35-$50). 카페에서 대기하며 4시간 만에 베트남 E-비자 수령 후 12:00 전 재입국.",
    "g4_title": "비자런 여정: 다낭 ⇄ 라오바오 국경 (라오스)",
    "g4_sub": "레드 슬리핑 버스 (01:45) 또는 7인승 VIP 단독 차량 (03:00) · 당일 복귀",
    "g4_s1_t": "다낭 출발:",
    "g4_s1_d": "• <strong>슬리핑 버스 (화/토):</strong> 01:45 중앙 미팅포인트.<br>• <strong>VIP 단독 차량 (매일):</strong> 03:00 다낭/호이안 호텔 픽업.",
    "g4_s2_t": "라오바오 수속 & 605번 국경비 기념 촬영:",
    "g4_s2_d": "라오바오 도착, 605번 국경 표지석 확인 후 라오스 통과. 3-4시간 초고속 E-비자로 당일 오전 비자 승인 완료.",
    "g4_s3_t": "다낭 편안한 복귀:",
    "g4_s3_d": "차량 탑승 후 다낭으로 복귀하여 당일 17:30-18:30경 도착.",
    "fasttrack_subbadge": "⭐ 공항 VIP 의전 서비스",
    "fasttrack_title": "공항 VIP 패스트트랙",
    "fasttrack_title_grad": "대기 없는 우선 입국",
    "fasttrack_desc": "다낭(DAD), 깜란/나트랑(CXR), 하노이(HAN), 호치민(SGN) 공항 전용 패스트트랙 라인 통과.",
    "ft_lead": "장시간 비행 후 덥고 혼잡한 입국 심사대에서 1~3시간 줄을 서는 것은 매우 힘든 일입니다. 5분 만에 통과하는 VIP 패스트트랙을 경험해보세요.",
    "ftc_no_t": "❌ 패스트트랙 미이용 시:",
    "ftc_no_d": "• 입국 심사대 60~180분 장시간 대기<br>• 픽업 차량 및 다음 일정 지연 위험<br>• 복잡한 비자 스탬프 카운터 직접 대기",
    "ftc_yes_t": "✅ Vietnam Visa Pass 패스트트랙 이용 시:",
    "ftc_yes_d": "• 비행기 출구 앞 전담 직원이 네임보드로 직접 영접<br>• 외교관/승무원 전용 패스트트랙 레인으로 직행<br>• 5~10분 만에 초고속 입국 및 수하물 수령 안내",
    "ft_btn_book": "⭐ VIP 패스트트랙 즉시 예약 ($70 / 1.2M ₫)",
    "ft_ov_t": "👑 5성급 외교관 전용 레인",
    "ft_ov_d": "호치민, 하노이, 다낭, 깜란, 푸꾸옥 공항",
    "schedule_subbadge": "📅 주간 정기 운행 스케줄",
    "schedule_title": "도시별 정기 출발",
    "schedule_title_grad": "운행 시간표",
    "schedule_desc": "최신형 레드 슬리핑 버스 및 7인승 VIP 단독 차량 정기 운행.",
    "sch_d1_b": "🚌 레드 슬리핑 코치",
    "sch_d1_t": "다낭 ⇄ 라오바오 국경",
    "sch_d1_d": "매주 화요일 & 토요일 | 출발: 01:45 | 복귀: 18:00",
    "sch_d2_b": "⭐ 7인승 VIP 전용 차량",
    "sch_d2_t": "다낭 ⇄ 라오바오 도어투도어",
    "sch_d2_d": "매일 운행 | 03:00 다낭 & 호이안 호텔 픽업",
    "sch_n1_b": "🚍 레드 슬리핑 코치",
    "sch_n1_t": "나트랑 ⇄ 보이 국경 (라오스)",
    "sch_n1_d": "매일 심야 운행 | 21:15 (Tran Phu) & 21:30 (Hon Chong)",
    "sch_n2_b": "🚍 레드 슬리핑 코치",
    "sch_n2_t": "나트랑 ⇄ 목바이 (캄보디아)",
    "sch_n2_d": "화, 목, 일 심야 운행 | 출발: 21:30 (Hon Chong)",
    "sch_h1_b": "👑 9-11인승 VIP 리무진",
    "sch_h1_t": "하노이 ⇄ 후응이 국경 (중국)",
    "sch_h1_d": "매일 운행 | 09:00 출발 | 19:00 복귀",
    "pricing_subbadge": "💎 공식 정찰제 요금표",
    "pricing_title": "투명하고 합리적인",
    "pricing_title_grad": "정찰 가격",
    "pricing_desc": "숨겨진 추가 요금 없음. 불승인 시 대행비 및 정부 수수료 100% 환불 보장.",
    "th_service": "서비스 구분",
    "th_route": "노선 및 세부 사양",
    "th_speed": "소요 시간 / 운행 주기",
    "th_price": "공식 요금",
    "rgb_title": "100% 사전 투명 정찰제 & 전액 환불 보장",
    "rgb_desc": "• <strong>추가 비용 0%:</strong> 차량, 국경 수속, 비자 대행 등 모든 요금을 출발 전 투명하게 공개합니다.<br>• <strong>대행비 100% 환불:</strong> 서비스 과실로 비자 불승인 시 대행 수수료를 100% 전액 환불합니다.<br>• <strong>정부 공과금 전액 환불:</strong> 서비스가 정상 진행되지 못한 경우 정부 수수료까지 100% 환불해 드립니다.",
    "rev_subbadge": "⭐ 실제 고객 후기",
    "rev_title": "15,000명 이상의",
    "rev_title_grad": "실제 이용 고객",
    "rev_desc": "다낭, 나트랑, 호치민, 하노이 거주 교민 및 여행자 평점 5.0★.",
    "terms_subbadge": "⚖️ 정식 법률 계약",
    "terms_title": "고객 서비스 이용약관",
    "terms_title_grad": "및 법적 동의서",
    "terms_desc": "베트남 현행 법률을 준수하는 공인 서비스 계약 및 100% 환불 정책.",
    "tm_h3": "비자 및 비자런 서비스 대행 표준 계약서",
    "tm_h3_sub": "개인 고객 대상 정식 약관 (Khách Lẻ)",
    "tm_doc_badge": "법적 구속력 있는 공인 계약",
    "tm_preamble": "<strong>관련 법률 근거:</strong><br>• 베트남 민법 제91/2015/QH13호;<br>• 베트남 상법 제36/2005/QH11호;<br>• 외국인 출입국 및 체류에 관한 법률 제47/2014/QH13호;<br>• 재무부 출입국 수수료에 관한 시행규칙 제28/2026/TT-BTC호.",
    "tm_a1_t": "제1조: 서비스의 범위",
    "tm_a1_sub": "업무 위임 및 비자 수속",
    "tm_a1_c1": "<strong>1.1 위임 범위:</strong> 고객(갑)은 Vietnam Visa Pass(을)에게 전자비자(E-비자) 및 국경 비자런 수속, 정부 수수료 대납 등의 업무를 위임합니다.",
    "tm_a1_c2": "<strong>1.2 세부 업무:</strong> 출입국 법률 자문, 서류 검토, 정부 포털 접수, 진행 상황 모니터링 및 승인 비자 즉시 교부.",
    "tm_a2_t": "제2조: 비용 구조, 정부 수수료 및 세금계산서",
    "tm_a2_sub": "비용 내역 및 전자 영수증",
    "tm_a2_c1": "<strong>2.1 비용 구성:</strong> 총 금액은 (1) 비자 대행 수수료와 (2) 정부 비자 인지대($25 USD 영수증 첨부)로 명확히 구분됩니다.",
    "tm_a2_c2": "<strong>2.2 부가가치세(VAT):</strong> 대행 수수료는 VAT가 포함되어 있으며 요청 시 전자세금계산서가 발행됩니다.",
    "tm_a34_t": "제3조 및 제4조: 권리, 의무 및 개인정보 100% 보호",
    "tm_a34_sub": "고객 책임 및 철저한 보안",
    "tm_a34_c1": "<strong>3.1 고객 의무:</strong> 정확한 여권 정보 제공, 출발 시간 엄수 및 당국의 요청 시 협조.",
    "tm_a34_c2": "<strong>4.1 보안 보장:</strong> 당사는 고객의 모든 개인정보를 출입국 당국 외 제3자에게 절대 유출하지 않고 철저히 보호합니다.",
    "tm_a5_t": "제5조: 서비스 결과 및 100% 환불 규정",
    "tm_a5_sub": "서비스료 및 정부 수수료 환불 정책",
    "tm_a5_c1": "<strong>5.1 국가 주권:</strong> 비자 발급 여부의 최종 결정권은 베트남 공안부 출입국관리국에 있습니다.",
    "tm_a5_c2": "<strong>5.2 100% 환불 정책:</strong> 서비스 과실로 불승인 시 <strong>대행료 100% 전액 환불</strong>을 보장하며, 서비스가 이행되지 않은 경우 <strong>정부 수수료까지 100% 전액 환불</strong>됩니다.",
    "tm_a5_c3": "<strong>5.3 취소 및 위조:</strong> 접수 후 일방적 취소는 불가하며 위조 서류 제출 시 계약이 해지됩니다.",
    "tm_a678_t": "제6조, 제7조, 제8조: 불가항력, 분쟁 해결 및 전자 계약 효력",
    "tm_a678_sub": "관할 법원 및 온라인 동의 효력",
    "tm_a678_c1": "<strong>6.1 불가항력:</strong> 천재지변, 국경 폐쇄, 법령 개정 등은 면책됩니다.",
    "tm_a678_c2": "<strong>7.1 분쟁 해결:</strong> 협의 해결을 원칙으로 하며 해결 불가 시 베트남 나트랑시 인민법원을 관할로 합니다.",
    "tm_a678_c3": "<strong>8.1 전자 동의:</strong> 웹사이트 또는 왓츠앱을 통한 예약 신청은 본 계약서에 서명한 것과 동일한 법적 효력을 갖습니다.",
    "tm_banner_t": "법적 보증 및 상호 동의",
    "tm_banner_d": "Vietnam Visa Pass의 서비스를 이용하시는 것은 상기 모든 이용약관에 동의하신 것으로 간주됩니다.",
    "faq_subbadge": "❓ 자주 묻는 질문",
    "faq_title": "비자런 & 비자 연장",
    "faq_title_grad": "궁금증 완벽 해결",
    "faq_desc": "Vietnam Visa Pass와 출발 전 확인해야 할 필수 정보.",
    "faq_q1": "1. 제 국적은 라오스와 캄보디아 중 어느 국경을 가야 하나요?",
    "faq_a1": "• <strong>나트랑 ⇄ 보이 국경 (라오스):</strong> <strong>한국, 러시아, 벨라루스, 말레이시아</strong> 국적자 추천 (라오스 무비자 입국 가능).<br>• <strong>나트랑 ⇄ 목바이 (캄보디아):</strong> <strong>미국, 영국, EU, 호주</strong> 국적자 추천 (캄보디아 도착비자 수속 용이).<br>• <strong>다낭 ⇄ 라오바오 (라오스):</strong> 라오바오 국제 국경은 <strong>국적 제한이 없으며 전 세계 모든 국적</strong>이 이용 가능합니다.",
    "faq_q2": "2. 국경에서 필요한 현금은 얼마인가요?",
    "faq_a2": "• <strong>라오스 국경 (보이 / 라오바오):</strong> <strong>140,000동</strong> 현금을 여권에 끼워 준비하세요 (베트남 출국 50k, 라오스 입국 20k, 라오스 출국 20k, 베트남 재입국 50k).<br>• <strong>캄보디아 국경 (목바이):</strong> 베트남 출입국비 약 50k-150k, 오토바이 셔틀 100k-150k, 캄보디아 비자비 약 $35-$50 준비.",
    "faq_q3": "3. 특별 심사 대상 국적의 추가 비용이 있나요?",
    "faq_a3": "출입국 당국 규정에 따라 특수 국적은 추가 심사료가 발생합니다: <em>이집트, 알제리, 모로코, 튀니지, 스리랑카</em> <strong>+850,000동</strong>; <em>튀르키예</em> <strong>+650,000동</strong>.",
    "faq_q4": "4. 긴급 E-비자 신청용 출국 도장 사진은 어떻게 찍나요?",
    "faq_a4": "출국 도장을 받자마자 여권 첫 페이지를 <strong>네 모서리가 다 나오게, 빛 반사 없이, 글자를 손가락으로 가리지 않고 선명하게</strong> 촬영하여 VVP 톡방에 전송합니다.",
    "faq_q5": "5. 100% 환불 및 정부 수수료 환불은 어떻게 진행되나요?",
    "faq_a5": "당사 과실로 인한 비자 불승인 시 <strong>100% 대행료 환불</strong>을 해드리며, 서비스가 정상 진행되지 못한 경우 <strong>정부 공과금까지 100% 전액 환불</strong>됩니다.",
    "contact_subbadge": "⚡ 24시간 실시간 상담",
    "contact_title": "비자런 예약 &",
    "contact_title_grad": "실시간 견적 문의",
    "contact_desc": "아래 양식을 작성하시거나 왓츠앱으로 즉시 문의주시면 5분 내로 답변드립니다.",
    "c_hq_t": "본사 운영 본부:",
    "c_pick_t": "나트랑 시내 탑승 장소:",
    "c_wa_t": "핫라인 / 왓츠앱 24시:",
    "c_tg_t": "공식 텔레그램 채널:",
    "f_title": "VIP 빠른 상담 및 예약 신청서",
    "form_name_lbl": "성함 (영문 또는 한글) *",
    "form_phone_lbl": "연락처 / 왓츠앱 *",
    "form_nat_lbl": "국적 *",
    "form_city_lbl": "현재 체류 도시",
    "form_service_lbl": "신청 희망 서비스 *",
    "form_notes_lbl": "추가 요청사항 (비자 만료일, 희망 출발일 등)",
    "form_agree_lbl": "Vietnam Visa Pass의 <a href=\"#terms\" onclick=\"openTermsModal(event)\" class=\"map-link\">서비스 이용약관</a> 내용을 확인하였으며 이에 동의합니다.",
    "form_submit_btn": "📨 왓츠앱으로 예약 신청 및 동의서 전송",
    "form_note": "🔒 고객님의 개인정보는 서비스 이용약관 제4조에 의거하여 100% 철저히 보호됩니다.",
    "pm_subbadge": "💳 안전한 공식 결제",
    "payment_title": "공식 법인 결제 계좌 안내",
    "payment_desc": "Vietcombank 공식 법인 계좌 입금 시 실시간 예약 확정.",
    "pm_acc_num": "계좌 번호:",
    "pm_holder": "예금주 (법인명):",
    "pm_branch": "개설 지점:",
    "pm_methods_t": "이용 가능한 결제 수단",
    "pm_m1": "<span>✓</span> Napas 247 실시간 계좌이체 (QR코드)",
    "pm_m2": "<span>✓</span> 해외 송금 (SWIFT / IBAN)",
    "pm_m3": "<span>✓</span> 해외 신용카드 (Visa, Mastercard, Wise)",
    "pm_m4": "<span>✓</span> 출발 당일 탑승 장소 현금 결제",
    "ft_desc": "Vietnam Visa Pass (VVP) — 베트남 1위 당일 초고속 비자런 & 긴급 1시간 E-비자 전문 서비스.",
    "ft_col_routes": "주요 비자런 노선",
    "ft_col_legal": "법적 고지 및 결제",
    "ft_col_support": "24시간 전담 고객센터",
    "ftc_no_1": "• 입국 심사대 60~180분 장시간 대기",
    "ftc_no_2": "• 픽업 차량 및 다음 일정 지연 위험",
    "ftc_no_3": "• 복잡한 비자 스탬프 카운터 직접 대기",
    "ftc_yes_1": "• 비행기 출구 앞 전담 직원이 네임보드로 직접 영접",
    "ftc_yes_2": "• 외교관/승무원 전용 패스트트랙 레인으로 직행",
    "ftc_yes_3": "• 5~10분 만에 초고속 입국 및 수하물 수령 안내",
    "nav_reviews": "후기",
    "sch_th_days": "운행 요일",
    "sch_th_dep": "출발 시간 및 장소",
    "sch_th_dur": "귀환 예정 시간",
    "sch_th_fare": "패키지 요금",
    "sch_th_route": "노선 및 국경",
    "sch_th_status": "예약 상태",
    "sch_th_vehicle": "차량 종류",
    "sch_th_visa": "E-비자 수령"
  },
  "vi": {
    "topbar_badge": "⚡ <strong>VIETNAM VISA PASS</strong> — Mạng Lưới Visa Run Tốc Hành & E-Visa 1H Uy Tín Hàng Đầu Việt Nam!",
    "topbar_hotline": "📞 Hotline / WhatsApp: ",
    "nav_services": "Dịch Vụ",
    "nav_calculator": "Tính Giá Nhanh",
    "nav_guide": "Cẩm Nang Cửa Khẩu",
    "nav_fasttrack": "VIP Fast Track",
    "nav_schedule": "Lịch Khởi Hành",
    "nav_pricing": "Bảng Giá",
    "nav_terms": "Thỏa Thuận",
    "nav_payment": "Thanh Toán",
    "nav_contact": "Đặt Chỗ 24/7",
    "hero_tag": "⚡ VIETNAM VISA PASS",
    "hero_badge_guarantee": "🛡️ 100% Hoàn Phí Dịch Vụ & Lệ Phí Nhà Nước Nếu Lỗi",
    "hero_badge_transparency": "💎 100% Giá Minh Bạch Trước Chuyến Đi",
    "hero_title_1": "Visa Run & Gia Hạn E-Visa",
    "hero_title_2": "Siêu Tốc 1H · Trọn Gói · Tiết Kiệm",
    "hero_desc": "Tổ hợp <strong>Visa Run Xe Giường Nằm & VIP Limousine</strong> hàng đầu từ <strong>Đà Nẵng, Nha Trang, Hà Nội</strong> đến Cửa khẩu Lào (Lao Bảo, Bờ Y), Campuchia (Mộc Bài) & Trung Quốc (Hữu Nghị). Xử lý <strong>E-Visa khẩn cấp 1h – 4h</strong> và <strong>VIP Fast Track Sân Bay $70</strong>.",
    "hero_cta_calc": "⚡ Tính Giá & Đặt Chỗ Ngay",
    "hero_cta_wa": "Chat WhatsApp 24/7",
    "hero_cta_guide": "📖 Cẩm Nang Cửa Khẩu",
    "stat_clients": "Khách Quốc Tế Phục Vụ",
    "stat_speed_num": "1 Giờ",
    "stat_speed": "E-Visa Cực Khẩn Nhanh Nhất",
    "stat_success": "Tỷ Lệ Xuất Nhập Cảnh Thành Công",
    "stat_refund": "Bảo Hành Hoàn Phí Tuyệt Đối",
    "mq_1": "⚡ VIETNAM VISA PASS — Đơn vị cung cấp Visa Run Tốc Hành hàng đầu",
    "mq_2": "🚀 E-Visa khẩn cấp 1h – 4h có ngay trong ngày tại cửa khẩu",
    "mq_3": "🚌 Khởi hành liên tục từ Đà Nẵng, Nha Trang, Hà Nội, TP.HCM",
    "mq_4": "👑 VIP Fast Track sân bay Tân Sơn Nhất, Nội Bài, Đà Nẵng, Cam Ranh",
    "mq_5": "💯 100% Minh bạch chi phí và bảo đảm hoàn tiền tuyệt đối",
    "services_subbadge": "⚡ DỊCH VỤ TRỌNG TÂM VIP",
    "services_title": "Tốc Độ, Bảo Mật &",
    "services_title_grad": "Trải Nghiệm Chuẩn 5 Sao",
    "services_desc": "Các gói giải pháp trọn gói từ vượt biên gia hạn visa, cấp visa điện tử cực khẩn cho đến đón tiễn ưu tiên tại sân bay quốc tế.",
    "sc_badge_1": "🚌 Hàng Ngày & Định Kỳ",
    "sc_title_1": "Visa Run Xe Giường Nằm & Limousine",
    "sc_desc_1": "Chuyến đi êm ái xuyên biên giới đến Cửa khẩu Lao Bảo (Lào), Bờ Y (Lào), Mộc Bài (Campuchia) và Hữu Nghị (Trung Quốc).",
    "sc_f1_1": "<span>✓</span> Giường nằm bọc da 2m, rèm riêng tư, cổng sạc USB",
    "sc_f1_2": "<span>✓</span> Điều hòa mát lạnh, nước uống và Wi-Fi miễn phí",
    "sc_f1_3": "<span>✓</span> Đội ngũ hướng dẫn viên hỗ trợ thủ tục tại cửa khẩu",
    "sc_btn_1": "Tính Giá Chuyến Đi →",
    "sc_badge_2": "⚡ Khẩn 1h – 4h",
    "sc_title_2": "Cấp E-Visa Khẩn Cấp 90 Ngày",
    "sc_desc_2": "Xử lý cấp tốc hồ sơ thị thực điện tử Việt Nam cho khách sắp hết hạn visa hoặc đang ở tại cửa khẩu biên giới.",
    "sc_f2_1": "<span>✓</span> Tốc độ siêu tốc: 1h, 4h, 24h, 2 ngày hoặc 5-7 ngày",
    "sc_f2_2": "<span>✓</span> Hỗ trợ cả diện Single (1 lần) và Multi (nhiều lần)",
    "sc_f2_3": "<span>✓</span> 100% Hoàn phí dịch vụ và lệ phí nhà nước nếu không hoàn thành",
    "sc_btn_2": "Xem Bảng Giá E-Visa →",
    "sc_badge_3": "👑 Đặc Quyền Ngoại Giao",
    "sc_title_3": "VIP Fast Track Sân Bay ($70 / 1.2M ₫)",
    "sc_desc_3": "Trải nghiệm dịch vụ đón tiếp VIP tại các sân bay Tân Sơn Nhất (SGN), Nội Bài (HAN), Đà Nẵng (DAD), Cam Ranh (CXR), Phú Quốc (PQC).",
    "sc_f3_1": "<span>✓</span> Nhân viên đón tại cửa máy bay với bảng tên riêng",
    "sc_f3_2": "<span>✓</span> Đi thẳng qua Làn Ưu Tiên Ngoại Giao (Priority Lane)",
    "sc_f3_3": "<span>✓</span> Xong thủ tục chỉ sau 5–10 phút, không xếp hàng",
    "sc_btn_3": "Chi Tiết Fast Track →",
    "calc_subbadge": "⚡ CÔNG CỤ TÍNH GIÁ TỐC HÀNH",
    "calc_title": "Báo Giá Trọn Gói &",
    "calc_title_grad": "Xác Nhận Giữ Chỗ Tức Thì",
    "calc_desc": "Hệ thống tính giá niêm yết từ Vietnam Visa Pass. Không phụ phí ẩn, minh bạch 100%.",
    "calc_lbl_city": "Chọn thành phố xuất phát:",
    "calc_lbl_service": "Chọn phương tiện & tuyến đường:",
    "calc_lbl_evisa": "Gói E-Visa Việt Nam (Tùy chọn tốc độ xử lý):",
    "evisa_opt_none": "Chưa cần E-Visa (Đã có sẵn / Miễn thị thực 45 ngày)",
    "evisa_opt_std": "E-Visa 90 ngày Tiêu chuẩn (5–7 ngày làm việc) — $45 / 1.200.000 ₫",
    "evisa_opt_2d": "E-Visa 90 ngày Khẩn (2 ngày làm việc) — $100 / 2.600.000 ₫",
    "evisa_opt_1d": "E-Visa 90 ngày Cấp tốc (1 ngày / 24h) — $110 / 2.850.000 ₫",
    "evisa_opt_4h": "⚡ E-Visa 90 ngày Siêu tốc (3–4 Giờ – Cùng ngày Visa Run) — $120 / 3.100.000 ₫",
    "evisa_opt_1h": "🚀 E-Visa Cực Khẩn Thần Tốc (1–2 Giờ tại cửa khẩu) — $180 / 4.600.000 ₫",
    "evisa_multi_chk": "Nâng cấp E-Visa Nhiều Lần Nhập Cảnh (Multiple Entry): <strong>+$25 (~650.000 ₫)</strong>",
    "calc_sum_label": "Tổng chi phí ước tính trọn gói:",
    "calc_terms_agree": "⚖️ Đặt dịch vụ đồng nghĩa bạn đồng ý với <a href=\"#terms\" onclick=\"openTermsModal(event)\" class=\"map-link\">Thỏa thuận dịch vụ khách hàng</a>.",
    "calc_btn_wa": "Đặt Chỗ Qua WhatsApp",
    "calc_btn_tg": "Đặt Chỗ Qua Telegram",
    "guide_subbadge": "📖 CẨM NANG CỬA KHẨU THỰC TẾ",
    "guide_title": "Quy Trình Vượt Biên",
    "guide_title_grad": "Từng Tuyến Đường",
    "guide_desc": "Hướng dẫn từng bước chuẩn xác từ đội ngũ chuyên gia Vietnam Visa Pass.",
    "tab_hanoi": "📍 Tuyến Hà Nội ⇄ Hữu Nghị (TQ)",
    "tab_nhatrang_laos": "📍 Nha Trang ⇄ Bờ Y (Lào)",
    "tab_nhatrang_cam": "📍 Nha Trang ⇄ Mộc Bài (Cam)",
    "tab_danang_laos": "📍 Đà Nẵng ⇄ Lao Bảo (Lào)",
    "g_badge_popular": "Tuyến Phổ Biến",
    "g_badge_ru_kr": "Khuyên dùng cho Nga / Hàn / Belarus",
    "g_badge_eu_us": "Khuyên dùng cho Mỹ / Anh / Châu Âu",
    "g_badge_all_nat": "Mở cho TẤT CẢ Quốc Tịch Toàn Cầu",
    "g1_title": "Hành Trình Visa Run: Hà Nội ⇄ Cửa Khẩu Quốc Tế Hữu Nghị (TQ)",
    "g1_sub": "VIP Limousine 9-11 chỗ · Khởi hành: 09:00 Sáng · Về trong ngày: 19:00 Tối",
    "g1_s1_t": "Đón khách tại Hà Nội:",
    "g1_s1_d": "Xe VIP Limousine đón tại Văn phòng điều hành Hà Nội. Vui lòng có mặt trước 15-20 phút.",
    "g1_s2_t": "Đến Bến Xe Cửa Khẩu & Xuất Cảnh Việt Nam:",
    "g1_s2_d": "Xe đến bến Bến xe Xuân Cương. Đi xe điện hoặc đi bộ 700m đến Cửa khẩu Hữu Nghị. Xuất trình hộ chiếu để nhận dấu xuất cảnh Việt Nam.",
    "g_stamp_req_t": "📸 Yêu cầu quan trọng:",
    "g_stamp_req_d": "Chụp ảnh trang đầu tiên có dấu xuất cảnh gửi vào nhóm chat (chụp đủ 4 góc, không chói sáng, không có ngón tay che thông tin) để Vietnam Visa Pass tiến hành nộp hồ sơ E-Visa khẩn 4 tiếng.",
    "g1_s3_t": "Thủ Tục Phía Trung Quốc & Nghỉ Ngơi:",
    "g1_s3_d": "Đi bộ 800m sang phía Trung Quốc, xuất trình hộ chiếu và điền tờ khai nhập cảnh/xuất cảnh. Sau đó quay lại khu vực biên giới phía Việt Nam chờ nhận file visa.",
    "g1_s4_t": "Nhận E-Visa & Tái Nhập Cảnh Việt Nam:",
    "g1_s4_d": "VVP gửi E-Visa vào nhóm chat. Bạn vào cửa khẩu, xuất trình hộ chiếu và E-Visa trên màn hình điện thoại để nhận dấu nhập cảnh 90 ngày.",
    "g1_s5_t": "Đón Xe Về Lại Hà Nội:",
    "g1_s5_d": "18:00 xe trung chuyển đón tại Ga hành khách quốc tế Xuân Cương ➔ 19:00 lên xe VIP Limousine khởi hành về lại Hà Nội.",
    "g_warn_t": "Lưu Ý Quan Trọng Khi Nhận Lại Hộ Chiếu Tại Cửa Khẩu:",
    "g_warn_d": "Hiện nay cán bộ Phòng Quản lý xuất nhập cảnh tại các cửa khẩu thường làm việc trong tình trạng quá tải, rất dễ xảy ra trường hợp ghi nhầm ngày tháng hết hạn trên con dấu. Quý khách vui lòng kiểm tra thật kỹ ngày hết hạn trên con dấu trước khi rời khỏi quầy thủ tục!",
    "g2_title": "Hành Trình Visa Run: Nha Trang ⇄ Cửa Khẩu Bờ Y (Lào)",
    "g2_sub": "Khởi hành hàng đêm bằng Xe Giường Nằm Đỏ VIP · Miễn thị thực 45 ngày hoặc E-Visa 90 ngày",
    "g2_s1_t": "Điểm đón tại Nha Trang:",
    "g2_s1_d": "• Điểm 1 (21:15): Số 4 Trần Phú – Mường Thanh (Bờ Kè)<br>• Điểm 2 (21:30): 40 Hòn Chồng, Bắc Nha Trang<br>• Nhận diện: Xe Giường Nằm Màu Đỏ cao cấp | Mật khẩu Wi-Fi xe: 19002679",
    "g2_s2_t": "Đến Cửa Khẩu Bờ Y & Ăn Sáng:",
    "g2_s2_d": "Đến cửa khẩu lúc 06:00, xuống xe thưởng thức cà phê/ăn sáng. 07:30 bắt đầu làm thủ tục đóng dấu tại cửa khẩu Lào.",
    "g2_s3_t": "Thủ Tục Cửa Khẩu (Lào ⇄ Việt Nam):",
    "g2_s3_d": "Xuất cảnh VN ➔ Nhập cảnh Lào ➔ Xuất cảnh Lào ➔ Nhập cảnh lại VN. Chuẩn bị 140.000 ₫ kẹp trong hộ chiếu (50k xuất VN, 20k vào Lào, 20k ra Lào, 50k vào VN).",
    "g2_s4_t": "Lên Xe Về Lại Nha Trang:",
    "g2_s4_d": "Lên xe giường nằm màu đỏ về lại Nha Trang, đến nơi khoảng 21:00-21:30 tối cùng ngày với visa mới 90 ngày.",
    "g3_title": "Hành Trình Visa Run: Nha Trang ⇄ Mộc Bài (Campuchia)",
    "g3_sub": "Xe Giường Nằm Đỏ VIP (Tối T3, T5, CN) · Tối ưu cho khách Âu Mỹ & Quốc tế",
    "g3_s1_t": "Khởi hành từ Nha Trang:",
    "g3_s1_d": "21:30 tối đón tại 40 Hòn Chồng. Xe giường nằm êm ái, đầy đủ chăn đắp, máy lạnh và cổng sạc.",
    "g3_s2_t": "Đến Cửa Khẩu Mộc Bài & Xuất Cảnh VN:",
    "g3_s2_d": "Cửa khẩu mở lúc 07:30. Đóng dấu xuất cảnh Việt Nam và gửi ảnh dấu xuất cảnh cho VVP trước 08:00 sáng.",
    "g3_s3_t": "Mua Visa Campuchia & Chờ E-Visa Việt Nam:",
    "g3_s3_d": "Đi xe ôm hoặc đi bộ sang trạm Campuchia, mua visa Campuchia (~$35–$50). Nghỉ tại quán cà phê có Wi-Fi trong khi VVP cấp E-Visa khẩn 4h. Nhận visa trước 12:00 trưa và xếp hàng nhập cảnh lại Việt Nam.",
    "g4_title": "Hành Trình Visa Run: Đà Nẵng ⇄ Lao Bảo (Lào)",
    "g4_sub": "Lựa chọn Xe Giường Nằm Đỏ (01:45 sáng) hoặc VIP Car riêng 7 chỗ (03:00 sáng) · Về trong ngày",
    "g4_s1_t": "Khởi hành từ Đà Nẵng:",
    "g4_s1_d": "• <strong>Xe Giường Nằm Đỏ (T3 & T7):</strong> 01:45 sáng đón tại điểm hẹn trung tâm.<br>• <strong>VIP Car riêng (Hàng ngày):</strong> 03:00 sáng đón tận cửa khách sạn/villa tại Đà Nẵng & Hội An.",
    "g4_s2_t": "Làm Thủ Tục Cửa Khẩu Lao Bảo & Check-in Cột Mốc 605:",
    "g4_s2_d": "Đến Lao Bảo, chiêm ngưỡng Cổng vòm Cửa khẩu Quốc tế Lao Bảo & Cột mốc biên giới 605 (Việt Nam – Lào), đóng dấu xuất cảnh VN và sang trạm Lào. Với E-Visa Ultra Fast 3-4h, visa được duyệt ngay trong buổi sáng để đóng dấu nhập cảnh 90 ngày.",
    "g4_s3_t": "Khởi Hành Về Lại Đà Nẵng:",
    "g4_s3_d": "Lên xe về lại Đà Nẵng, về đến thành phố khoảng 17:30–18:30 chiều cùng ngày.",
    "fasttrack_subbadge": "⭐ DỊCH VỤ VIP SÂN BAY",
    "fasttrack_title": "VIP Fast Track Sân Bay",
    "fasttrack_title_grad": "Bỏ Qua Hàng Chờ 100%",
    "fasttrack_desc": "Dịch vụ đón tiễn ưu tiên tại sân bay Đà Nẵng (DAD), Cam Ranh (CXR), Nội Bài (HAN) và Tân Sơn Nhất (SGN).",
    "ft_lead": "Sau chuyến bay dài mệt mỏi, việc phải đứng xếp hàng 1–3 tiếng giữa hàng trăm hành khách tại quầy thủ tục sân bay là một cơn ác mộng. Dịch vụ đón tiếp ưu tiên VIP giúp bạn hoàn tất thủ tục chỉ sau 5 phút.",
    "ftc_no_t": "❌ Không có Fast Track:",
    "ftc_no_d": "• Xếp hàng chờ đợi 60 – 180 phút mệt mỏi<br>• Kiệt sức sau chặng bay dài xuyên lục địa<br>• Tự xoay xở thủ tục rắc rối nếu có trục trặc visa",
    "ftc_yes_t": "✅ Với Vietnam Visa Pass Fast Track:",
    "ftc_yes_d": "• Nhân viên đón tại cửa máy bay với bảng tên riêng<br>• Đi thẳng qua Làn Ưu Tiên Ngoại Giao (Priority Lane)<br>• Xong thủ tục nhập cảnh chỉ sau 5 – 10 phút, hỗ trợ hành lý chu đáo",
    "ft_btn_book": "⭐ Đặt VIP Fast Track Ngay ($70 / 1.2M ₫)",
    "ft_ov_t": "👑 Làn Ưu Tiên Ngoại Giao 5 Sao",
    "ft_ov_d": "Áp dụng tại Tân Sơn Nhất, Nội Bài, Đà Nẵng, Cam Ranh & Phú Quốc",
    "schedule_subbadge": "📅 LỊCH KHỞI HÀNH HÀNG TUẦN",
    "schedule_title": "Thời Gian Khởi Hành",
    "schedule_title_grad": "Cố Định Từng Tuyến",
    "schedule_desc": "Tần suất xe dày đặc, đảm bảo đúng giờ tuyệt đối với đội xe giường nằm đỏ cao cấp.",
    "sch_d1_b": "🚌 Xe Giường Nằm Đỏ",
    "sch_d1_t": "Đà Nẵng ⇄ Cửa Khẩu Lao Bảo",
    "sch_d1_d": "Thứ 3 & Thứ 7 Hàng Tuần | Khởi hành: 01:45 sáng | Về: 18:00",
    "sch_d2_b": "⭐ VIP Car 7 Chỗ Riêng",
    "sch_d2_t": "Đà Nẵng ⇄ Lao Bảo Tận Nơi",
    "sch_d2_d": "Khởi hành hàng ngày | 03:00 sáng đón tận nơi tại Đà Nẵng & Hội An",
    "sch_n1_b": "🚍 Xe Giường Nằm Đỏ",
    "sch_n1_t": "Nha Trang ⇄ Cửa Khẩu Bờ Y (Lào)",
    "sch_n1_d": "Hàng Đêm | 21:15 (Số 4 Trần Phú) & 21:30 (40 Hòn Chồng)",
    "sch_n2_b": "🚍 Xe Giường Nằm Đỏ",
    "sch_n2_t": "Nha Trang ⇄ Mộc Bài (Campuchia)",
    "sch_n2_d": "Tối Thứ 3, 5, CN | Khởi hành: 21:30 (40 Hòn Chồng)",
    "sch_h1_b": "👑 VIP Limousine 9-11 Chỗ",
    "sch_h1_t": "Hà Nội ⇄ Cửa Khẩu Hữu Nghị (TQ)",
    "sch_h1_d": "Hàng Ngày | 09:00 sáng xuất phát | 19:00 về lại Hà Nội",
    "pricing_subbadge": "💎 BẢNG GIÁ NIÊM YẾT",
    "pricing_title": "Bảng Giá Dịch Vụ",
    "pricing_title_grad": "Minh Bạch & Trọn Gói",
    "pricing_desc": "Cam kết không phát sinh chi phí ẩn. Hoàn tiền 100% và hoàn trả lệ phí nhà nước nếu không hoàn thành.",
    "th_service": "Loại Dịch Vụ",
    "th_route": "Tuyến Đường & Quy Chuẩn",
    "th_speed": "Thời Gian / Tần Suất",
    "th_price": "Giá Niêm Yết",
    "rgb_title": "100% Giá Cả Minh Bạch & Cam Kết Hoàn Trả Tuyệt Đối",
    "rgb_desc": "• <strong>Không phụ phí ẩn:</strong> Mọi chi phí xe cộ, thủ tục cửa khẩu và visa đều được công khai trước chuyến đi.<br>• <strong>Hoàn 100% phí dịch vụ:</strong> Hoàn lại 100% phí dịch vụ tư vấn nếu visa bị từ chối do lỗi xử lý.<br>• <strong>Hoàn lại toàn bộ Lệ phí Nhà nước:</strong> Hoàn lại 100% lệ phí nhà nước nếu không thực hiện được dịch vụ.",
    "rev_subbadge": "⭐ ĐÁNH GIÁ THỰC TẾ",
    "rev_title": "Hơn 15,000+ Khách Hàng",
    "rev_title_grad": "Hài Lòng",
    "rev_desc": "Đánh giá 5.0★ từ cộng đồng người nước ngoài tại Đà Nẵng, Nha Trang, TP.HCM & Hà Nội.",
    "terms_subbadge": "⚖️ THỎA THUẬN PHÁP LÝ CHÍNH THỨC",
    "terms_title": "Điều Khoản",
    "terms_title_grad": "Thỏa Thuận Dịch Vụ",
    "terms_desc": "Hợp đồng dịch vụ tư vấn và làm thủ tục Visa chuẩn mực theo quy định của Pháp luật Việt Nam.",
    "tm_h3": "HỢP ĐỒNG CUNG CẤP DỊCH VỤ TƯ VẤN VÀ LÀM HỒ SƠ VISA",
    "tm_h3_sub": "Áp dụng cho Khách hàng cá nhân (Khách Lẻ)",
    "tm_doc_badge": "Thỏa thuận pháp lý chính thức",
    "tm_preamble": "<strong>Căn cứ pháp lý áp dụng:</strong><br>• Bộ luật Dân sự số 91/2015/QH13 ngày 24/11/2015;<br>• Luật Thương mại số 36/2005/QH11 ngày 14/06/2005;<br>• Luật Nhập cảnh, xuất cảnh, quá cảnh, cư trú của người nước ngoài số 47/2014/QH13;<br>• Thông tư số 28/2026/TT-BTC ngày 27/03/2026 quy định về phí và lệ phí xuất nhập cảnh.",
    "tm_a1_t": "ĐIỀU 1: NỘI DUNG VÀ PHẠM VI DỊCH VỤ",
    "tm_a1_sub": "Ủy quyền & Làm hồ sơ",
    "tm_a1_c1": "<strong>1.1 Phạm vi ủy quyền:</strong> Khách hàng (Bên A) ủy quyền và Vietnam Visa Pass (Bên B) thực hiện dịch vụ tư vấn, chuẩn bị, hoàn thiện hồ sơ và nộp lệ phí xin cấp thị thực điện tử (E-Visa) và Visa Run.",
    "tm_a1_c2": "<strong>1.2 Nội dung công việc:</strong> Tư vấn quy định; hướng dẫn chuẩn bị giấy tờ; khai trực tuyến; theo dõi tiến trình và bàn giao kết quả visa ngay khi được cấp.",
    "tm_a2_t": "ĐIỀU 2: PHÍ DỊCH VỤ, LỆ PHÍ NHÀ NƯỚC & HÓA ĐƠN VAT",
    "tm_a2_sub": "Bóc tách chi phí & Hóa đơn",
    "tm_a2_c1": "<strong>2.1 Cơ cấu chi phí:</strong> Tổng chi phí bóc tách minh bạch: (1) Phí dịch vụ tư vấn & làm hồ sơ; và (2) Lệ phí nộp Nhà nước ($25 USD thu hộ - chi hộ theo Thông tư 28/2026/TT-BTC có biên lai cổng dịch vụ công).",
    "tm_a2_c2": "<strong>2.2 Thuế GTGT (VAT):</strong> Phí dịch vụ đã bao gồm thuế GTGT. Bên B xuất hóa đơn điện tử GTGT hợp pháp cho Bên A trong vòng 03 ngày làm việc.",
    "tm_a34_t": "ĐIỀU 3 & 4: QUYỀN, NGHĨA VỤ & BẢO MẬT THÔNG TIN 100%",
    "tm_a34_sub": "Trách nhiệm khách hàng & Cam kết an toàn dữ liệu",
    "tm_a34_c1": "<strong>3.1 Nghĩa vụ Bên A:</strong> Cung cấp thông tin trung thực, chính xác; chịu trách nhiệm trước pháp luật về tính chân thật của hồ sơ; có mặt đúng giờ.",
    "tm_a34_c2": "<strong>4.1 Cam kết bảo mật:</strong> Bên B bảo quản an toàn tài liệu và bảo mật tuyệt đối 100% thông tin cá nhân của khách hàng, không cung cấp cho bên thứ ba.",
    "tm_a5_t": "ĐIỀU 5: KẾT QUẢ DỊCH VỤ & CHÍNH SÁCH HOÀN TIỀN 100%",
    "tm_a5_sub": "Hoàn phí dịch vụ & Hoàn lệ phí Nhà nước",
    "tm_a5_c1": "<strong>5.1 Thẩm quyền Nhà nước:</strong> Quyết định cấp visa hoàn toàn thuộc Cục Quản lý Xuất nhập cảnh - Bộ Công an.",
    "tm_a5_c2": "<strong>5.2 Chính sách hoàn tiền 100%:</strong> Nếu hồ sơ bị từ chối do lỗi dịch vụ hoặc nguyên nhân khách quan: Bên B <strong>hoàn trả 100% Phí dịch vụ</strong> trong 05 ngày làm việc. Nếu dịch vụ không thực hiện được: <strong>Hoàn trả lại 100% cả Lệ phí Nhà nước</strong>.",
    "tm_a5_c3": "<strong>5.3 Hủy ngang & Hồ sơ giả:</strong> Hủy hợp đồng sau khi đã nộp hồ sơ sẽ không được hoàn phí. Gian dối hồ sơ sẽ bị chấm dứt hợp đồng ngay lập tức và tự chịu trách nhiệm trước pháp luật.",
    "tm_a678_t": "ĐIỀU 6, 7 & 8: BẤT KHẢ KHÁNG, TRANH CHẤP & THỎA THUẬN ĐIỆN TỬ",
    "tm_a678_sub": "Tòa án giải quyết & Hiệu lực trực tuyến",
    "tm_a678_c1": "<strong>6.1 Bất khả kháng:</strong> Thiên tai, dịch bệnh, chiến tranh, đóng cửa biên giới được miễn trừ trách nhiệm bồi thường.",
    "tm_a678_c2": "<strong>7.1 Giải quyết tranh chấp:</strong> Thương lượng hòa giải, hoặc do Tòa án nhân dân có thẩm quyền tại TP. Nha Trang, Khánh Hòa giải quyết.",
    "tm_a678_c3": "<strong>8.1 Thỏa thuận điện tử:</strong> Nhấn nút Đặt chỗ hoặc gửi yêu cầu trên website/WhatsApp có giá trị pháp lý ràng buộc tương đương hợp đồng văn bản.",
    "tm_banner_t": "Bảo Chứng Pháp Lý & Đồng Thuận Dịch Vụ",
    "tm_banner_d": "Khi quý khách đặt chuyến đi hoặc sử dụng dịch vụ tại Vietnam Visa Pass, quý khách và chúng tôi cùng đồng thuận tuân thủ các điều khoản hợp đồng dịch vụ công khai trên.",
    "faq_subbadge": "❓ CÂU HỎI THƯỜNG GẶP",
    "faq_title": "Giải Đáp Thắc Mắc",
    "faq_title_grad": "Về Visa & Cửa Khẩu",
    "faq_desc": "Mọi điều bạn cần biết trước khi khởi hành chuyến đi gia hạn visa cùng Vietnam Visa Pass.",
    "faq_q1": "1. Quốc tịch của tôi nên đi Visa Run sang Lào hay Campuchia? Quy định phân loại cửa khẩu ra sao?",
    "faq_a1": "• <strong>Tuyến Nha Trang ⇄ Cửa khẩu Bờ Y (Lào):</strong> Khuyên dùng cho khách quốc tịch <strong>Nga, Hàn Quốc, Belarus, Malaysia, Séc...</strong> do được miễn thị thực trực tiếp vào Lào.<br>• <strong>Tuyến Nha Trang ⇄ Mộc Bài (Campuchia):</strong> Khuyên dùng cho khách quốc tịch <strong>Mỹ, Anh, Úc, Ukraine, Uzbekistan, Châu Âu...</strong> do thủ tục cấp visa tại cửa khẩu Campuchia rất thuận tiện.<br>• <strong>Tuyến Đà Nẵng ⇄ Lao Bảo (Lào):</strong> Lao Bảo là Cửa khẩu Quốc tế và <strong>KHÔNG ÁP DỤNG phân loại quốc tịch</strong> — tiếp nhận và làm thủ tục cho <strong>TẤT CẢ mọi quốc tịch trên toàn cầu</strong>.",
    "faq_q2": "2. Chi phí chuẩn bị tiền mặt tại các cửa khẩu là bao nhiêu?",
    "faq_a2": "• <strong>Cửa khẩu Lào (Bờ Y / Lao Bảo):</strong> Chuẩn bị sẵn <strong>140.000 ₫</strong> (Xuất cảnh VN: 50k, Nhập cảnh Lào: 20k, Xuất cảnh Lào: 20k, Nhập cảnh lại VN: 50k). Kẹp sẵn tiền vào hộ chiếu.<br>• <strong>Cửa khẩu Campuchia (Mộc Bài):</strong> Chuẩn bị 50k-150k phí qua cửa khẩu VN, 100k-150k xe ôm sang trạm Campuchia, và ~35$ – 50$ mua visa Campuchia.",
    "faq_q3": "3. Có phụ phí đối với các quốc tịch khó (Restrictive Nationalities) không?",
    "faq_a3": "Theo quy định của Cục Quản lý Xuất nhập cảnh, các quốc tịch đặc biệt có phụ phí thẩm định hồ sơ: <strong>+850.000 ₫</strong> đối với công dân <em>Ai Cập, Algeria, Morocco, Tunisia, Sri Lanka</em>; và <strong>+650.000 ₫</strong> đối với công dân <em>Thổ Nhĩ Kỳ</em>.",
    "faq_q4": "4. Tôi cần chụp ảnh dấu xuất cảnh như thế nào để làm E-Visa khẩn?",
    "faq_a4": "Ngay sau khi nhận dấu xuất cảnh, hãy chụp ảnh trang đầu tiên của hộ chiếu: <strong>lấy đủ 4 góc, hình ảnh rõ nét, không bị lóa ánh sáng đèn và không để ngón tay che chữ</strong>. Gửi ngay vào nhóm chat VVP.",
    "faq_q5": "5. Chính sách hoàn tiền 100% và hoàn lệ phí Nhà nước được áp dụng ra sao?",
    "faq_a5": "Chúng tôi cam kết <strong>hoàn trả 100%</strong> phí dịch vụ nếu visa không được cấp do lỗi xử lý. Trường hợp không thực hiện được dịch vụ, <strong>toàn bộ Lệ phí nộp Nhà nước cũng được hoàn trả 100%</strong> theo Điều 5 của Thỏa thuận Dịch vụ.",
    "contact_subbadge": "⚡ LIÊN HỆ TRỰC TIẾP 24/7",
    "contact_title": "Đặt Lịch &",
    "contact_title_grad": "Nhận Báo Giá Ngay",
    "contact_desc": "Điền thông tin bên dưới hoặc liên hệ trực tiếp qua WhatsApp để nhận phản hồi chỉ trong 5 phút.",
    "c_hq_t": "Trụ sở điều hành:",
    "c_pick_t": "Điểm đón Nha Trang:",
    "c_wa_t": "Hotline / WhatsApp 24/7:",
    "c_tg_t": "Telegram Kênh Chính Thức:",
    "f_title": "Gửi Yêu Cầu Tư Vấn & Đặt Chỗ Nhanh",
    "form_name_lbl": "Họ và tên *",
    "form_phone_lbl": "Số điện thoại / WhatsApp *",
    "form_nat_lbl": "Quốc tịch *",
    "form_city_lbl": "Thành phố hiện tại",
    "form_service_lbl": "Dịch vụ bạn quan tâm *",
    "form_notes_lbl": "Ghi chú thêm (Ngày hết hạn visa, ngày dự định đi)",
    "form_agree_lbl": "Tôi xác nhận đã đọc, hiểu rõ và đồng ý với các <a href=\"#terms\" onclick=\"openTermsModal(event)\" class=\"map-link\">Điều khoản Thỏa thuận Dịch vụ</a> của Vietnam Visa Pass.",
    "form_submit_btn": "📨 Gửi Yêu Cầu & Đồng Ý Thỏa Thuận Qua WhatsApp",
    "form_note": "🔒 Thông tin của bạn được bảo mật tuyệt đối theo Điều 4 của Thỏa thuận Dịch vụ.",
    "pm_subbadge": "💳 THANH TOÁN AN TOÀN",
    "payment_title": "Tài Khoản Doanh Nghiệp Vietcombank Chính Thức",
    "payment_desc": "Chuyển khoản an toàn với xác nhận giữ chỗ tức thì.",
    "pm_acc_num": "Số tài khoản:",
    "pm_holder": "Chủ tài khoản:",
    "pm_branch": "Chi nhánh:",
    "pm_methods_t": "Phương thức thanh toán chấp nhận",
    "pm_m1": "<span>✓</span> Chuyển khoản nhanh Napas 247 quét mã VietQR",
    "pm_m2": "<span>✓</span> Chuyển khoản quốc tế SWIFT / IBAN",
    "pm_m3": "<span>✓</span> Thẻ quốc tế Visa / Mastercard / Wise",
    "pm_m4": "<span>✓</span> Thanh toán tiền mặt tại điểm đón khởi hành",
    "ft_desc": "Vietnam Visa Pass (VVP) — Mạng lưới Visa Run Tốc Hành & E-Visa Cực Khẩn 1 Giờ hàng đầu Việt Nam.",
    "ft_col_routes": "Tuyến Visa Run Chính",
    "ft_col_legal": "Pháp Lý & Thanh Toán",
    "ft_col_support": "Hỗ Trợ Khẩn 24/7",
    "ftc_no_1": "• Xếp hàng chờ đợi 60 – 180 phút mệt mỏi",
    "ftc_no_2": "• Kiệt sức sau chặng bay dài xuyên lục địa",
    "ftc_no_3": "• Tự xoay xở thủ tục rắc rối nếu có trục trặc visa",
    "ftc_yes_1": "• Nhân viên đón tại cửa máy bay với bảng tên riêng",
    "ftc_yes_2": "• Đi thẳng qua Làn Ưu Tiên Ngoại Giao (Priority Lane)",
    "ftc_yes_3": "• Xong thủ tục nhập cảnh chỉ sau 5 – 10 phút, hỗ trợ chu đáo",
    "nav_reviews": "Đánh Giá",
    "sch_th_days": "Ngày Khởi Hành",
    "sch_th_dep": "Giờ Đón & Xuất Phát",
    "sch_th_dur": "Giờ Về Dự Kiến",
    "sch_th_fare": "Giá Trọn Gói",
    "sch_th_route": "Tuyến Đường & Cửa Khẩu",
    "sch_th_status": "Trạng Thái",
    "sch_th_vehicle": "Phương Tiện",
    "sch_th_visa": "Giờ Nhận E-Visa"
  }
};

/* ============================================================
   GLOBAL STATE & ROUTE DEFINITIONS
   ============================================================ */
let currentLang = 'en';
let selectedCity = 'nhatrang';
let selectedRouteIndex = 0;

const cityRoutes = {
  danang: [
    {
      id: 'dn_bus',
      nameVi: 'Sleeper Bus Đà Nẵng ⇄ Lao Bảo (Lào) Khứ hồi',
      nameEn: 'Da Nang ⇄ Lao Bao (Laos) Sleeper Bus Round-trip',
      nameRu: 'Дананг ⇄ Лаобао (Лаос) Слипбас туда-обратно',
      nameAr: 'حافلة النوم: دانانغ ⇄ لاو باو (لاوس) ذهاب وإياب',
      nameKr: '다낭 ⇄ 라오바오(라오스) 슬리핑 버스 왕복',
      price: 850000,
      descEn: '01:45 AM (Tue, Sat) · 2-meter comfortable bed, privacy curtains, USB charging',
      descRu: '01:45 утра (Вт, Сб) · Кровать 2м, шторки приватности, розетки USB',
      descAr: '01:45 صباحاً (الثلاثاء والسبت) · سرير مريح 2 متر، ستائر خصوصية، شواحن USB',
      descKr: '화/토 01:45 출발 · 2m 풀플랫 침대, 프라이빗 커튼, USB 충전',
      descVi: '01:45 Sáng (T3, T7) · Giường nằm 2m, rèm riêng tư, sạc USB'
    },
    {
      id: 'dn_vip_seat',
      nameVi: 'VIP Car Riêng 7 Chỗ (Ghế lẻ) Đà Nẵng ⇄ Lao Bảo',
      nameEn: 'VIP Car Shared Seat (Kia Carnival/Fortuner) to Lao Bao',
      nameRu: 'VIP Car отдельное место (Карнивал/Фортунер) в Лаос',
      nameAr: 'مقعد في سيارة VIP مشتركة (كارنيفال/فورتشنر) إلى لاو باو',
      nameKr: 'VIP 카 개별 좌석 (카니발/포튜너) 라오스행',
      price: 850000,
      descEn: '03:00 AM Daily · Hotel / Villa door-to-door pickup in Da Nang & Hoi An',
      descRu: '03:00 утра ежедневно · Подача прямо к отелю / вилле в Дананге и Хойане',
      descAr: '03:00 صباحاً يومياً · نقل مباشر من باب الفندق في دانانغ وهوي آن',
      descKr: '매일 03:00 출발 · 다낭 & 호이안 호텔/빌라 도어투도어 픽업',
      descVi: '03:00 Sáng Hàng ngày · Đón tận cửa khách sạn/villa tại Đà Nẵng & Hội An'
    },
    {
      id: 'dn_vip_full',
      nameVi: 'Bao Trọn Xe VIP Car Riêng 7 Chỗ (Toàn bộ xe)',
      nameEn: 'Private 7-Seat VIP Car Charter (Exclusive Entire Car)',
      nameRu: 'Аренда всего VIP Car 7 мест (Индивидуально)',
      nameAr: 'استئجار سيارة VIP خاصة 7 مقاعد بالكامل',
      nameKr: 'VIP 7인승 전용 차량 단독 렌탈 (전체 대절)',
      price: 3800000,
      descEn: 'Custom departure time · Up to 5-6 passengers',
      descRu: 'Гибкое время отправления · До 5-6 пассажиров',
      descAr: 'توقيت انطلاق مخصص حسب رغبتك · يتسع لـ 5-6 ركاب',
      descKr: '원하는 시간 맞춤 출발 · 최대 5-6인 탑승',
      descVi: 'Khởi hành giờ tự chọn · Tối đa 5-6 khách'
    },
    {
      id: 'dn_combo_ultra',
      nameVi: 'Combo Trọn Gói: Bus + E-Visa Ultra Fast 3-4h',
      nameEn: 'All-Inclusive Combo: Sleeper Bus + 90-Day Ultra Fast E-Visa',
      nameRu: 'Комбо пакет: Слипбас + Срочная E-Visa 3-4ч',
      nameAr: 'باقة شاملة: حافلة النوم + تأشيرة إلكترونية فائقة السرعة 3-4 ساعات',
      nameKr: '올인원 콤보: 슬리핑 버스 + 3-4시간 초고속 E-비자',
      price: 3900000,
      descEn: 'Includes round-trip transport + approved 90-day visa at border',
      descRu: 'Включает проезд туда-обратно + готовую визу 90 дней на границе',
      descAr: 'يشمل النقل ذهاباً وإياباً + تأشيرة 90 يوماً جاهزة على الحدود',
      descKr: '왕복 교통비 + 국경 도착 즉시 90일 E-비자 발급 포함',
      descVi: 'Bao gồm vé xe khứ hồi + E-Visa 90 ngày có sẵn tại cửa khẩu'
    }
  ],
  nhatrang: [
    {
      id: 'nt_bus_cambodia',
      nameVi: 'Sleeper Bus Nha Trang ⇄ Mộc Bài (Campuchia)',
      nameEn: 'Nha Trang ⇄ Moc Bai (Cambodia Border) Sleeper Bus',
      nameRu: 'Нячанг ⇄ Мокбай (Граница Камбоджи) Слипбас',
      nameAr: 'حافلة النوم: نها ترانج ⇄ موك باي (حدود كمبوديا)',
      nameKr: '나트랑 ⇄ 목바이 (캄보디아 국경) 슬리핑 버스',
      price: 1400000,
      descEn: '09:30 PM (Tue, Thu, Sun) · Pickup at 40 Hon Chong, Wi-Fi 19002679',
      descRu: '21:30 (Вт, Чт, Вс) · Посадка: 40 Hon Chong, Wi-Fi 19002679',
      descAr: '09:30 مساءً (الثلاثاء، الخميس، الأحد) · الانطلاق من 40 هون تشونغ',
      descKr: '화/목/일 21:30 출발 · 40 Hon Chong 탑승',
      descVi: '21:30 Tối (T3, T5, CN) · Đón tại 40 Hòn Chồng, WiFi 19002679'
    },
    {
      id: 'nt_bus_laos',
      nameVi: 'Sleeper Bus Nha Trang ⇄ Bờ Y (Lào)',
      nameEn: 'Nha Trang ⇄ Bo Y (Laos Border) Sleeper Bus',
      nameRu: 'Нячанг ⇄ Бо-И (Граница Лаоса) Слипбас',
      nameAr: 'حافلة النوم: نها ترانج ⇄ بو ي (حدود لاوس)',
      nameKr: '나트랑 ⇄ 보이 (라오스 국경) 슬리핑 버스',
      price: 1400000,
      descEn: '09:15 & 09:30 PM Daily · Pickup at No. 4 Tran Phu & 40 Hon Chong',
      descRu: '21:15 и 21:30 Ежедневно · Посадка: No. 4 Tran Phu и 40 Hon Chong',
      descAr: '09:15 و 09:30 مساءً يومياً · الانطلاق من شارع تران فو وهون تشونغ',
      descKr: '매일 21:15 & 21:30 출발 · No. 4 Tran Phu 및 40 Hon Chong 탑승',
      descVi: '21:15 & 21:30 Tối Hàng Ngày · Đón tại Số 4 Trần Phú & 40 Hòn Chồng'
    },
    {
      id: 'nt_combo_evisa',
      nameVi: 'Combo Trọn Gói Nha Trang: Bus + E-Visa 90 Ngày',
      nameEn: 'Nha Trang Combo: Sleeper Bus + 90-Day E-Visa Included',
      nameRu: 'Нячанг Комбо: Слипбас + E-Visa 90 дней под ключ',
      nameAr: 'باقة نها ترانج الشاملة: حافلة النوم + تأشيرة 90 يوماً',
      nameKr: '나트랑 콤보: 슬리핑 버스 + 90일 E-비자 포함',
      price: 4000000,
      descEn: 'Full A-Z hassle-free service with guaranteed visa issuance',
      descRu: 'Полный сервис под ключ А-Я с гарантией готовности визы',
      descAr: 'خدمة متكاملة من الألف إلى الياء مع ضمان إصدار التأشيرة',
      descKr: 'A부터 Z까지 올인원 대행, 추가 비용 없는 안심 패키지',
      descVi: 'Hành trình trọn gói A-Z, không phát sinh chi phí'
    },
    {
      id: 'nt_taxi',
      nameVi: 'Airport Taxi Cam Ranh ⇄ Nha Trang Trung Tâm',
      nameEn: 'Cam Ranh Airport ⇄ Nha Trang City Fixed Taxi',
      nameRu: 'Такси Аэропорт Камрань ⇄ Нячанг фиксированная цена',
      nameAr: 'تاكسي مطار كام رانه ⇄ وسط مدينة نها ترانج بسعر ثابت',
      nameKr: '깜란 공항 ⇄ 나트랑 시내 정찰제 택시',
      price: 340000,
      descEn: 'New Mitsubishi Xpander with meet-and-greet name board',
      descRu: 'Новый Mitsubishi Xpander с именной табличкой в зале прилета',
      descAr: 'سيارة ميتسوبيشي إكسباندر حديثة مع لوحة استقبال بالاسم',
      descKr: '미쓰비시 신형 차량, 공항 입국장 네임보드 픽업',
      descVi: 'Xe Mitsubishi Xpander mới, đón biển tên tại sân bay'
    }
  ],
  hanoi: [
    {
      id: 'hn_bus_huunghi',
      nameVi: 'VIP Limousine Hà Nội ⇄ Cửa Khẩu Quốc Tế Hữu Nghị (TQ)',
      nameEn: 'VIP Limousine: Hanoi ⇄ Huu Nghi International Border Gate',
      nameRu: 'VIP Лимузин: Ханой ⇄ Хыу Нги (Международный КПП)',
      nameAr: 'ليموزين VIP: هانوي ⇄ منفذ هوو نغي الدولي (الصين)',
      nameKr: 'VIP 리무진: 하노이 ⇄ 후응이 국제 국경 비자런',
      price: 1200000,
      descEn: '09:00 AM Departure · Same-day return around 05:30 PM with approved E-Visa',
      descRu: '09:00 утра выезд · Возвращение в 17:30 с готовой E-Visa',
      descAr: '09:00 صباحاً انطلاق · العودة بنفس اليوم حوالي 05:30 مساءً مع التأشيرة',
      descKr: '09:00 출발 · 당일 17:30 E-비자 발급 후 복귀',
      descVi: '09:00 Sáng đón tại Văn phòng VIP Limousine · 17:30 nhận E-Visa tái nhập cảnh'
    },
    {
      id: 'hn_fasttrack',
      nameVi: 'VIP Fast Track Sân Bay Quốc Tế Nội Bài (HAN)',
      nameEn: 'VIP Fast Track at Hanoi Noi Bai Airport (HAN)',
      nameRu: 'VIP Fast Track в Аэропорту Нойбай Ханой (HAN)',
      nameAr: 'المسار السريع VIP في مطار نوي باي الدولي بهانوي (HAN)',
      nameKr: '하노이 노이바이 국제공항 VIP 패스트트랙',
      price: 1200000,
      descEn: 'Skip all lines, priority lane clearance in 5-10 minutes',
      descRu: 'Без очередей, проход по приоритетному коридору за 5-10 минут',
      descAr: 'تجاوز جميع الطوابير، ممر أولوي خاص خلال 5-10 دقائق',
      descKr: '공항 대기줄 패스, 전용 라인 5~10분 초고속 통과',
      descVi: 'Bỏ qua hàng chờ, đón tại cửa máy bay, làm thủ tục 5-10 phút'
    }
  ],
  hcm: [
    {
      id: 'hcm_bus_mocbai',
      nameVi: 'Limousine / Bus TP.HCM ⇄ Mộc Bài (Campuchia)',
      nameEn: 'HCMC ⇄ Moc Bai (Cambodia) Limousine / Bus',
      nameRu: 'Хошимин (Сайгон) ⇄ Мокбай (Камбоджа) Лимузин',
      nameAr: 'ليموزين / حافلة: مدينة هو تشي منه ⇄ موك باي (كمبوديا)',
      nameKr: '호치민 ⇄ 목바이 (캄보디아) 리무진 / 버스',
      price: 900000,
      descEn: 'Daily departure at 07:00 AM, same-day return by 03:00 PM',
      descRu: 'Ежедневный выезд в 07:00 утра, возвращение в 15:00',
      descAr: 'انطلاق يومي الساعة 07:00 صباحاً والعودة بنفس اليوم 03:00 عصراً',
      descKr: '매일 07:00 출발, 당일 15:00 복귀',
      descVi: 'Khởi hành hàng ngày lúc 07:00 sáng, về trong ngày 15:00'
    },
    {
      id: 'hcm_fasttrack',
      nameVi: 'VIP Fast Track Sân Bay Tân Sơn Nhất (SGN)',
      nameEn: 'VIP Fast Track at HCMC Tan Son Nhat Airport (SGN)',
      nameRu: 'VIP Fast Track в Аэропорту Таншоннят Хошимин (SGN)',
      nameAr: 'المسار السريع VIP في مطار تان سون نهات بهوشي منه (SGN)',
      nameKr: '호치민 탄손누트 국제공항 VIP 패스트트랙',
      price: 1200000,
      descEn: 'VIP personal assistant, diplomatic / express lane 5-10 minutes',
      descRu: 'Персональный ассистент, дипломатический коридор за 5-10 минут',
      descAr: 'مساعد شخصي VIP، عبور فوري عبر المسار السريع خلال 5-10 دقائق',
      descKr: 'VIP 전담 직원 영접, 전용 출입국 레인 5~10분 통과',
      descVi: 'Đón ưu tiên VIP, qua cổng an ninh riêng 5-10 phút'
    }
  ]
};

const evisaPrices = {
  none: 0,
  std_7d: 1200000,
  urg_2d: 2600000,
  urg_1d: 2850000,
  ultra_4h: 3100000,
  super_1h: 4600000
};

const MULTI_ENTRY_ADDON = 650000;

/* ============================================================
   GLOBAL FUNCTIONS (CALCULATOR, ROUTE RENDERING & LANGUAGE)
   ============================================================ */

function getRouteName(route, lang) {
  if (!route) return '';
  if (lang === 'vi') return route.nameVi || route.nameEn;
  if (lang === 'ru') return route.nameRu || route.nameEn;
  if (lang === 'ar') return route.nameAr || route.nameEn;
  if (lang === 'kr') return route.nameKr || route.nameEn;
  return route.nameEn;
}

function getRouteDesc(route, lang) {
  if (!route) return '';
  if (lang === 'vi') return route.descVi || route.descEn;
  if (lang === 'ru') return route.descRu || route.descEn;
  if (lang === 'ar') return route.descAr || route.descEn;
  if (lang === 'kr') return route.descKr || route.descEn;
  return route.descEn;
}

window.renderRouteOptions = function(city) {
  const container = document.getElementById('route-options-container');
  if (!container) return;
  container.innerHTML = '';

  const routes = cityRoutes[city] || [];
  if (selectedRouteIndex >= routes.length) {
    selectedRouteIndex = 0;
  }

  routes.forEach(function (route, index) {
    const card = document.createElement('div');
    card.className = 'route-option-card' + (index === selectedRouteIndex ? ' active' : '');
    card.setAttribute('data-idx', index);

    const nameText = getRouteName(route, currentLang);
    const descText = getRouteDesc(route, currentLang);

    card.innerHTML = `
      <div class="roc-left">
        <span class="roc-radio"></span>
        <div>
          <div class="roc-name">${nameText}</div>
          <div class="roc-desc">${descText}</div>
        </div>
      </div>
      <div class="roc-price">${route.price.toLocaleString('vi-VN')} ₫</div>
    `;

    card.addEventListener('click', function () {
      selectedRouteIndex = index;
      document.querySelectorAll('.route-option-card').forEach(function (c) {
        c.classList.remove('active');
      });
      card.classList.add('active');
      window.calculateTotal();
    });

    container.appendChild(card);
  });
};

window.calculateTotal = function() {
  const routes = cityRoutes[selectedCity] || [];
  const route = routes[selectedRouteIndex] || routes[0];
  const routePrice = route ? route.price : 0;

  const evisaSelect = document.getElementById('calc-evisa-speed');
  const multiCheck = document.getElementById('calc-multi-entry');

  const evisaKey = evisaSelect ? evisaSelect.value : 'none';
  const evisaPrice = evisaPrices[evisaKey] || 0;
  const isMulti = multiCheck ? multiCheck.checked : false;
  const multiPrice = (isMulti && evisaKey !== 'none') ? MULTI_ENTRY_ADDON : 0;

  const total = routePrice + evisaPrice + multiPrice;

  const totalDisplay = document.getElementById('calc-total-display');
  const breakdownDisplay = document.getElementById('calc-breakdown-display');

  if (totalDisplay) {
    totalDisplay.textContent = total.toLocaleString('vi-VN') + ' ₫';
  }

  if (breakdownDisplay && route) {
    const rName = getRouteName(route, currentLang);
    let parts = [rName];
    if (evisaPrice > 0 && evisaSelect) {
      const optText = evisaSelect.options[evisaSelect.selectedIndex].text;
      parts.push(optText);
    }
    if (multiPrice > 0) {
      const multiLabel = currentLang === 'vi' ? 'Nhiều lần nhập cảnh (+650k)' :
                         currentLang === 'ru' ? 'Многократный въезд (+650k)' :
                         currentLang === 'ar' ? 'دخول متعدد (+650k)' :
                         currentLang === 'kr' ? '복수 입국 (+650k)' : 'Multiple Entry (+650k)';
      parts.push(multiLabel);
    }
    breakdownDisplay.textContent = parts.join(' + ');
  }
};

window.switchLanguage = function(lang) {
  if (!i18n[lang]) lang = 'en';
  currentLang = lang;
  try {
    localStorage.setItem('vvp_lang', lang);
  } catch(e){}

  // Handle RTL for Arabic
  if (lang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.classList.add('lang-rtl');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.classList.remove('lang-rtl');
  }

  // Translate all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang] && i18n[lang][key] !== undefined) {
      el.innerHTML = i18n[lang][key];
    }
  });

  // Update active state on all language buttons across page
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Re-render routes with updated language
  if (typeof window.renderRouteOptions === 'function') {
    window.renderRouteOptions(selectedCity);
  }

  // Recalculate breakdown with updated language
  if (typeof window.calculateTotal === 'function') {
    window.calculateTotal();
  }
};

window.applyLanguage = window.switchLanguage;

/* ============================================================
   MODAL, ACCORDION & BOOKING HANDLERS
   ============================================================ */

window.toggleFaqItem = function (card) {
  const wasOpen = card.classList.contains('active');
  document.querySelectorAll('.faq-card').forEach(function (c) {
    c.classList.remove('active');
  });
  if (!wasOpen) card.classList.add('active');
};

window.toggleTermsArticle = function (el) {
  el.classList.toggle('active');
};

window.openTermsModal = function (e) {
  if (e && e.preventDefault) e.preventDefault();
  const modal = document.getElementById('terms-modal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
};

window.closeTermsModal = function (e) {
  if (e && e.target && e.target.classList &&
      !e.target.classList.contains('modal-overlay') &&
      !e.target.classList.contains('modal-close') &&
      !e.target.classList.contains('btn')) {
    return;
  }
  const modal = document.getElementById('terms-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
};

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    window.closeTermsModal();
  }
});

const AIRTABLE_WEBHOOK_URL = "";

window.handleMainFormSubmit = function (e) {
  e.preventDefault();

  const name = (document.getElementById('f-name') ? document.getElementById('f-name').value : '').trim();
  const phone = (document.getElementById('f-phone') ? document.getElementById('f-phone').value : '').trim();
  const nationality = (document.getElementById('f-nationality') ? document.getElementById('f-nationality').value : '').trim();
  const city = document.getElementById('f-city') ? document.getElementById('f-city').value : '';
  const service = document.getElementById('f-service') ? document.getElementById('f-service').value : '';
  const notes = (document.getElementById('f-notes') ? document.getElementById('f-notes').value : '').trim();
  const termsAgreed = document.getElementById('f-terms-agree') ? document.getElementById('f-terms-agree').checked : true;

  if (!termsAgreed) {
    alert(currentLang === 'vi' ? 'Vui lòng đồng ý với Thỏa thuận dịch vụ trước khi gửi.' :
          currentLang === 'ru' ? 'Пожалуйста, примите условия предоставления услуг перед отправкой.' :
          'Please accept the Terms of Service agreement before submitting.');
    return;
  }

  const leadPayload = {
    fullName: name,
    phoneWhatsApp: phone,
    nationality: nationality,
    departureCity: city,
    serviceInterested: service,
    notes: notes,
    legalTermsAccepted: true,
    timestamp: new Date().toISOString(),
    source: "Vietnam Visa Pass Website Lead"
  };

  if (AIRTABLE_WEBHOOK_URL) {
    fetch(AIRTABLE_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(leadPayload)
    }).catch(err => console.log('CRM webhook logged:', err));
  }

  const waMsg = `Hello Vietnam Visa Pass Concierge!

` +
    `📌 *NEW VIP CONSULTATION REQUEST*
` +
    `• *Name:* ${name}
` +
    `• *Phone/WhatsApp:* ${phone}
` +
    `• *Nationality:* ${nationality}
` +
    `• *Current City:* ${city}
` +
    `• *Service:* ${service}
` +
    `• *Notes:* ${notes || 'N/A'}
` +
    `• *Legal Terms:* Agreed & Accepted (Standard VVP Contract)

` +
    `Please provide instant schedule & fast confirmation. Thank you!`;

  window.open(`https://wa.me/84868462071?text=${encodeURIComponent(waMsg)}`, '_blank');
};

window.handleCalcBooking = function (channel) {
  const routes = cityRoutes[selectedCity] || [];
  const route = routes[selectedRouteIndex] || routes[0];
  const totalDisplay = document.getElementById('calc-total-display') ? document.getElementById('calc-total-display').textContent : '';
  const breakdown = document.getElementById('calc-breakdown-display') ? document.getElementById('calc-breakdown-display').textContent : '';
  const routeTitle = route ? (getRouteName(route, currentLang) || route.nameEn) : 'Visa Run Route';

  const msg = `Hello Vietnam Visa Pass Concierge!

` +
    `⚡ *EXPRESS VISA RUN BOOKING*
` +
    `• *Departure City:* ${selectedCity.toUpperCase()}
` +
    `• *Route:* ${routeTitle}
` +
    `• *Details:* ${breakdown}
` +
    `• *Total Price:* ${totalDisplay}
` +
    `• *Legal Terms:* Agreed & Accepted

` +
    `Please check seat availability and send confirmation. Thank you!`;

  if (channel === 'wa') {
    window.open(`https://wa.me/84868462071?text=${encodeURIComponent(msg)}`, '_blank');
  } else if (channel === 'tg') {
    window.open(`https://t.me/vietnamvisapass?text=${encodeURIComponent(msg)}`, '_blank');
  }
};

/* ============================================================
   DOM CONTENT LOADED INITIALIZER & EVENT LISTENERS
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ── 1. CITY TAB BUTTONS (CALCULATOR) ───────────────────────
  document.querySelectorAll('.city-tab-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.city-tab-btn').forEach(function (b) {
        b.classList.remove('active');
      });
      this.classList.add('active');
      selectedCity = this.getAttribute('data-city') || 'nhatrang';
      selectedRouteIndex = 0;
      window.renderRouteOptions(selectedCity);
      window.calculateTotal();
    });
  });

  // ── 2. CALCULATOR INPUT LISTENERS ──────────────────────────
  const evisaSelect = document.getElementById('calc-evisa-speed');
  const multiCheck = document.getElementById('calc-multi-entry');

  if (evisaSelect) {
    evisaSelect.addEventListener('change', window.calculateTotal);
  }
  if (multiCheck) {
    multiCheck.addEventListener('change', window.calculateTotal);
  }

  // ── 3. BORDER GUIDE TABS ───────────────────────────────────
  document.querySelectorAll('.guide-tab-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.guide-tab-btn').forEach(function (b) {
        b.classList.remove('active');
      });
      document.querySelectorAll('.guide-pane').forEach(function (p) {
        p.classList.remove('active');
      });

      this.classList.add('active');
      const guideId = this.getAttribute('data-guide');
      const pane = document.getElementById(guideId);
      if (pane) {
        pane.classList.add('active');
      }
    });
  });

  // ── 4. TIMETABLE SCHEDULE TABS ─────────────────────────────
  document.querySelectorAll('.sch-tab-btn, .sched-tab-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const tabId = this.getAttribute('data-tab') || ('sched-' + this.getAttribute('data-sched'));
      document.querySelectorAll('.sch-tab-btn, .sched-tab-btn').forEach(function (b) {
        b.classList.remove('active');
      });
      this.classList.add('active');
      document.querySelectorAll('.sch-pane, .sched-city-pane').forEach(function (p) {
        p.classList.remove('active');
      });
      const pane = document.getElementById(tabId);
      if (pane) {
        pane.classList.add('active');
      }
    });
  });

  // ── 5. SCROLL TO TOP BUTTON ────────────────────────────────
  const scrollTopBtn = document.getElementById('scroll-top');
  if (scrollTopBtn) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 350) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    });
    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ── 6. MOBILE BURGER MENU ──────────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      const spans = hamburger.querySelectorAll('span');
      if (spans.length >= 3) {
        if (isOpen) {
          spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
          spans[1].style.opacity = '0';
          spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
          spans[0].style.transform = '';
          spans[1].style.opacity = '';
          spans[2].style.transform = '';
        }
      }
    });

    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('open');
        const spans = hamburger.querySelectorAll('span');
        if (spans.length >= 3) {
          spans[0].style.transform = '';
          spans[1].style.opacity = '';
          spans[2].style.transform = '';
        }
      });
    });
  }

  // ── 7. NUMBER COUNTER ANIMATION ───────────────────────────
  function initCounters() {
    const counterElements = document.querySelectorAll('.h-stat-num[data-target]');
    counterElements.forEach(function (el) {
      const target = parseInt(el.getAttribute('data-target'), 10) || 0;
      let current = 0;
      const increment = Math.ceil(target / 60);
      const timer = setInterval(function () {
        current += increment;
        if (current >= target) {
          el.textContent = target.toLocaleString('en-US') + '+';
          clearInterval(timer);
        } else {
          el.textContent = current.toLocaleString('en-US') + '+';
        }
      }, 25);
    });
  }

  // ── 8. INITIALIZE PAGE STATE ───────────────────────────────
  let initLang = 'en';
  try {
    const saved = localStorage.getItem('vvp_lang');
    if (saved && i18n[saved]) initLang = saved;
  } catch(e){}

  window.switchLanguage(initLang);
  window.renderRouteOptions(selectedCity);
  window.calculateTotal();
  initCounters();

});
