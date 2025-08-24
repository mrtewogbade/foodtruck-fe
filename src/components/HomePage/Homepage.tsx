import { foodplate } from "../../assets";
import SearchBar from "../SearchBar";
import { Phone, Mail, MapPin, Printer } from "lucide-react";
const Homepage = () => {
  return (
    <div className="bg-gray-50 w-full ">
      {/* ===== HEADER (logo left, small gaps between nav items) ===== */}
      <header className="border-b border-gray-100">
        <div className="max-w-[1140px] mx-1  px-4 lg:px-6 flex items-center">
        </div>
      </header>

      {/* ===== HERO (left text, big gap to image, attached orange search) ===== */}
      <section className="max-w-[1140px] mx-auto px-30 lg:px-50 py-12 lg:py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-30 lg:gap-35">
          {/* Left text */}
          <div className="w-full max-w-xl ">
            <p className="text-[32px] lg:text-[40px] font-bold leading-tight -ml-30">
              <span className="text-[#F2994A]">Hungry? </span>
              Let’s Fix That Order Your Favourites!
          </p>
            <p className="mt-3 text-gray-600 -ml-40">
              Discover the best food trucks in your area.
            </p>

            <div className="mt-5  -ml-40">
              <SearchBar />
            </div>
          </div>
           <img
            className="w-[450px] h-[450px] lg:w-[520px] lg:h-[520px] -ml-10"
            src={foodplate}
            alt="Food plate"
          />
        </div>
      </section>

      {/* ===== OUR SERVICES (you liked this; kept layout tidy) ===== */}
      <section className="max-w-[1140px] mx-auto px-4 lg:px-6 py-12 lg:py-16">
        <h2 className="text-center text-2xl lg:text-[26px] font-bold mb-8 lg:mb-10">
          Our Services
        </h2>

        <div> <img src="/src/assets/Frame 38813852.svg" alt="" />
        </div>
        {/* <div className="flex flex-col items-center text-center space-y-1">

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          <ServiceCard
            img="/src/assets/Rectangle 54 (1).svg"
            
            title="Top Restaurants within your area"
            text="Discover the best food trucks in your area"
          />
          
           <ServiceCard
            img="/src/assets/Rectangle 55.svg"
            title="Fast Delivery"
            text="Get your food delivered in record time"
          />

          <ServiceCard
            img="/src/assets/Rectangle 56.svg"
            title="Varieties of Food Meals"
            text="Explore a wide range of delicious meals"
          />
        </div> */}
      </section>

      {/* ===== OUR RESTAURANTS (3 top + 3 bottom) — you liked this; kept, just clean badges ===== */}
      <section className="max-w-[1140px] mx-auto px-4 lg:px-6 py-12 lg:py-16">
        <h2 className="text-center text-2xl lg:text-[26px] font-bold mb-8 lg:mb-10 pl-8">
          Our Restaurants
        </h2>

         <div className="pl-20 "><img src="/src/assets/Frame 38813847.svg"  /></div>

      </section>

      {/* ===== OUR PRODUCTS (3 per row on desktop, 6 total) ===== */}
      <section className="max-w-[1140px] mx-auto px-4 lg:px-6 py-12 lg:py-16">
        <h2 className="text-center text-2xl lg:text-[26px] font-bold mb-8 lg:mb-10">
          Our Products
        </h2>



        <div><img src="/src/assets/Frame 38813859.svg"  /></div>

         {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "/images/product1.png",
            "/images/product2.png",
            "/images/product3.png",
            "/images/product4.png",
            "/images/product5.png",
            "/images/product6.png",
          ].map((src, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 p-4 lg:p-5">
              <img
                src={src}
                alt={`Product ${i + 1}`}
                className="w-full h-40 object-cover rounded-xl"
              />
              <p className="mt-3 font-semibold">Lorem ipsum dolor sit amet</p>
              <button className="mt-3 inline-block bg-[#F2994A] hover:brightness-95 text-white rounded-md px-4 py-2">
                Add to Cart
              </button>
            </div>
          ))}
        </div> */}
      </section>

      {/* ===== NEWSLETTER (orange bar, 'Newsletter' + text, input + 'Submit' styled like checkscore, no black) ===== */}

<div className="bg-[#da741c] rounded-lg p-6 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-9">
  <div>
    <h3 className="text-white font-semibold text-lg">Newsletter</h3>
    <p className="text-white text-sm">
      Be the first one to know about discounts, offers and events
    </p>
  </div>

  <div className="flex w-lvh md:w-1/2 bg-white rounded-lg overflow-hidden">
    <input
      type="email"
      className="flex-1 px-4 py-2 outline-none"
    />
    <button className="bg-[#da741c] text-white px-6 py-2 font-semibold hover:bg-[#e08a3e]">
      Submit
    </button>
  </div>
