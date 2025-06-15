
import NavBar from "@/components/NavBar";
import HeroStats from "@/components/HeroStats";
import DonationGrid from "@/components/DonationGrid";
import DonationForm from "@/components/DonationForm";
import RequestForm from "@/components/RequestForm";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <NavBar />
      <main className="flex-1 w-full pb-10">
        <section className="relative pt-16 pb-10 bg-gradient-to-br from-green-50 via-white to-blue-50 shadow-inner">
          <div className="container max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
            <h1 className="text-5xl font-extrabold tracking-tight leading-tight text-green-800 mb-4">
              Connect Surplus Food <span className="text-green-500">with Local Need</span>
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground mb-8">
              Empowering communities by rerouting edible surplus food from businesses straight to those facing hunger. Reduce waste. Feed people. Foster sustainability.
            </p>
            <div className="flex gap-6 mt-2">
              <a href="#donate">
                <button className="bg-green-600 hover:bg-green-700 active:scale-95 text-white font-bold px-8 py-3 rounded-full shadow-xl text-lg transition">
                  I’m a Donor
                </button>
              </a>
              <a href="#request">
                <button className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold px-8 py-3 rounded-full shadow-xl text-lg transition">
                  I’m a Recipient
                </button>
              </a>
            </div>
          </div>
          <HeroStats />
        </section>
        
        <section>
          <DonationGrid />
        </section>

        <section id="donate" className="mt-20">
          <DonationForm />
        </section>
        <section id="request" className="mt-20">
          <RequestForm />
        </section>

        <section id="about" className="mt-16 max-w-3xl mx-auto px-4 pb-10">
          <h2 className="text-2xl font-bold text-primary mb-4">About FoodShare</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            FoodShare is on a mission to end needless food waste and hunger in our urban communities. By connecting donors and recipients in real time, we help ensure that every surplus meal goes to those who need it most. 
          </p>
          <ul className="list-disc list-inside mt-4 text-green-800 font-medium">
            <li>Cut food waste—fresh food to people, not landfills.</li>
            <li>Reduce environmental damage, support a healthier city.</li>
            <li>Foster connections and restore dignity for those in need.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Index;
