import React, { useState, useEffect } from 'react';

const TermsModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('termsAccepted');
    if (accepted === 'true') {
      setIsOpen(false);
    }
  }, []);

  const handleAccept = () => {
    if (isAccepted) {
      localStorage.setItem('termsAccepted', 'true');
      setIsOpen(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Terms and Conditions</h2>
          
          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-semibold mb-2">English Version:</h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Please do not share your Demat Account details with our employees or any executive.</li>
                <li>We do not ask for your Demat Account details.</li>
                <li>We do not provide any guarantee for profit.</li>
                <li>Investment in stock or commodity market is subject to high risk.</li>
                <li>All profit and loss risk is borne by the investor.</li>
                <li>Please visit our website for detailed terms and conditions before starting services with us.</li>
                <li>Call us at +91-7770978090</li>
              </ol>
            </div>

            <div>
              <h3 className="font-semibold mb-2">हिंदी संस्करण:</h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li>कृपया अपना डीमेट खाता हमारे कर्मचारियों या किसी कार्यकारी के साथ साझा न करें।</li>
                <li>हम आपके डीमेट खाते का विवरण नहीं मांगते हैं।</li>
                <li>हम लाभ के लिए कोई गारंटी नहीं देते हैं।</li>
                <li>शेयर या कमोडिटी बाजार में निवेश उच्च जोखिम के अधीन है।</li>
                <li>सभी लाभ और हानि का जोखिम निवेशक द्वारा वहन किया जाता है।</li>
                <li>हमारे साथ सेवाएं शुरू करने से पहले हमारी वेबसाइट पर विस्तृत नियम और शर्तें देखें।</li>
                <li>हमें +91-7770978090 पर कॉल करें</li>
              </ol>
            </div>
          </div>

          <div className="mt-6 flex items-center">
            <input
              type="checkbox"
              id="acceptTerms"
              checked={isAccepted}
              onChange={(e) => setIsAccepted(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="acceptTerms" className="text-sm">
              I accept the terms and conditions
            </label>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={handleAccept}
              disabled={!isAccepted}
              className={`px-4 py-2 rounded ${
                isAccepted
                  ? 'bg-primary text-white hover:bg-primary-dark'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsModal; 