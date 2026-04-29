function Filters({
  searchQuery,
  onSearchChange,
  locationFilter,
  onLocationChange,
  industryFilter,
  onIndustryChange,
  sortOrder,
  onSortChange,
  locations,
  industries,
  activeFilterCount,
  onClearFilters,
}) {
  return (
    <section className="mb-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-5 shadow-sm shadow-slate-100 sm:p-6">
      <div className="mb-6 rounded-3xl bg-white p-5 shadow-sm shadow-slate-100">
        <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Company finder</p>
        <p className="mt-2 text-sm text-slate-600">Filter by city, industry, or company name to find the best match for your needs.</p>
      </div>
      <div className="grid gap-4 xl:grid-cols-[1.7fr_1fr]">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">Search companies</span>
          <input
            type="text"
            value={searchQuery}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search by company name..."
            className="w-full rounded-3xl border border-slate-300 bg-white px-5 py-4 text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
          />
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Location</span>
            <select
              value={locationFilter}
              onChange={(event) => onLocationChange(event.target.value)}
              className="w-full rounded-3xl border border-slate-300 bg-white px-4 py-4 text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
            >
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Industry</span>
            <select
              value={industryFilter}
              onChange={(event) => onIndustryChange(event.target.value)}
              className="w-full rounded-3xl border border-slate-300 bg-white px-4 py-4 text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
            >
              {industries.map((industry) => (
                <option key={industry} value={industry}>
                  {industry}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_1.2fr]">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">Sort by</span>
          <select
            value={sortOrder}
            onChange={(event) => onSortChange(event.target.value)}
            className="w-full rounded-3xl border border-slate-300 bg-white px-4 py-4 text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
          >
            <option value="asc">Name: A → Z</option>
            <option value="desc">Name: Z → A</option>
          </select>
        </label>

        <div className="rounded-3xl bg-white p-5 ring-1 ring-slate-200">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-600">
              Active filters: <span className="font-semibold text-slate-900">{activeFilterCount}</span>
            </p>
            <button
              type="button"
              onClick={onClearFilters}
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Reset filters
            </button>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Filter and sort the directory, then reset anytime to return to the full company list.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Filters;
