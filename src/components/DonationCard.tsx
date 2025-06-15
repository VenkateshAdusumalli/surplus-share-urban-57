
import { Clock } from "lucide-react";

interface DonationCardProps {
  donation: {
    id: string;
    food: string;
    quantity: string;
    location: string;
    expires: string;
    donor: string;
  };
  onClaim?: () => void;
}

const DonationCard = ({ donation, onClaim }: DonationCardProps) => (
  <div className="bg-white shadow-lg border border-border rounded-2xl p-6 flex flex-col justify-between h-full">
    <div>
      <h3 className="text-xl font-bold mb-1 text-gray-800">{donation.food}</h3>
      <span className="text-sm text-muted-foreground mb-2 block font-medium">{donation.quantity}</span>
      <span className="inline-flex items-center gap-1 text-xs text-gray-500 mb-2">
        <Clock className="w-4 h-4" /> {donation.expires}
      </span>
      <div className="text-sm text-gray-600 font-medium">Pickup: {donation.location}</div>
      <div className="text-xs text-gray-400 mt-2">Donor: {donation.donor}</div>
    </div>
    <button
      className="mt-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition active:scale-[.98]"
      onClick={onClaim}
      tabIndex={0}
    >
      Claim This Food
    </button>
  </div>
);

export default DonationCard;
