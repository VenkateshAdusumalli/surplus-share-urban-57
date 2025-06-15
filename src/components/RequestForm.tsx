
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const RequestForm = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast({
        title: "Request received!",
        description: "Your details have been submitted for review. We'll contact you soon.",
      });
      setLoading(false);
      setName(""); setOrg(""); setEmail("");
    }, 1500);
  };

  return (
    <form className="bg-secondary rounded-2xl shadow-xl p-8 w-full max-w-xl mx-auto flex flex-col gap-5" onSubmit={onSubmit}>
      <h2 className="text-2xl font-bold mb-2 text-primary">Recipient Registration</h2>
      <div>
        <Label htmlFor="name">Your Name</Label>
        <Input id="name" required value={name} onChange={e => setName(e.target.value)} placeholder="Full Name"/>
      </div>
      <div>
        <Label htmlFor="org">Organization (Optional)</Label>
        <Input id="org" value={org} onChange={e => setOrg(e.target.value)} placeholder="School, Shelter, etc."/>
      </div>
      <div>
        <Label htmlFor="email">Contact Email</Label>
        <Input id="email" type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="you@email.com"/>
      </div>
      <Button type="submit" className="mt-4" disabled={loading}>
        {loading ? "Submitting..." : "Submit Request"}
      </Button>
    </form>
  );
};

export default RequestForm;
