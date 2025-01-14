import { ArrowRight, ArrowDown } from 'lucide-react'

export default function Home() {
  return (
    <div className="relative max-w-6xl mx-auto pt-20">
      <button className="work-with-me-button">
        <span className="top-text">Work</span>
        <div className="divider">
          <ArrowRight size={16} />
        </div>
        <span className="bottom-text">with me</span>
      </button>

      <button className="honors-button">
        Honors
      </button>

      <div className="accent-square" />

      <div className="space-y-8">
        <div className="numbered-line">
          <span className="number">01</span>
          <span>
            {"<"}Hello, I'm{" "}
            <span className="text-[#000066] font-medium">Brice</span>!{">"}
          </span>
        </div>

        <div className="numbered-line">
          <span className="number">02</span>
          <span>
            {"<"}I{" "}
            <span className="text-[#000066] font-medium">design</span>
            {" "}and{" "}
            <span className="text-[#000066] font-medium">develop</span>
          </span>
        </div>

        <div className="numbered-line">
          <span className="number">03</span>
          <span>websites.{">"}</span>
        </div>

        <p className="text-gray-600 mt-12 text-lg font-light">
          I also design your brand image, logo...
        </p>

        <div className="flex justify-center mt-16">
          <button className="learn-more-button">
            Learn more <ArrowDown size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}

