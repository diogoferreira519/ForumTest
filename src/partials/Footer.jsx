export default function Footer() {
  return (
    <div className="absolute w-full h-1/12 bg-cyan-400 flex gap-4 p-3 items-center justify-around shadow-md border-t border-white">
      <div className="flex items-center overflow-x-auto">
        <div className="flex items-center justify-center  gap-24">
          <a className="text-slate-700 font-semibold">HOME</a>
          <a className="text-slate-700 font-semibold">ACESSAR BLOG</a>
          <a className="text-slate-700 font-semibold">REALIZAR CONTATO</a>
          <a className="text-slate-700 font-semibold">SAIBA MAIS</a>
        </div>
      </div>
    </div>
  );
}
