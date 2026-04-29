import { useState } from 'react';
import IndustryGraphic from './IndustryGraphic.jsx';

function CompanyCard({ company }) {
  const [hasImageError, setHasImageError] = useState(false);
  const showImage = company.imageUrl && !hasImageError;

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm shadow-slate-200/50 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative overflow-hidden">
        {showImage ? (
          <img
            src={company.imageUrl}
            alt={`${company.name} cover`}
            onError={() => setHasImageError(true)}
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <IndustryGraphic industry={company.industry} />
        )}

        <div className="absolute left-5 top-5 rounded-full bg-slate-950/70 px-3 py-1 text-[10px] uppercase tracking-[0.35em] text-slate-100 shadow-lg shadow-slate-950/20">
          Verified
        </div>
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent px-5 py-4 text-white">
          <span className="rounded-full bg-sky-500/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
            {company.industry}
          </span>
          <span className="text-xs uppercase tracking-[0.18em] text-slate-200">{company.location}</span>
        </div>
      </div>
      <div className="flex h-full flex-col justify-between p-6">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">{company.name}</h2>
          <p className="mt-4 text-slate-600 leading-relaxed line-clamp-4">{company.description}</p>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-slate-500">
            <p>ID: <span className="text-slate-700 font-medium">{company.id}</span></p>
          </div>
          <button className="inline-flex items-center justify-center rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-600">
            View profile
          </button>
        </div>
      </div>
    </article>
  );
}

export default CompanyCard;
