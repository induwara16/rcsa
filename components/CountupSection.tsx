"use client";

import CountUp from "react-countup";

export default function CountupSection() {
  return (
    <section className="z-100 grid grid-cols-1 gap-5 py-10 sm:grid-cols-2 lg:grid-cols-4">
      {[
        { end: new Date().getFullYear() - 1919, text: "Years of History" },
        { end: 8, text: "Annual Projects" },
        { end: 1000, text: "Member Base" },
        { end: 2500, text: "Social Followers" },
      ].map((item, i) => (
        <div
          className="not-intersect:opacity-0 intersect:motion-opacity-in-0 intersect:motion-scale-in-0 format dark:format-invert flex flex-col rounded-md bg-gray-100 px-8 py-12 text-center shadow-sm dark:bg-gray-700"
          key={`countup-${i}`}
          style={{ animationDelay: `${i * 200}ms` }}
        >
          <CountUp
            className="text-primary-500 mb-3 text-4xl font-semibold"
            end={item.end}
            suffix="+"
            enableScrollSpy
            delay={(i * 500) / 1000}
          />
          <h3 className="text-lg font-semibold">{item.text}</h3>
        </div>
      ))}
    </section>
  );
}
