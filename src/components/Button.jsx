export default function Button({ text, className = "", ...props }) {
  return (
    <button
      className="bg-[#ffffff] hover:bg-[#000000] hover:text-[#ffffff] text-center box-border px-[5px] sm:text-[30px] text-[13px]"
      {...props}
    >
      {text}
    </button>
  );
}
