export default function BestTimeToPost() {
  return (
    <div className="col-span-2 rounded-2xl bg-[#F3EEFF] p-4 sm:col-span-3 sm:p-6 lg:col-span-3">
      <h2 className="mb-4 text-xl font-bold sm:text-2xl">
        Schedule to social media.
      </h2>
      <div className="rounded-xl bg-white p-4">
        <h3 className="mb-2 border-b pb-4 text-xs font-semibold sm:text-sm">
          Best Time to Post
        </h3>

        <ul className="mb-2 flex justify-between gap-2">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
            <li
              key={i}
              className="relative flex h-full flex-col items-center justify-between gap-2"
            >
              <span className="mt-2 flex whitespace-nowrap text-[10px] sm:text-xs">
                {day}
              </span>

              {i === 2 && (
                <span className="absolute top-0 w-full break-keep font-bold text-green-500">
                  Most Active
                </span>
              )}

              <div
                className={`w-4 shrink-0 rounded-full bg-purple-600 sm:w-8 ${
                  i === 0
                    ? "h-14"
                    : i === 1
                      ? "h-20"
                      : i === 2
                        ? "h-36"
                        : i === 3
                          ? "h-28"
                          : "h-24"
                }`}
              />
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-4 text-xs sm:text-sm">
        Optimize post timings to publish content at the perfect time for your
        audience.
      </p>
    </div>
  );
}
