import './hero-artwork.css'

export function HeroArtwork() {
  return (
    <figure className="hero-artwork">
      <img
        className="hero-artwork-image"
        src="/images/engineering-ai-cloud-denim.png"
        width="1254"
        height="1254"
        alt="Silver three-dimensional code brackets surrounding an AI chip, with a graphite gear and denim-blue building blocks."
        fetchPriority="high"
        decoding="async"
        draggable={false}
      />
      <figcaption className="hero-artwork-caption">
        <span>LOGIC MEETS CURIOSITY.</span>
        <span aria-hidden="true">&lt; / &gt;</span>
      </figcaption>
    </figure>
  )
}
