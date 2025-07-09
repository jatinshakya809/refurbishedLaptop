export default function PaymentFooter() {
  return (
    <footer className="mx-10">
      <div className="flex fl items-center gap-3 lg:gap-6">
        <img
          className="w-12 filter grayscale hover:filter-none transition"
          src="/icons/google-pay.png"
          alt="Google Pay"
        />
        <img
          className="w-12 filter grayscale hover:filter-none transition"
          src="/icons/mastercard.png"
          alt="Mastercard"
        />
        <img
          className="w-12 filter grayscale hover:filter-none transition"
          src="/icons/paytm.png"
          alt="Paytm"
        />
        <img
          className="w-12 filter grayscale hover:filter-none transition"
          src="/icons/phonepay.png"
          alt="PhonePe"
        />
        <img
          className="w-12 filter grayscale hover:filter-none transition"
          src="/icons/visa.png"
          alt="Visa"
        />
      </div>
    </footer>
  );
}