</div>

      {/* ===== CONTACT STRIP (logo + text on left; tel/mail/address/fax on right; no borders) ===== */}
      <div className="bg-white rounded-lg shadow-md"></div>
        <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Left: Logo + Text */}
          <div className="flex items-start gap-4 max-w-sm">
            <img src="/src/assets/Frame 27730.svg" alt="Food Truck" className="w-28 h-auto object-contain" />
            <p className="text-gray-600 text-sm leading-relaxed">
    We bring your favourite meal closer with fresh ingredients.. <span className="text-orange-500 font-medium cursor-pointer hover:underline">Read More</span>
    </p>
    
  </div>

  {/* Right: Contact */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-600">
    <div>
      <p className="font-semibold">Tel</p>
      <p className="text-orange-500">310-437-2766</p>
    </div>
    <div>
      <p className="font-semibold mr-2">Mail</p>
      <p className="text-orange-500 pr-15">unreal@outlook.com</p>
    </div>
   <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-orange-500" />
          <div>
            <p className="font-semibold">Address</p>
            <p className="text-orange-500">706 Campfire Ave. Meriden, CT 06450</p>
          </div>
        </div>

    <div>
      <p className="font-semibold">Fax</p>
      <p className="text-orange-500">+1-000-0000</p>
    </div>
  </div>
</div>



      {/* <section className="max-w-[1140px] mx-auto px-4 lg:px-6 pb-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10">
          <div className="flex items-center gap-3">
            <img src="/src/assets/Frame 27730.svg" alt="foodtruck" />
            <p className="text-gray-700 font-medium"> meals closer</p>We bring your favourite
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 lg:ml-auto">
            <ContactItemPlain
              title="Telephone"
              value="+234 802 123 4567"
              icon={
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#F2994A" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.54 2.5a2 2 0 0 1-.45 2.11L9 10a16 16 0 0 0 5 5l.67-1.09a2 2 0 0 1 2.11-.45c.8.24 1.64.42 2.5.54A2 2 0 0 1 22 16.92z" />
                </svg>
              }
            />
            <ContactItemPlain
              title="Mail"
              value="support@foodtruck.com"
              icon={
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#F2994A" strokeWidth="2">
                  <path d="M3 5h18v14H3z" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
              }
            />
            <ContactItemPlain
              title="Address"
              value="24 Bistro Lane, Lagos"
              icon={
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#F2994A" strokeWidth="2">
                  <path d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10z" />
                  <circle cx="12" cy="11" r="2" />
                </svg>
              }
            />
            <ContactItemPlain
              title="Fax"
              value="+234 01 234 567"
              icon={
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#F2994A" strokeWidth="2">
                  <rect x="3" y="7" width="18" height="13" rx="2" />
                  <path d="M7 7V3h10v4" />
                </svg>
              }
            />
          </div>
        </div>
      </section> */}

      {/* ===== FOOTER NAV GROUPS + BOTTOM BAR (right aligned groups) ===== */}
      <footer className="bg-gray-100">
        <div className="max-w-[1140px] mx-auto px-4 lg:px-6 py-10">
          {/* If your Figma shows multiple 'About/Support/FAQ' groups, duplicate these rows */}
          <div className="grid grid-rows-1 grid-cols-3 gap-8 text-sm text-gray-700">
            <FooterGroup />
            <FooterGroup />
            <FooterGroup />
          </div>

          {/* Bottom bar: all on RIGHT side with a big gap between links and © */}
          <div className="mt-10 pt-6 border-t my-[-16px] border-gray-200">
            <div className="flex items-center justify-end gap-16">
              <ul className="flex flex-wrap items-center gap-6 text-sm text-gray-700">
                <li className="hover:underline cursor-pointer">About Us</li>
                <li className="hover:underline cursor-pointer">Contacts</li>
                <li className="hover:underline cursor-pointer">Privacy Policy</li>
                <li className="hover:underline cursor-pointer">Settings</li>
                <li className="hover:underline cursor-pointer">Terms of Use</li>
              </ul>
              <p className="text-xs text-gray-600">
                © 2024 FoodTruck. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

/* ---------- helpers ---------- */
// function ServiceCard({ img, title, text }: { img: string; title: string; text: string }) 
//   { 
//     return (
//     <div className="rounded-2xl border border-gray-200 p-4 lg:p-6">
//       <img src={img} alt={title} className="w-full h-44 lg:h-48 object-cover rounded-xl" />
//       <h3 className="mt-4 font-semibold">{title}</h3>
//       <p className="text-gray-500 text-sm mt-2">{text}</p>
//     </div>
//   );
// }  

// function RestaurantBadge({ img, label }: { img: string; label: string }) {
//   return (
//     <div className="rounded-2xl border border-gray-200 p-5 text-center">
//       <div className="w-24 h-24 rounded-full border border-gray-200 mx-auto grid place-items-center overflow-hidden">
//         <img src={img} alt={label} className="w-20 h-20 object-contain" />
//       </div>
//       <p className="mt-3 font-medium">{label}</p>
//     </div>
//   );
// }

function ContactItemPlain({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="shrink-0">{icon}</span>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
}

function FooterGroup() {
  return (
    <div>
      <h3 className="font-bold mb-3">About</h3>
      <ul className="space-y-2 mb-5">
        <li>Company</li>
        <li>Services</li>
        <li>Restaurants</li>
      </ul>
      <h3 className="font-bold mb-3">Support</h3>
      <ul className="space-y-2 mb-5">
        <li>FAQ</li>
        <li>Contact</li>
        <li>Support Center</li>
      </ul>
      <h3 className="font-bold mb-3">FAQ</h3>
      <ul className="space-y-2">
        <li>Payments</li>
        <li>Delivery</li>
        <li>Cancellations</li>
      </ul>
    </div>
  );
}

export default Homepage;
