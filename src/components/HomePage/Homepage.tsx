import { foodplate } from "../../assets";
import SearchBar from "../SearchBar";
import { MapPin, } from "lucide-react";
import Navbar from "../NavBar/Navbar";
const Homepage = () => {
  return (
    <div className="bg-gray-50 w-full ">

      <Navbar />

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

      <section className="max-w-[1140px] mx-auto px-4 lg:px-6 py-12 lg:py-16">
        <h2 className="text-center text-2xl lg:text-[26px] font-bold mb-8 lg:mb-10">
          Our Services
        </h2>

        <div>
          {" "}
          <img src="/src/assets/Frame 38813852.svg" alt="" />
        </div>
      </section>

      <section className="max-w-[1140px] mx-auto px-4 lg:px-6 py-12 lg:py-16">
        <h2 className="text-center text-2xl lg:text-[26px] font-bold mb-8 lg:mb-10 pl-8">
          Our Restaurants
        </h2>

        <div className="pl-20 ">
          <img src="/src/assets/Frame 38813847.svg" />
        </div>
      </section>

      <section className="max-w-[1140px] mx-auto px-4 lg:px-6 py-12 lg:py-16">
        <h2 className="text-center text-2xl lg:text-[26px] font-bold mb-8 lg:mb-10">
          Our Products
        </h2>

        <div>
          <img src="/src/assets/Frame 38813859.svg" />
        </div>
      </section>

      <div className="bg-[#da741c] rounded-lg p-6 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-9">
        <div>
          <h3 className="text-white font-semibold text-lg">Newsletter</h3>
          <p className="text-white text-sm">
            Be the first one to know about discounts, offers and events
          </p>
        </div>

        <div className="flex w-lvh md:w-1/2 bg-white rounded-lg overflow-hidden">
          <input type="email" className="flex-1 px-4 py-2 outline-none" />
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
          <img
            src="/src/assets/Frame 27730.svg"
            alt="Food Truck"
            className="w-28 h-auto object-contain"
          />
          <p className="text-gray-600 text-sm leading-relaxed">
            We bring your favourite meal closer with fresh ingredients..{" "}
            <span className="text-orange-500 font-medium cursor-pointer hover:underline">
              Read More
            </span>
          </p>
        </div>

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
              <p className="text-orange-500">
                706 Campfire Ave. Meriden, CT 06450
              </p>
            </div>
          </div>

          <div>
            <p className="font-semibold">Fax</p>
            <p className="text-orange-500">+1-000-0000</p>
          </div>
        </div>
      </div>

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
                <li className="hover:underline cursor-pointer">
                  Privacy Policy
                </li>
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