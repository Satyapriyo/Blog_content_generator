import Navbar from "../components/Navbar";

const PricingCard = ({
  title = "individual",
  price = "free",
  features = [""],
  buttonText = "enjoy unlimited",
  isPopular = false,
}) => (
  <div
    className={`bg-white rounded-lg shadow-lg overflow-hidden ${
      isPopular ? "border-4 border-blue-500" : ""
    }`}
  >
    {isPopular && (
      <div className="bg-blue-500 text-white text-center py-1 px-4">
        Most Popular
      </div>
    )}
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      <p className="text-4xl font-bold text-gray-900 mb-6">
        ${price}
        <span className="text-gray-600 text-base font-normal">/month</span>
      </p>
      <ul className="mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center mb-2">
            <svg
              className="h-5 w-5 text-green-500 mr-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M5 13l4 4L19 7"></path>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
        {buttonText}
      </button>
    </div>
  </div>
);

const Pricing = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
            Pricing Plans
          </h1>
          <p className="text-xl text-center text-gray-600 mb-12">
            Choose the perfect plan for your needs
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <PricingCard
              title="Individual"
              price="29"
              features={[
                "Unlimited queries",
                "AI-powered content generation",
                "24/7 customer support",
                "Access to all writing tools",
                "Personal dashboard",
              ]}
              buttonText="Get Started"
            />
            <PricingCard
              title="Team"
              price="99"
              features={[
                "Everything in Individual, plus:",
                "Collaborate with up to 10 team members",
                "Team analytics and insights",
                "Priority support",
                "Custom integrations",
              ]}
              buttonText="Start Team Plan"
              isPopular={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
