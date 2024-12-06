export default function Button({ text }) {
  return (
    <button className="bg-[#ffffff] hover:bg-[#000000] hover:text-[#ffffff] text-center text-[30px] box-border px-[5px]">
      {text}
    </button>
  );
}
