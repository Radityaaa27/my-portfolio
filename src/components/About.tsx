export default function About() {
  return (
    <section id="about" className="px-6 py-20 sm:py-28 border-t border-border">
      <div className="mx-auto max-w-5xl grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
        <h2 className="eyebrow">About</h2>

        <div className="max-w-2xl space-y-5 text-lg text-text-muted leading-relaxed">
          <p>
            I'm Girindra Raditya Rizki — most people call me{" "}
            <span className="text-text">Radit</span>. I'm a Full-Stack
            Developer based in Indonesia, studying D4 Informatics Engineering
            at Universitas Airlangga.
          </p>
          <p>
            I have professional experience building frontend interfaces in
            React and TypeScript, and I enjoy working across the stack — from
            UI to APIs to data. Lately I've been focused on modern web
            development and exploring AI and data science, both through work
            and personal projects like Cosmos Explorer.
          </p>
        </div>
      </div>
    </section>
  );
}
