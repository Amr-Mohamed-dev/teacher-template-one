import TestimonialsCard from "../../components/TestimonialsCard/TestimonialsCard";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials bg-blue-600 py-6" id="testimonials">
      <h2 className="main-title">Best Students</h2>
      <div className="container flex flex-col md:flex-row gap-6 flex-wrap justify-center items-center">
        <TestimonialsCard />
        <TestimonialsCard />
        <TestimonialsCard />
        <TestimonialsCard />
        <TestimonialsCard />
        
      </div>
    </div>
  );
};

export default Testimonials;
