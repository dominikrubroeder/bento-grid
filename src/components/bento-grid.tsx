import {
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircleIcon,
  StarIcon,
} from "@heroicons/react/20/solid";

export default function BentoGrid() {
  return (
    <div className="h-full w-full rounded-lg bg-gray-100 p-4 sm:p-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-6 lg:grid-cols-12">
        {/* Create and schedule content */}
        <div className="col-span-2 rounded-2xl bg-[#FFF5EB] p-4 sm:col-span-3 sm:p-6 lg:col-span-3">
          <h2 className="mb-2 text-2xl font-bold sm:text-3xl">
            Create and schedule content
            <span className="text-purple-600"> quicker.</span>
          </h2>
          <button className="mt-4 flex items-center rounded-full bg-[#FFD699] px-4 py-2 text-sm font-semibold text-black sm:text-base">
            Create Post <ArrowRightIcon className="ml-2 h-4 w-4" />
          </button>
        </div>

        {/* Social Media 10x Faster with AI */}
        <div className="col-span-2 rounded-2xl bg-purple-600 p-4 text-white sm:col-span-3 sm:p-6 lg:col-span-6">
          <h1 className="mb-2 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Social Media <span className="text-yellow-300">10x</span>
            <br />
            Faster with AI
          </h1>
          <div className="mt-4 flex items-center">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className="h-4 w-4 fill-yellow-300 text-yellow-300 sm:h-6 sm:w-6"
              />
            ))}
            <span className="ml-2 text-xs sm:text-sm">
              Over 4,000 5-star reviews
            </span>
          </div>
        </div>

        {/* Schedule to social media */}
        <div className="col-span-2 rounded-2xl bg-[#F3EEFF] p-4 sm:col-span-3 sm:p-6 lg:col-span-3">
          <h2 className="mb-4 text-xl font-bold sm:text-2xl">
            Schedule to social media.
          </h2>
          <div className="rounded-xl bg-white p-4">
            <h3 className="mb-2 text-xs font-semibold sm:text-sm">
              Best Time to Post
            </h3>
            <div className="mb-2 flex h-24 items-end justify-between sm:h-32">
              {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div
                    className={`w-4 rounded-t-lg bg-purple-600 sm:w-8 ${
                      i === 0
                        ? "h-1/4"
                        : i === 1
                          ? "h-1/2"
                          : i === 2
                            ? "h-full"
                            : i === 3
                              ? "h-3/4"
                              : "h-2/5"
                    }`}
                  ></div>
                  <span className="mt-2 text-[10px] sm:text-xs">{day}</span>
                </div>
              ))}
            </div>
            <div className="text-center text-[10px] sm:text-xs">
              <span className="font-bold text-green-500">Most Active</span>
            </div>
          </div>
          <p className="mt-4 text-xs sm:text-sm">
            Optimize post timings to publish content at the perfect time for
            your audience.
          </p>
        </div>

        {/* Write your content using AI */}
        <div className="col-span-2 rounded-2xl bg-[#FFD699] p-4 sm:col-span-3 sm:p-6 lg:col-span-3">
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
            Write your content using AI.
          </h2>
          <div className="rounded-xl bg-white p-4">
            <p className="mb-2 text-xs sm:text-sm">
              Give me 5 tips to growth my follower on Insta!
            </p>
            <div className="flex justify-end">
              <ArrowUpIcon className="h-4 w-4 text-purple-600 sm:h-6 sm:w-6" />
            </div>
          </div>
          <div className="mt-4 rounded-xl bg-[#FFF5EB] p-4">
            <p className="mb-2 text-xs sm:text-sm">
              Here are five tips to help you grow your Instagram followers:
            </p>
            <ArrowUpIcon className="mt-2 h-4 w-4 rotate-180 transform text-purple-600 sm:h-6 sm:w-6" />
          </div>
        </div>

        {/* Manage multiple accounts */}
        <div className="col-span-2 rounded-2xl bg-white p-4 sm:col-span-3 sm:p-6 lg:col-span-3">
          <h2 className="mb-2 text-xl font-bold sm:text-2xl">
            Manage multiple accounts and platforms.
          </h2>
          <div className="mt-4 flex space-x-2">
            <div className="rounded-full bg-pink-100 p-2">
              <img
                src="/placeholder.svg?height=32&width=32"
                alt="Instagram"
                className="h-6 w-6 sm:h-8 sm:w-8"
              />
            </div>
            <div className="rounded-full bg-blue-100 p-2">
              <img
                src="/placeholder.svg?height=32&width=32"
                alt="Twitter"
                className="h-6 w-6 sm:h-8 sm:w-8"
              />
            </div>
          </div>
        </div>

        {/* Maintain a consistent posting schedule */}
        <div className="col-span-2 rounded-2xl bg-[#FFD699] p-4 sm:col-span-3 sm:p-6 lg:col-span-3">
          <h2 className="mb-2 text-xl font-bold sm:text-2xl">
            Maintain a consistent posting schedule.
          </h2>
          <div className="mt-2 inline-block rounded-lg bg-purple-600 p-2 text-xs text-white sm:text-sm">
            August 2024 <span className="ml-2 font-bold">Week1</span>
          </div>
          <div className="mt-4 flex space-x-2">
            {[...Array(4)].map((_, i) => (
              <CheckCircleIcon
                key={i}
                className="h-4 w-4 text-purple-600 sm:h-6 sm:w-6"
              />
            ))}
          </div>
        </div>

        {/* >56% faster audience growth */}
        <div className="col-span-2 rounded-2xl bg-white p-4 sm:col-span-3 sm:p-6 lg:col-span-3">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">56%</h2>
          <p className="text-lg sm:text-xl">faster audience growth</p>
          <div className="mt-4 flex">
            <img
              src="/placeholder.svg?height=40&width=40"
              alt="Avatar 1"
              className="h-8 w-8 rounded-full sm:h-10 sm:w-10"
            />
            <img
              src="/placeholder.svg?height=40&width=40"
              alt="Avatar 2"
              className="-ml-2 h-8 w-8 rounded-full sm:h-10 sm:w-10"
            />
            <img
              src="/placeholder.svg?height=40&width=40"
              alt="Avatar 3"
              className="-ml-2 h-8 w-8 rounded-full sm:h-10 sm:w-10"
            />
          </div>
        </div>

        {/* Grow followers with non-stop content */}
        <div className="col-span-2 rounded-2xl bg-purple-600 p-4 text-white sm:col-span-6 sm:p-6 lg:col-span-12">
          <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
            <div>
              <h3 className="mb-1 text-lg sm:text-xl">Follower Growth</h3>
              <div className="text-2xl font-bold sm:text-4xl">
                20,642{" "}
                <span className="text-xs text-green-400 sm:text-sm">+80%</span>
              </div>
              <div className="mt-2 flex items-center">
                <ArrowUpIcon className="mr-1 h-4 w-4 text-yellow-300 sm:h-5 sm:w-5" />
                <span className="text-xl font-bold sm:text-2xl">89,532</span>
                <span className="ml-1 text-xs text-green-400 sm:text-sm">
                  +102%
                </span>
                <span className="ml-2 text-xs sm:text-sm">Followers</span>
              </div>
            </div>
            <div className="mt-4 sm:mt-0">
              <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                Grow followers
                <br />
                with non-stop
                <br />
                content.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
