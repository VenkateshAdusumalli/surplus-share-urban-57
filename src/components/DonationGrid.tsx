
import DonationCard from "./DonationCard";

const sampleDonations = [
  {
    id: "1",
    food: "Fresh Baguettes",
    quantity: "12 loaves",
    expires: "Today, 6pm",
    location: "Downtown Bakery",
    donor: "Le Pain",
  },
  {
    id: "2",
    food: "Veggie Pasta Salad",
    quantity: "6 servings",
    expires: "Tomorrow, noon",
    location: "Urban Deli",
    donor: "Urban Deli",
  },
  {
    id: "3",
    food: "Organic Apples",
    quantity: "30 apples",
    expires: "Today, 7pm",
    location: "Green Market",
    donor: "Green Market",
  },
  {
    id: "4",
    food: "Chicken Sandwiches",
    quantity: "15 sandwiches",
    expires: "Today, 9pm",
    location: "Bistro 45",
    donor: "Bistro 45",
  },
];

const DonationGrid = () => (
  <section className="mt-10 mb-8 px-4">
    <h2 className="text-2xl font-bold mb-6 text-primary tracking-tight">Available Food Donations</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
      {sampleDonations.map((donation) => (
        <DonationCard
          key={donation.id}
          donation={donation}
          onClaim={() => window.alert("Claim submitted for " + donation.food)}
        />
      ))}
    </div>
  </section>
);

export default DonationGrid;
