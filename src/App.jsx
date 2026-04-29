import { useEffect, useMemo, useState } from 'react';
import companiesData from './data/companies.json';
import CompanyCard from './components/CompanyCard.jsx';
import Filters from './components/Filters.jsx';
import Pagination from './components/Pagination.jsx';

const COMPANIES_PER_PAGE = 5;

function App() {
  const [companies, setCompanies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('All');
  const [industryFilter, setIndustryFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data from a local source with a short delay
    setLoading(true);
    const timeout = setTimeout(() => {
      setCompanies(companiesData);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    // Reset pagination whenever any filter, search, or sort value changes
    setCurrentPage(1);
  }, [searchQuery, locationFilter, industryFilter, sortOrder]);

  const filteredCompanies = useMemo(() => {
    return companies
      .filter((company) => {
        const matchesName = company.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesLocation = locationFilter === 'All' || company.location === locationFilter;
        const matchesIndustry = industryFilter === 'All' || company.industry === industryFilter;
        return matchesName && matchesLocation && matchesIndustry;
      })
      .sort((a, b) => {
        if (sortOrder === 'asc') {
          return a.name.localeCompare(b.name);
        }
        return b.name.localeCompare(a.name);
      });
  }, [companies, searchQuery, locationFilter, industryFilter, sortOrder]);

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (searchQuery.trim() !== '') count += 1;
    if (locationFilter !== 'All') count += 1;
    if (industryFilter !== 'All') count += 1;
    if (sortOrder !== 'asc') count += 1;
    return count;
  }, [searchQuery, locationFilter, industryFilter, sortOrder]);

  const clearFilters = () => {
    setSearchQuery('');
    setLocationFilter('All');
    setIndustryFilter('All');
    setSortOrder('asc');
  };

  const totalPages = Math.ceil(filteredCompanies.length / COMPANIES_PER_PAGE);
  const pageStart = (currentPage - 1) * COMPANIES_PER_PAGE;
  const currentCompanies = filteredCompanies.slice(pageStart, pageStart + COMPANIES_PER_PAGE);
  const resultCount = filteredCompanies.length;
  const startResult = resultCount > 0 ? pageStart + 1 : 0;
  const endResult = resultCount > 0 ? Math.min(pageStart + COMPANIES_PER_PAGE, resultCount) : 0;

  const locations = useMemo(() => {
    const uniqueLocations = new Set(companies.map((company) => company.location));
    return ['All', ...Array.from(uniqueLocations).sort()];
  }, [companies]);

  const industries = useMemo(() => {
    const uniqueIndustries = new Set(companies.map((company) => company.industry));
    return ['All', ...Array.from(uniqueIndustries).sort()];
  }, [companies]);

  return (
    <main className="relative min-h-screen bg-slate-50 px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 overflow-hidden">
        <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-sky-300/30 blur-3xl" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-emerald-300/25 blur-3xl" />
        <div className="absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-violet-300/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl rounded-[2rem] bg-white/95 p-6 shadow-2xl shadow-slate-200/50 ring-1 ring-slate-200 sm:p-10">
        <header className="mb-10 space-y-6">
          <p className="text-sm uppercase tracking-[0.35em] text-sky-600">Companies Directory</p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Explore Indian businesses by city and industry</h1>
          <p className="max-w-2xl text-slate-600 sm:text-lg">
            Discover a curated directory of companies from across India with smart filters and clear company profiles.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-slate-50 p-5 shadow-sm shadow-slate-200/30">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Companies</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">{resultCount}</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-5 shadow-sm shadow-slate-200/30">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Displaying</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">{startResult}–{endResult}</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-5 shadow-sm shadow-slate-200/30">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Sorted</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">{sortOrder === 'asc' ? 'A → Z' : 'Z → A'}</p>
            </div>
          </div>
        </header>

        <Filters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          locationFilter={locationFilter}
          onLocationChange={setLocationFilter}
          industryFilter={industryFilter}
          onIndustryChange={setIndustryFilter}
          sortOrder={sortOrder}
          onSortChange={setSortOrder}
          locations={locations}
          industries={industries}
          activeFilterCount={activeFilterCount}
          onClearFilters={clearFilters}
        />

        {loading ? (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: COMPANIES_PER_PAGE }).map((_, index) => (
              <div key={index} className="animate-pulse rounded-3xl border border-slate-200 bg-slate-100 p-6"></div>
            ))}
          </div>
        ) : filteredCompanies.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center text-slate-600">
            <h2 className="text-xl font-semibold text-slate-900">No companies found</h2>
            <p className="mt-2">Try changing your search term or filters to see more results.</p>
          </div>
        ) : (
          <>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {currentCompanies.map((company) => (
                <CompanyCard key={company.id} company={company} />
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </>
        )}
      </div>
    </main>
  );
}

export default App;
