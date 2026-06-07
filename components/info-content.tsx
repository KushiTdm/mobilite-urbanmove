type Section = { heading: string; body: string | string[] };

export function InfoContent({ sections }: { sections: Section[] }) {
  return (
    <div className="prose prose-gray max-w-none space-y-10">
      {sections.map((s, i) => (
        <section key={i} data-reveal>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            {s.heading}
          </h2>
          {Array.isArray(s.body) ? (
            s.body.map((p, j) => (
              <p key={j} className="text-gray-600 leading-relaxed mb-4">
                {p}
              </p>
            ))
          ) : (
            <p className="text-gray-600 leading-relaxed">{s.body}</p>
          )}
        </section>
      ))}
    </div>
  );
}
