import "./App.css";
import CarCard from "./components/CarCard";
import audiImage from "./images/audi.jpg";
import bmwImage from "./images/bmw.jpg";
import mercedesImage from "./images/mercedes.jpg";

function App() {
  const cars = [
    {
      id: 1,
      brand: "Audi",
      model: "A6",
      year : 2023,
      description: "Nje veture luks me performanca te larta dhe dizajn modern.",
      image: audiImage,
    },
    {
      id: 2,
      brand: "BMW",
      model: "M4",
      year : 2022,
      description: "Nje veture sportive me teknologji te avancuar dhe komoditet maksimal.",
      image: bmwImage,
    },
    {
      id: 3,
      brand: "Mercedes",
      model: "CLS63",
      year : 2021,
      description: "Nje veture elegante me performanca te fuqishme dhe stil te vecante.",
      image: mercedesImage,
    },
    {
      id: 4,
      brand: "Hyundai",
      model: "Elantra",
      year : 2020,
      description: "Nje veture ekonomike me performanca te mira dhe dizajn modern.",
      image: "https://hips.hearstapps.com/hmg-prod/images/2024-hyundai-elantra-limited-120-64ef85e5113c4.jpg?crop=0.764xw:0.647xh;0.122xw,0.320xh&resize=1200:*",
    },
    {
      id: 5,
      brand: "Kia",
      model: "Stinger",
      year : 2019,
      description: "Nje veture familjare me hapesire te madhe dhe teknologji te avancuar.",
      image: "https://cars.usnews.com/static/images/Auto/izmo/i159615165/2023_kia_stinger_angularfront.jpg",
    },
    {
      id: 6,
      brand: "Skoda",
      model: "Octavia RS",
      year : 2018,
      description: "Nje veture komode me performanca te mira dhe dizajn modern.",
      image: "https://cdn.skoda-storyboard.com/2016/12/161220-0ctavia-RS-1.jpg",
    },
  ];

  return (
    <div className="car-list">
    {cars.map((car) => (
      <CarCard
      key={car.id}
      brand={car.brand}
      model={car.model}
      year={car.year}
      description={car.description}
      image={car.image}
      />
    ))}
    </div>
  );
}

export default App;