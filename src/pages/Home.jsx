export function Home() {
  return (
    <>
      {/* -- Header -- */}

      {/* -- Main Content -- */}
      <main class="px-8 py-12">
        <section class="text-center">
          <h2 class="text-2xl font-bold mb-4 uppercase">
            Declassified: Request of Cultural Biohacking Project #A0392
          </h2>
          <p class="text-gray-700 max-w-2xl mx-auto mb-6">
            <span class="font-bold text-gray-800">
              Cold war ultimate weapon
            </span>
            , discovered during Operation Paperclip by
            <span class="bg-black text-black px-2">███</span>, has been
            deprecated, and other cognitive breakthroughs during Project Code:
            MK Ultra.
          </p>

          <div class="bg-gray-100 p-4 rounded-lg shadow-lg">
            <h3 class="text-xl font-bold uppercase mb-2">
              Begin Cognitive Mesmerism Module #A4928
            </h3>
            <p class="text-gray-700">
              <span class="bg-black text-black px-2">███</span> and
              <span class="bg-black text-black px-2">███</span> approve subjects
              available for testing. Range of adverse effects in public
              applications.
            </p>
          </div>
        </section>

        {/* <!-- Non-Military Applications --> */}
        <section class="mt-12">
          <h3 class="text-xl font-bold mb-6">Non-Military Applications</h3>
          <div class="grid grid-cols-3 gap-8">
            {/* <!-- Diamond Hooves --> */}
            <div class="text-center">
              <div class="text-4xl">♦</div>
              <h4 class="text-lg font-bold mt-2">
                Project Code: Diamond Hooves
              </h4>
              <p>Location: New Delhi, India</p>
              <p>Status: Success</p>
              <a
                href="#"
                class="text-blue-500 font-medium underline mt-2 block"
              >
                See Files
              </a>
            </div>

            {/* <!-- Flip Big Milk --> */}
            <div class="text-center">
              <div class="text-4xl">🍼</div>
              <h4 class="text-lg font-bold mt-2">
                Project Code: Flip Big Milk
              </h4>
              <p>Location: Wisconsin, USA</p>
              <p>Status: Approved</p>
              <a
                href="#"
                class="text-blue-500 font-medium underline mt-2 block"
              >
                See Files
              </a>
            </div>

            {/* <!-- Classified --> */}
            <div class="text-center">
              <div class="text-4xl">❓</div>
              <h4 class="text-lg font-bold mt-2">Project Code: Classified</h4>
              <p>Location: Classified</p>
              <p>Status: Pending Approval</p>
              <p class="text-gray-500">Not Available</p>
            </div>
          </div>
        </section>

        {/* <!-- Declassified Publications --> */}
        <section class="mt-12">
          <h3 class="text-xl font-bold mb-6">Declassified Publications</h3>
          <ul class="list-disc list-inside space-y-2">
            <li>
              Han, S., & Northoff, G. (2008). Culture-sensitive neural
              substrates of human cognition: A transcultural neuroimaging
              approach. <i>Nature Reviews Neuroscience</i>, 9(8), 646–654.
            </li>
            <li>
              Shiller, R. J. (2017). Narrative economics.{" "}
              <i>American Economic Review</i>, 107(4), 967–1004.
            </li>
            <li>
              Wiles, A. (1995). Modular elliptic curves and Fermat's Last
              Theorem.
              <i>Annals of Mathematics</i>, 141(3), 443–551.
            </li>
          </ul>
        </section>
      </main>

      {/* <!-- Footer --> */}
      <footer class="mt-12 px-8 py-4 text-center text-sm text-gray-600 border-t border-gray-300">
        ALL RIGHTS RESERVED BY CENTRAL INTELLIGENCE | ANY UNLAWFUL DISTRIBUTION
        OF THIS CONTENT WILL BE ENFORCED VIA CHAPTER 12-03B § 19 OF THE
        INTERNATIONAL CODE
      </footer>
    </>
  );
}
