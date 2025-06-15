
const stats = [
  { title: "Meals Saved", value: "8,500+" },
  { title: "Donors", value: "94" },
  { title: "Recipients Served", value: "612" },
];

const HeroStats = () => (
  <section className="grid grid-cols-3 gap-6 max-w-2xl mx-auto my-6">
    {stats.map(stat => (
      <div key={stat.title} className="rounded-xl bg-secondary shadow px-6 py-6 flex flex-col items-center">
        <span className="text-3xl font-extrabold text-green-700">{stat.value}</span>
        <span className="text-base font-medium text-gray-500 mt-2 uppercase tracking-wide">{stat.title}</span>
      </div>
    ))}
  </section>
);

export default HeroStats;
