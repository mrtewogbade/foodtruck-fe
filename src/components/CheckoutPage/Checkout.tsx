import { Lock, ChevronDown } from "lucide-react";
import paystackLogo from "../../assets/framedesign.svg"  
import flutterwaveLogo from "../../assets/Flutterwave_Logo-removebg-preview 1.svg"
const Checkout = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md">
        {/* Title */}
        <h1 className="text-xl font-semibold text-gray-800 text-center">
          Choose how to pay
        </h1>
        <p className="text-sm text-gray-400 font-bold text-center mt-1">
          Your Payment is Encrypted and you can cancel/change how you pay at any time
        </p>

        {/* Top note */}
        <p className="text-xs text-gray-600 font-bold text-center mt-1">
          Cancel at Anytime
        </p>

        {/* Payment Options */}
        <div className="space-y-4 mt-6">
          {/* Paystack */}
          <button className="w-full flex items-center justify-between border border-gray-300 rounded-lg px-4 py-3 hover:border-blue-400 transition">
            <div className="flex items-center gap-3">
              <span className="text-gray-700 font-medium">Paystack</span>
              <img src={paystackLogo} alt="Paystack" className=" h-8" />
              
            </div>
            
            <ChevronDown className="text-gray-400 w-4 h-4" />
          </button>

          {/* FlutterWave */}
          <button className="w-full flex items-center justify-between border border-gray-300 rounded-lg px-4 py-3 hover:border-blue-400 transition">
            <div className="flex items-center gap-3">

               <span className="text-gray-700 font-medium">FlutterWave</span>
              <img src={flutterwaveLogo} alt="FlutterWave" className=" h-6" />
              
            </div>
            <ChevronDown className="text-gray-400 w-4 h-6" />
          </button>
        </div>

        {/* Security note */}
        <div className="flex items-center justify-end mt-4 text-xs text-gray-400">
          End-to-end encrypted <Lock className="w-4 h-4 ml-1" />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
