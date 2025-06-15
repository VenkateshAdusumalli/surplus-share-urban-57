
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const DonationForm = () => {
  const [loading, setLoading] = useState(false);
  const [food, setFood] = useState("");
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");
  const [expires, setExpires] = useState("");
  const [diet, setDiet] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast({
        title: "Donation created!",
        description: "Thank you for making a difference. Your surplus food has been listed.",
      });
      setLoading(false);
      setFood(""); setQuantity(""); setLocation(""); setExpires(""); setDiet("");
    }, 1000);
  };

  return (
    <form className="bg-secondary rounded-2xl shadow-xl p-8 w-full max-w-xl mx-auto flex flex-col gap-5" onSubmit={onSubmit}>
      <h2 className="text-2xl font-bold mb-2 text-primary">Offer Surplus Food</h2>

      <div>
        <Label htmlFor="food">Food Description</Label>
        <Input id="food" required value={food} onChange={e => setFood(e.target.value)} placeholder="e.g. Vegetable Soup, 10 servings"/>
      </div>
      <div>
        <Label htmlFor="quantity">Quantity</Label>
        <Input id="quantity" required value={quantity} onChange={e => setQuantity(e.target.value)} placeholder="e.g. 10 bowls"/>
      </div>
      <div>
        <Label htmlFor="location">Pickup Location</Label>
        <Input id="location" required value={location} onChange={e => setLocation(e.target.value)} placeholder="e.g. 145 Main St"/>
      </div>
      <div>
        <Label htmlFor="expires">Pickup Window / Expiry Time</Label>
        <Input id="expires" required value={expires} onChange={e => setExpires(e.target.value)} placeholder="e.g. Today, 6pm"/>
      </div>
      <div>
        <Label htmlFor="diet">Dietary Info (Optional)</Label>
        <Input id="diet" value={diet} onChange={e => setDiet(e.target.value)} placeholder="e.g. Vegetarian, Nut Free"/>
      </div>
      <Button type="submit" className="mt-4" disabled={loading}>
        {loading ? "Posting..." : "List This Donation"}
      </Button>
    </form>
  );
};

export default DonationForm;
