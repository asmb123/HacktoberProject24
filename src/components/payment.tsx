"use client";
import convertToSubcurrency from "@/components/convertToSubcurrency";
import CheckoutPage from "@/components/CheckoutPage";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Payment() {
  const amount = 3334;

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-6">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 transform transition duration-500 hover:scale-105">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-1">Sonny</h1>
          <p className="text-lg text-gray-600">
            has requested <span className="font-extrabold text-indigo-600">${amount}</span>
          </p>
        </div>
        <Elements
          stripe={stripePromise}
          options={{
            mode: "payment",
            amount: convertToSubcurrency(amount),
            currency: "usd",
          }}
        >
          <CheckoutPage amount={amount} />
        </Elements>
      </div>
    </main>
  );
}
