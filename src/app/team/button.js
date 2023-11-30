"use client";
const Button = ({ name }) => {
  return (
    <button
      className="rounded border border-blue-600 bg-blue-200 px-2 py-1 font-semibold text-lg"
      onClick={() => alert(name)}
    >
      {name}
    </button>
  );
};

export default Button;
