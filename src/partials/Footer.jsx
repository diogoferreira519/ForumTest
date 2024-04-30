export default function Footer() {
  return (
    <div className="absolute w-full h-1/12 bg-gray-100 flex gap-4 p-3 items-center justify-around shadow-md">
      <div className="flex items-center overflow-x-auto">
        <div className="flex items-center justify-center  gap-24">
          <a className="text-cyan-500 font-semibold">HOME</a>
          <a className="text-cyan-500 font-semibold">ACESSAR BLOG</a>
          <a className="text-cyan-500 font-semibold">REALIZAR CONTATO</a>
          <a className="text-cyan-500 font-semibold">SAIBA MAIS</a>
        </div>
      </div>
    </div>
  );
}
